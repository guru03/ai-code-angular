import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getQuestions } from './state/angular.selector';
import { AsyncPipe, NgClass } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { loadQuestions } from './state/angular.action';

@Component({
  selector: 'aic-angular',
  imports: [AsyncPipe, NgClass],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular implements OnInit {
  activeCategory = signal('All');
  getQuestionList$!: Observable<Question[]>;
  private sanitizer = inject(DomSanitizer);
  private store = inject(Store<AppState>);

  constructor(private store1: Store<AppState>) { }

  ngOnInit() {
    this.getQuestionList$ = this.store.select(getQuestions);
    this.store.dispatch(loadQuestions());
  }

  filterByCategory(category: string): void {

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
