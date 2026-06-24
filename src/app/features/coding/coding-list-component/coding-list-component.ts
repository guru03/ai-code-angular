import { Component, inject, OnInit } from '@angular/core';
import { CodeSnippetDirective } from '../../../directive/code-snippet-directive';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppState } from '../../../store/app.state';
import { Store } from '@ngrx/store';
import { Labels, WorkStatus } from '../../../enum/enum';
import { selectLoading } from '../state/coding.selector';
import { Observable } from 'rxjs';
import { Programming } from '../models.ts/coding.models';
import { loadProgramming } from '../state/coding.action';
import { Loader } from "../../../loader/loader";
import { AsyncPipe, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PadZeroPipe } from '../../../pipes/pad-zero-pipe';

@Component({
  selector: 'aic-coding-list-component',
  imports: [AsyncPipe, RouterLink, CommonModule, PadZeroPipe, CodeSnippetDirective, Loader],
  templateUrl: './coding-list-component.html',
  styleUrl: './coding-list-component.scss',
})
export class CodingListComponent implements OnInit {
  readonly WorkStatus = WorkStatus;
  readonly label = Labels;
  private sanitizer = inject(DomSanitizer);
  private store = inject(Store<AppState>);
  getCodingList$!: Observable<Programming[]>;
  loading$ = this.store.select(selectLoading);

  codeBlock = `// Syntax:
  var boundFunc = func.bind(thisArg[, arg1[, arg2[, ...]]])


  // Example:
  var employee1 = { firstName: "John", lastName: "Rodson" };
  var employee2 = { firstName: "Jimmy", lastName: "Baily" };

  function invite(greeting1, greeting2) {
    console.log(
      greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
    );
  }

  var inviteEmployee1 = invite.bind(employee1);
  var inviteEmployee2 = invite.bind(employee2);

  inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
  inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?`;
  language = 'typescript';
  items = Array.from({ length: 10 }); // creates an array of 10 empty slots
  ngOnInit() {
    this.store.dispatch(loadProgramming({ language: 'angular' }))
  }
  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
