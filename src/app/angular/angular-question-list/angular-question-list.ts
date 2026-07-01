import { AsyncPipe, CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { selectLoading, selectQuestionsByFilters } from '../state/angular.selector';
import { loadQuestionById, loadQuestions } from '../state/angular.action';
import { Question } from '../../models/question.model';
import { Labels, WorkStatus } from '../../enum/enum';
import { Observable } from 'rxjs';
import { PadZeroPipe } from '../../pipes/pad-zero-pipe';
import { CodeSnippetDirective } from '../../directive/code-snippet-directive';
import { Loader } from '../../loader/loader';

@Component({
  selector: 'aic-angular-question-list',
  imports: [AsyncPipe, RouterLink, CommonModule, PadZeroPipe, CodeSnippetDirective, Loader],
  templateUrl: './angular-question-list.html',
  styleUrl: './angular-question-list.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class AngularQuestionList implements OnInit {
  codeTesting = `// Syntax:
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
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe((params) => {
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
