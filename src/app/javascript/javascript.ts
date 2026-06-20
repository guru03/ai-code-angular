import { Component, OnInit, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { loadQuestions } from './state/javascript.action';
import { getCategoryCounts } from './state/javascript.selector';
import { LANGUAGES } from '../models/question.model';

@Component({
  selector: 'aic-javascript',
  imports: [AsyncPipe, NgClass, RouterOutlet, CommonModule],
  templateUrl: './javascript.html',
  styleUrl: './javascript.scss',
})
export class Javascript implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store<AppState>);
  // activeCategory = signal('All');
  testing = ['All', 'Angular', 'NgRx', 'Signals', 'JavaScript', 'HR', 'MCP'];
  categories = LANGUAGES;
  activeCategory: string = LANGUAGES[0].name;
  categoryCounts$!: Observable<Record<string, number>>;

  ngOnInit(): void {
    this.categoryCounts$ = this.store.select(getCategoryCounts);
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe(params => {
      this.activeCategory = params.get('category') ?? LANGUAGES[0].name;
      this.filterByCategory(this.activeCategory);
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

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}