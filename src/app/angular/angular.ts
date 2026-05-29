import { Component, inject, OnInit, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { getQuestions } from './state/angular.selector';
import { AsyncPipe, NgClass } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'aic-angular',
  imports: [AsyncPipe, NgClass],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular implements OnInit {
  activeCategory = signal('All');
  getQuestionList$: Observable<Question[]> = new Observable<Question[]>();
  private sanitizer = inject(DomSanitizer);

  constructor(private store1: Store<AppState>) { }

  ngOnInit() {
    this.getQuestionList$ = this.store1.select(getQuestions);
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
