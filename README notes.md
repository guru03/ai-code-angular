1.  What is of operater in rxjs?
    In RxJS, the of function is a creation operator that turns given values into an observable sequence. It’s one of the simplest ways to create an observable.

2.  What is of operater in concatMap?
    Sequential processing; waits for the previous inner observable to complete before starting the next.

3.  What is of operater in concatMap?
    Latest wins; cancels previous inner observable when a new source value arrives.

4.  What is of operater in mergeMap?
    Parallel processing; order doesn't matter, and jobs shouldn't be canceled.

5.  What is exhaustMap in RxJs?
    Ignores new emissions while the current inner observable is still executing.

6.  What is ofType in RxJs?
    ofType is an RxJS operator used inside Effects to filter the stream of actions so that only specific actions trigger the effect.