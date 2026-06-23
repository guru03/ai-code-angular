import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { QuestionBank } from "./models/question-bank.models";
import { loadQuestionBank, loadQuestionBankById, loadQuestionBankByIdFailure, loadQuestionBankByIdSuccess, loadQuestionBankFailure, loadQuestionBankSuccess } from "./question-bank.action";
import { Action } from "@ngrx/store";

@Injectable()
export class QuestionBankEffects {
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestionBank),
            exhaustMap(({ language }) =>
                this.http.get<QuestionBank[]>(`${environment.baseurl}/${language}/ascending/`).pipe(
                    map((questions) => loadQuestionBankSuccess({ questions })),
                    catchError((error) =>
                        of(loadQuestionBankFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );

    // Load Question Details

    // Load Question Details
    loadQuestionBankById$ = createEffect((): Observable<Action> =>
        this.actions$.pipe(
            ofType(loadQuestionBankById),
            exhaustMap(({ id, language }) =>
                this.http.get<QuestionBank>(`${environment.baseurl}/${language}/${id}/`).pipe(
                    map((question: QuestionBank) =>
                        loadQuestionBankByIdSuccess({ question }) // ✅ Action
                    ),
                    catchError((error: any) =>
                        of(loadQuestionBankByIdFailure({ error: error?.message ?? 'Unknown error' })) // ✅ Action
                    )
                )
            )
        )
    );

    // loadQuestionBankById$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(loadQuestionBankById),
    //         mergeMap(({ id, language }) =>
    //             this.http.get<Question>(`${environment.baseurl}/${language}/ascending/${id}/`).pipe(
    //                 map((question) => loadQuestionBankByIdSuccess({ question })),
    //                 catchError((error) =>
    //                     of(loadQuestionBankByIdFailure({ error: error?.message ?? 'Unknown error' }))
    //                 )
    //             )
    //         )
    //     )
    // );
}
