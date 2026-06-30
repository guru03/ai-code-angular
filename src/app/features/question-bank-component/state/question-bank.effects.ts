import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { QuestionBankDto, QuestionBank, TopicCount } from "../models/question-bank.models";
import { QuestionBankAdapter } from "../models/question-bank.adapter";
import { loadQuestionBank, loadQuestionBankById, loadQuestionBankByIdFailure, loadQuestionBankByIdSuccess, loadQuestionBankFailure, loadQuestionBankSuccess, loadTopicCounts, loadTopicCountsFailure, loadTopicCountsSuccess } from "./question-bank.action";
import { Action } from "@ngrx/store";

@Injectable()
export class QuestionBankEffects {
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadQuestions$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadQuestionBank),
            exhaustMap(({ language }) =>
                this.http.get<QuestionBankDto[]>(`${environment.baseurl}/${language}/`).pipe(
                    map((dtos) => loadQuestionBankSuccess({ questions: QuestionBankAdapter.toViewModels(dtos) })),
                    catchError((error) =>
                        of(loadQuestionBankFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );

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

    // Load Topic Counts

    loadTopicCounts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadTopicCounts),
            exhaustMap(({ language }) =>
                this.http.get<TopicCount[]>(`${environment.baseurl}/${language}/topics_summary/`).pipe(
                    map((summary) => loadTopicCountsSuccess({ summary })),
                    catchError((error) =>
                        of(loadTopicCountsFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );
}
