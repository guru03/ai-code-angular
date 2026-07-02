import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CodeSnippetDirective } from '../../../directive/code-snippet-directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Labels, WorkStatus } from '../../../enum/enum';
import { selectCodings, selectLoading } from '../state/coding.selectors';
import { Observable } from 'rxjs';
import { Coding } from '../models.ts/coding.models';
import { loadCoding } from '../state/coding.action';
import { Loader } from '../../../loader/loader';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PadZeroPipe } from '../../../pipes/pad-zero-pipe';
import { CodeEditorHeaderComponent } from '../../reusable-components/code-editor-header-component/code-editor-header-component';

@Component({
  selector: 'aic-coding-list-component',
  imports: [AsyncPipe, RouterLink, CommonModule, PadZeroPipe, CodeSnippetDirective, Loader, CodeEditorHeaderComponent],
  templateUrl: './coding-list-component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './coding-list-component.scss',
})
export class CodingListComponent implements OnInit {
  readonly WorkStatus = WorkStatus;
  readonly label = Labels;

  private sanitizer = inject(DomSanitizer);
  private store = inject(Store<AppState>);

  // Observables from store
  getCodingList$: Observable<Coding[]> = this.store.select(selectCodings);
  loading$ = this.store.select(selectLoading);

  ngOnInit() {
    this.store.dispatch(loadCoding({ language: 'coding' }));
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
