import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PadZeroPipe } from '../../../pipes/pad-zero-pipe';
import { CodeSnippetDirective } from '../../../directive/code-snippet-directive';
import { Loader } from '../../../loader/loader';
import { Labels, WorkStatus } from '../../../enum/enum';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { Question } from '../../../models/question.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { loadQuestionBank, loadQuestionBankById } from '../state/question-bank.action';
import { selectLoading, selectQuestionBankByFilters } from '../state/question-bank.selector';

@Component({
  selector: 'aic-question-list-component',
  imports: [AsyncPipe, RouterLink, CommonModule, PadZeroPipe, CodeSnippetDirective, Loader],
  templateUrl: './question-list-component.html',
  styleUrl: './question-list-component.scss',
})
export class QuestionListComponent implements OnInit {
  activeCategory = signal('All');
  readonly WorkStatus = WorkStatus;
  readonly label = Labels;
  private store = inject(Store<AppState>);
  getQuestionList$!: Observable<Question[]>;
  loading$ = this.store.select(selectLoading);
  selectedQuestion$!: Observable<Question | null>;
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);

  ngOnInit() {
    // Default load (Angular)
    this.store.dispatch(loadQuestionBank({ language: 'angular' }));

    this.route.queryParamMap.subscribe(params => {
      const category = params.get('category') ?? 'All';
      const topic = params.get('topic');

      this.activeCategory.set(category);

      // Decide language based on category
      const language = category.toLowerCase() === 'javascript' ? 'javascript' : 'angular';
      this.store.dispatch(loadQuestionBank({ language }));

      this.getQuestionList$ = this.store.select(selectQuestionBankByFilters(category, topic));
    });
  }

  onQuestionClick(id: number) {
    // this.store.dispatch(loadQuestionBankById({ id }));
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
