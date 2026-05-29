import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { loadQuestions, loadQuestionsSuccess, loadQuestionsFailure } from "./angular.action";
import { Question } from "../../models/question.model";
import { environment } from "../../environments/environment";

@Injectable()
export class QuestionEffects {
    // private readonly baseurl = environment.baseurl.replace(/\/+$/, '');
    private readonly rooturl = `${environment.baseurl}/angular/`;
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestions),
            mergeMap(() =>
                this.http.get<Question[]>(this.rooturl).pipe(
                    map((questions) => loadQuestionsSuccess({ questions })),
                    catchError((error) =>
                        of(loadQuestionsFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );
}
