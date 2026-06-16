import { Component, OnInit, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { loadQuestions } from './state/angular.action';
import { getCategoryCounts } from './state/angular.selector';
import { LANGUAGES } from '../models/question.model';

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
  activeCategory: string = 'All'; // default active
  categoryCounts$!: Observable<Record<string, number>>;

  ngOnInit(): void {
    this.categoryCounts$ = this.store.select(getCategoryCounts);
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe(params => {
      this.activeCategory = params.get('category') ?? 'All';
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
      queryParams: category === 'All' ? {} : { category },
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
