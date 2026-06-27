import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { environment } from "../../../environments/environment";
import { Coding } from "../models.ts/coding.models";
import {
    loadCoding,
    loadCodingFailure,
    loadCodingSuccess,
} from "./coding.action";

@Injectable()
export class CodingEffects {
    private actions$ = inject(Actions);
    private http = inject(HttpClient);

    loadCodings$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadCoding),
            exhaustMap(({ language }) =>
                this.http.get<Coding[]>(`${environment.baseurl}/${language}/ascending/`).pipe(
                    map((codings) => loadCodingSuccess({ codings })),
                    catchError((error) =>
                        of(loadCodingFailure({ error: error?.message ?? "Unknown error" }))
                    )
                )
            )
        )
    );
}
