import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { selectQuestionsByFilters } from '../state/angular.selector';
import { loadQuestionById, loadQuestions } from '../state/angular.action';
import { Question } from '../../models/question.model';
import { Labels, WorkStatus } from '../../enum/enum';
import { Observable } from 'rxjs';
import { PadZeroPipe } from '../../pipes/pad-zero-pipe';
import { CodeSnippetDirective } from '../../directive/code-snippet-directive';

@Component({
  selector: 'aic-angular-question-list',
  imports: [AsyncPipe, RouterLink, CommonModule, PadZeroPipe,  CodeSnippetDirective],
  templateUrl: './angular-question-list.html',
  styleUrl: './angular-question-list.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AngularQuestionList implements OnInit {
  activeCategory = signal('All');
  readonly WorkStatus = WorkStatus;
  readonly label = Labels;
  getQuestionList$!: Observable<Question[]>;
  selectedQuestion$!: Observable<Question | null>;
  private sanitizer = inject(DomSanitizer);
  private store = inject(Store<AppState>);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe(params => {
      const category = params.get('category') ?? 'All';
      const topic = params.get('topic');
      this.activeCategory.set(category);
      this.getQuestionList$ = this.store.select(selectQuestionsByFilters(category, topic));
    });
  }

  onQuestionClick(id: number) {
    this.store.dispatch(loadQuestionById({ id }));
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
