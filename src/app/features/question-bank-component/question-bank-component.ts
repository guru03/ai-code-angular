import { Component, inject, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { LANGUAGES, TOPICS } from '../../models/question.model';
import { Observable } from 'rxjs';
import { getCategoryCounts } from './state/question-bank.selector';
import { loadQuestionBank } from './state/question-bank.action';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';

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
  // activeCategory = signal('All');
  testing = ['All', 'Angular', 'NgRx', 'Signals', 'JavaScript', 'HR', 'MCP'];
  categories = LANGUAGES;
  topics = TOPICS;
  activeCategory: string = LANGUAGES[0].name;
  activeTopic: string = '';
  categoryCounts$!: Observable<Record<string, number>>;

  ngOnInit(): void {
    this.categoryCounts$ = this.store.select(getCategoryCounts);

    // Default load (Angular by default)
    this.store.dispatch(loadQuestionBank({ language: 'angular' }));

    this.activatedRoute.queryParamMap.subscribe(params => {
      this.activeCategory = params.get('category') ?? LANGUAGES[0].name;
      this.activeTopic = params.get('topic') ?? '';

      // Dispatch again when category changes
      if (this.activeCategory.toLowerCase() === 'javascript') {
        this.store.dispatch(loadQuestionBank({ language: 'javascript' }));
      } else {
        this.store.dispatch(loadQuestionBank({ language: 'angular' }));
      }
    });

    this.sortingCategory();
  }

  sortingCategory() {
    this.testing.sort((a, b) =>
      a.localeCompare(b) ? 1 : -1
    );
    console.log(this.testing);
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;

    // Navigate with query param
    this.router.navigate(['questions'], {
      relativeTo: this.activatedRoute,
      queryParams: { category: category === LANGUAGES[0].name ? null : category },
    });

    // Dispatch loadQuestions with language
    const language = category.toLowerCase() === 'javascript' ? 'javascript' : 'angular';
    this.store.dispatch(loadQuestionBank({ language }));
  }

  // filterByCategory(category: string): void {
  //   this.activeCategory = category;

  //   this.router.navigate(['questions'], {
  //     relativeTo: this.route,
  //     queryParams: { category: category === LANGUAGES[0].name ? null : category },
  //   });
  // }

  filterByTopics(topic: string): void {
    this.activeTopic = topic;

    this.router.navigate(['questions'], {
      relativeTo: this.activatedRoute,
      queryParams: { topic },
      queryParamsHandling: 'merge',
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}

