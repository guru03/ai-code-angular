import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { loadQuestionById } from '../state/angular.action';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'aic-angular-question-details',
  imports: [AsyncPipe],
  templateUrl: './angular-question-details.html',
  styleUrl: './angular-question-details.scss',
})
export class AngularQuestionDetails implements OnInit {
  private ActivatedRoute = inject(ActivatedRoute);
  private store = inject(Store<AppState>);
  selectedQuestion$ = this.store.select(state => state.questions.selectedQuestion);

  ngOnInit() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.store.dispatch(loadQuestionById({ id: +id }));
    }
  }
}
