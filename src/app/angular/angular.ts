import { Component, OnInit, inject, signal } from '@angular/core';
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
  activeTopic: string = TOPICS[0].name;
  categoryCounts$!: Observable<Record<string, number>>;

  ngOnInit(): void {
    this.categoryCounts$ = this.store.select(getCategoryCounts);
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe(params => {
      this.activeCategory = params.get('category') ?? LANGUAGES[0].name;
      this.filterByCategory(this.activeCategory);

      this.activeTopic = params.get('topic') ?? LANGUAGES[0].name;
      this.filterByTopics(this.activeTopic);
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

    this.router.navigate(['questions'], {
      relativeTo: this.route,
      queryParams: category === LANGUAGES[0].name ? {} : { category },
    });
  }

  filterByTopics(topics: string): void {
    this.activeTopic = topics;

    this.router.navigate(['questions'], {
      relativeTo: this.route,
      queryParams: topics === TOPICS[0].name ? {} : { topics },
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
