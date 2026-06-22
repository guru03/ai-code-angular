import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { QuestionBank } from "./models/question-bank.models";
import { loadQuestionBank, loadQuestionBankById, loadQuestionBankByIdFailure, loadQuestionBankByIdSuccess, loadQuestionBankFailure, loadQuestionBankSuccess } from "./question-bank.action";

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
}
