import { Component, OnInit, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { loadQuestions } from './state/angular.action';
import { getCategoryCounts } from './state/angular.selector';
import { LANGUAGES, TOPICS } from '../models/question.model';

@Component({
  selector: 'aic-angular',
  imports: [AsyncPipe, NgClass, RouterOutlet, CommonModule],
  templateUrl: './angular.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './angular.scss',
})
export class Angular implements OnInit {
  private route = inject(ActivatedRoute);
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
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe((params) => {
      this.activeCategory = params.get('category') ?? LANGUAGES[0].name;
      this.activeTopic = params.get('topic') ?? '';
    });

    this.sortingCategory();
  }

  sortingCategory() {
    this.testing.sort((a, b) => (a.localeCompare(b) ? 1 : -1));
    console.log(this.testing);
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;

    this.router.navigate(['questions'], {
      relativeTo: this.route,
      queryParams: { category: category === LANGUAGES[0].name ? null : category },
      // queryParamsHandling: 'merge',
    });
  }

  filterByTopics(topic: string): void {
    this.activeTopic = topic;

    this.router.navigate(['questions'], {
      relativeTo: this.route,
      queryParams: { topic },
      queryParamsHandling: 'merge',
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
