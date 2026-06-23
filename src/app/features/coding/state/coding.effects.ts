import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, mergeMap, Observable, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { Action } from "@ngrx/store";
import { Programming } from "../models.ts/coding.models";
import { loadProgramming, loadProgrammingFailure, loadProgrammingSuccess } from "./coding.action";

@Injectable()
export class CodingEffects {
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadPrograms$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadProgramming),
            exhaustMap(({ language }) =>
                this.http.get<Programming[]>(`${environment.baseurl}/${language}/ascending/`).pipe(
                    map((programmings) => loadProgrammingSuccess({ programmings })),
                    catchError((error) =>
                        of(loadProgrammingFailure({ error: error?.message ?? 'Unknown error' }))
                    )
                )
            )
        )
    );


}

