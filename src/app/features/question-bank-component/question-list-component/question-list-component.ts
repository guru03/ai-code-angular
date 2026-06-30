import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PadZeroPipe } from '../../../pipes/pad-zero-pipe';
import { CodeSnippetDirective } from '../../../directive/code-snippet-directive';
import { Loader } from '../../../loader/loader';
import { Labels, WorkStatus } from '../../../enum/enum';
import { AppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { QuestionBank } from '../models/question-bank.models';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { loadQuestionBank, loadQuestionBankById } from '../state/question-bank.action';
import { selectLoading, selectQuestionBankByFilters } from '../state/question-bank.selector';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../models/language.models';

@Component({
  selector: 'aic-question-list-component',
  imports: [AsyncPipe, RouterLink, CommonModule, PadZeroPipe, CodeSnippetDirective, Loader],
  templateUrl: './question-list-component.html',
  styleUrl: './question-list-component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class QuestionListComponent implements OnInit {
  activeLanguage = signal('All');
  readonly WorkStatus = WorkStatus;
  readonly label = Labels;
  private store = inject(Store<AppState>);
  private sanitizer = inject(DomSanitizer);
  private route = inject(ActivatedRoute);
  getQuestionList$!: Observable<QuestionBank[]>;
  loading$ = this.store.select(selectLoading);
  selectedQuestion$!: Observable<QuestionBank | null>;


  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      const techLanguage = (params.get('language') ?? 'all').toLowerCase();
      const topic = params.get('topic');

      this.activeLanguage.set(techLanguage);

      // Validate against supported languages

      const languageEntry: SupportedLanguage | undefined = SUPPORTED_LANGUAGES.find(
        lan => lan.name === techLanguage
      );

      const language = languageEntry ? languageEntry.name : 'angular'; // fallback

      this.store.dispatch(loadQuestionBank({ language }));

      this.getQuestionList$ = this.store.select(
        selectQuestionBankByFilters(language, topic)
      );
    });
  }

  onQuestionClick(id: number) {
    const active = this.activeLanguage().toLowerCase();

    // Find the matching language entry
    const languageEntry: SupportedLanguage | undefined = SUPPORTED_LANGUAGES.find(
      lan => lan.name.toLowerCase() === active
    );

    // Fallback to Angular if not found
    const language = languageEntry ? languageEntry.name : 'angular';

    this.store.dispatch(loadQuestionBankById({ id, language }));
  }


  // onQuestionClick(id: number) {
  //   const category = this.activeLanguage();
  //   const language = category.toLowerCase() === 'javascript' ? 'javascript' : 'angular';
  //   this.store.dispatch(loadQuestionBankById({ id, language }));
  // }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
