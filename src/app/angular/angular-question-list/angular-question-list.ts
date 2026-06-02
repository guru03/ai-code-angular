import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { getQuestions, selectQuestionsByCategory } from '../state/angular.selector';
import { loadQuestionById, loadQuestions } from '../state/angular.action';
import { Question } from '../../models/question.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'aic-angular-question-list',
  imports: [AsyncPipe, RouterLinkActive, RouterLink],
  templateUrl: './angular-question-list.html',
  styleUrl: './angular-question-list.scss',
})
export class AngularQuestionList implements OnInit {
  activeCategory = signal('All');
  getQuestionList$!: Observable<Question[]>;
  selectedQuestion$!: Observable<Question | null>;
  private sanitizer = inject(DomSanitizer);
  private store = inject(Store<AppState>);

  ngOnInit() {
    this.getQuestionList$ = this.store.select(getQuestions);
    // this.selectedQuestion$ = this.store.select(getSelectedQuestion);
    this.store.dispatch(loadQuestions());
  }

  // filterByCategory(category: string): void {
  //   this.activeCategory.set(category);
  //   this.getQuestionList$ = this.store.select(selectQuestionsByCategory(category));
  // }

  onQuestionClick(id: number) {
    this.store.dispatch(loadQuestionById({ id }));
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
