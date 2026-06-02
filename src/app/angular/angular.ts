import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { selectQuestionsByCategory } from './state/angular.selector';
import { Question } from '../models/question.model';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'aic-angular',
  imports: [NgClass, RouterOutlet],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular {
  private store = inject(Store<AppState>);
  activeCategory = signal('All');
  getQuestionList$!: Observable<Question[]>;

  filterByCategory(category: string): void {
    this.activeCategory.set(category);
    this.getQuestionList$ = this.store.select(selectQuestionsByCategory(category));
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
