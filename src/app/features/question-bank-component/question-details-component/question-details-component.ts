import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit, ChangeDetectionStrategy, signal } from '@angular/core';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { loadQuestionBankById } from '../state/question-bank.action';
import { getSelectedQuestion } from '../state/question-bank.selector';
import { PadZeroPipe } from '../../../pipes/pad-zero-pipe';
import { CodeSnippetDirective } from '../../../directive/code-snippet-directive';
import { Loader } from '../../../loader/loader';
import { Labels, WorkStatus } from '../../../enum/enum';
import { QuestionBankEditComponent } from '../question-bank-edit-component/question-bank-edit-component';

@Component({
  selector: 'aic-question-details-component',
  imports: [AsyncPipe, CommonModule, PadZeroPipe, CodeSnippetDirective, QuestionBankEditComponent],
  templateUrl: './question-details-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './question-details-component.scss',
})
export class QuestionDetailsComponent implements OnInit {
  readonly label = Labels;
  readonly WorkStatus = WorkStatus;

  private activatedRoute = inject(ActivatedRoute);
  private store = inject(Store<AppState>);
  private sanitizer = inject(DomSanitizer);

  openEditMode = signal(false);
  selectedQuestion$ = this.store.select(getSelectedQuestion);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (!id) return;

      const languageParam = this.activatedRoute.snapshot.queryParamMap.get('language');
      const language = languageParam?.toLowerCase() === 'javascript' ? 'javascript' : 'angular';

      this.store.dispatch(loadQuestionBankById({ id: Number(id), language }));
    });
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
