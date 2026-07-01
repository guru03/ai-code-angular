import {
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCategoryCounts, selectTopicCounts } from './state/question-bank.selector';
import { loadQuestionBank, loadTopicCounts } from './state/question-bank.action';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { SUPPORTED_LANGUAGES } from './models/language.models';
import { TOPICS } from './models/topics.models';

@Component({
  selector: 'aic-question-bank-component',
  imports: [AsyncPipe, NgClass, RouterOutlet, CommonModule],
  templateUrl: './question-bank-component.html',
  styleUrl: './question-bank-component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class QuestionBankComponent implements OnInit {
  // Inject Angular services
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store<AppState>);

  // Supported filters
  technicalLanguages = SUPPORTED_LANGUAGES;
  topics = TOPICS;

  // Active selections
  activeLanguage: string = SUPPORTED_LANGUAGES[0].name; // Default to "All"
  activeTopic: string = '';
  // activeLanguage = signal('All');

  // Observables for counts
  categoryCounts$!: Observable<Record<string, number>>;
  topicCounts$ = this.store.select(selectTopicCounts);

  ngOnInit(): void {
    // Load initial data
    this.categoryCounts$ = this.store.select(getCategoryCounts);
    this.store.dispatch(loadQuestionBank({ language: 'angular' }));
    this.store.dispatch(loadTopicCounts({ language: 'angular' }));

    // React to query params (category/topic changes)
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.activeLanguage = params.get('language') ?? SUPPORTED_LANGUAGES[0].name;
      this.activeTopic = params.get('topic') ?? '';

      // Dispatch loadQuestionBank based on active language
      const normalized = this.activeLanguage.toLowerCase();
      const language = normalized === 'javascript' ? 'javascript' : 'angular';
      this.store.dispatch(loadQuestionBank({ language }));
      this.store.dispatch(loadTopicCounts({ language }));
    });
  }

  /**
   * Filter questions by category (language).
   * Updates activeLanguage, navigates with query params, and dispatches store action.
   */
  filterByCategory(techLanguage: string): void {
    this.activeLanguage = techLanguage;

    this.router.navigate(['questions'], {
      relativeTo: this.activatedRoute,
      queryParams: {
        language: techLanguage === SUPPORTED_LANGUAGES[0].name ? null : techLanguage,
      },
    });

    const language = techLanguage.toLowerCase() === 'javascript' ? 'javascript' : 'angular';
    this.store.dispatch(loadQuestionBank({ language }));
    this.store.dispatch(loadTopicCounts({ language }));
  }

  /**
   * Filter questions by topic.
   * Updates activeTopic, merges query params, and navigates.
   */
  filterByTopics(topic: string): void {
    const lowerTopic = topic.toLowerCase();
    this.activeTopic = lowerTopic;

    this.router.navigate(['questions'], {
      relativeTo: this.activatedRoute,
      queryParams: { topic: lowerTopic },
      queryParamsHandling: 'merge',
    });
  }

  /**
   * Smooth scroll to top of the page.
   */
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
