import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { QuestionBankDto, QuestionBank } from "../models/question-bank.models";
import { QuestionBankAdapter } from "../models/question-bank.adapter";
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
                this.http.get<QuestionBankDto[]>(`${environment.baseurl}/${language}/ascending/`).pipe(
                    map((dtos) => loadQuestionBankSuccess({ questions: QuestionBankAdapter.toViewModels(dtos) })),
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
                this.http.get<QuestionBankDto>(`${environment.baseurl}/${language}/${id}/`).pipe(
                    map((dto: QuestionBankDto) =>
                        loadQuestionBankByIdSuccess({ question: QuestionBankAdapter.toViewModel(dto) })
                    ),
                    catchError((error: any) =>
                        of(loadQuestionBankByIdFailure({ error: error?.message ?? 'Unknown error' })) // ✅ Action
                    )
                )
            )
        )
    );

    // loadTopicCounts$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(loadTopicCounts),
    //         exhaustMap(() =>
    //             this.angularApi.getTopicsSummary().pipe(
    //                 map((summary) => loadTopicCountsSuccess({ summary })),
    //                 catchError((error) =>
    //                     of(loadTopicCountsFailure({ error: error?.message ?? 'Unknown error' }))
    //                 )
    //             )
    //         )
    //     )
    // );
}
