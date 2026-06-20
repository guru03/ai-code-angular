import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { loadQuestions, loadQuestionsSuccess, loadQuestionsFailure, loadQuestionByIdFailure, loadQuestionByIdSuccess, loadQuestionById } from "./javascript.action";
import { Question } from "../../models/question.model";
import { environment } from "../../environments/environment";
import { getQuestions } from "./javascript.selector";

@Injectable()
export class QuestionEffects {
    // private readonly baseurl = environment.baseurl.replace(/\/+$/, '');
    private readonly rooturl = `${environment.baseurl}/javascript`;
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestions),
            exhaustMap(() =>
                this.http.get<Question[]>(this.rooturl + '/').pipe(
                    map((questions) => loadQuestionsSuccess({ questions })),
                    catchError((error) =>
                        of(loadQuestionsFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );

    // Load Question Details Component

    loadQuestionById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestionById),
            mergeMap(({ id }) =>
                this.http.get<Question>(`${this.rooturl}/${id}/`).pipe(
                    map((question) => loadQuestionByIdSuccess({ question })),
                    catchError((error) =>
                        of(loadQuestionByIdFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );
}
