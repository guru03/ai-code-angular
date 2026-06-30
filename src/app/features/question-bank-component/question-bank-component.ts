import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
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
  encapsulation: ViewEncapsulation.None,
})
export class QuestionBankComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store<AppState>);
  // activeLanguage = signal('All');
  technicalLanguages = SUPPORTED_LANGUAGES;
  topics = TOPICS;
  activeLanguage: string = SUPPORTED_LANGUAGES[0].name;
  activeTopic: string = '';
  categoryCounts$!: Observable<Record<string, number>>;

  topicCounts$ = this.store.select(selectTopicCounts);

  ngOnInit(): void {
    this.categoryCounts$ = this.store.select(getCategoryCounts);

    // Default load (Angular by default)
    this.store.dispatch(loadQuestionBank({ language: 'angular' }));
    this.store.dispatch(loadTopicCounts());

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.activeLanguage = params.get('category') ?? SUPPORTED_LANGUAGES[0].name;
      this.activeTopic = params.get('topic') ?? '';

      // Dispatch again when category changes
      if (this.activeLanguage.toLowerCase() === 'javascript') {
        this.store.dispatch(loadQuestionBank({ language: 'javascript' }));
      } else {
        this.store.dispatch(loadQuestionBank({ language: 'angular' }));
      }
    });
  }

  filterByCategory(techLanguage: string): void {
    this.activeLanguage = techLanguage;

    this.router.navigate(['questions'], {
      relativeTo: this.activatedRoute,
      queryParams: { language: techLanguage === SUPPORTED_LANGUAGES[0].name ? null : techLanguage },
    });

    // Dispatch loadQuestions with language
    const language = techLanguage.toLowerCase() === 'javascript' ? 'javascript' : 'angular';
    this.store.dispatch(loadQuestionBank({ language }));
  }

  filterByTopics(topic: string): void {
    const lowerTopic = topic.toLowerCase();
    this.activeTopic = lowerTopic;

    this.router.navigate(['questions'], {
      relativeTo: this.activatedRoute,
      queryParams: { topic: lowerTopic },
      queryParamsHandling: 'merge',
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

