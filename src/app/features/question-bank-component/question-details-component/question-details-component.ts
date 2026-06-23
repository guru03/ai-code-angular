import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { loadQuestionBankById } from '../state/question-bank.action';
import { getSelectedQuestion } from '../state/question-bank.selector';

@Component({
  selector: 'aic-question-details-component',
  imports: [AsyncPipe],
  templateUrl: './question-details-component.html',
  styleUrl: './question-details-component.scss',
})
export class QuestionDetailsComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private store = inject(Store<AppState>);
  private sanitizer = inject(DomSanitizer);
  selectedQuestion$ = this.store.select(getSelectedQuestion);

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('id');
      const category = this.activatedRoute.snapshot.queryParamMap.get('category') ?? 'angular';

      if (id) {
        const language = category.toLowerCase() === 'javascript' ? 'javascript' : 'angular';
        this.store.dispatch(loadQuestionBankById({ id: +id, language }));
      }
    });
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
