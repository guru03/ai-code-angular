# RxJs Operaters

1. What is of operater in rxjs?
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

👉  What are RxJS Operations?
    In Angular applications, RxJS (Reactive Extensions for JavaScript) is a powerful library used for handling asynchronous and event-based programming using observables. RxJS provides a wide range of operators that enable you to manipulate, transform, combine, and manage observables in a flexible and functional way. These operators make it easier to work with data streams and asynchronous operations in a reactive manner.

👉  Uses of RxJS operations
*   Allows the users to map function to transform the value as given by the observable.
*   Used to collect and combine various observables into one observable.
*   Used to determine the number of values that will be emitted by the observable.
*   Used to tackle or handle the error which is emitted by the observable.
*   Used to filter the data on the basis of some function.
*   Used to determine the time when the values will be emitted by the observables.

## Common RxJS Operations in Angular

## Observable Creation

### of(): Creates an observable that emits a sequence of values

    from(): Converts an array, promise, or iterable into an observable.
    ajax(): Performs an XMLHttpRequest with the provided options and returns an observable.

##  Combination Operators:
    merge(): Combines multiple observables into one by merging their emissions.
    combineLatest(): Combines the latest values from multiple observables into an array or object.
    forkJoin(): Combines the last values emitted by multiple observables and emits a single value when all observables complete.

##  Filtering Operators:
    filter(): Emits only those values from an observable that satisfy a specified condition.
    distinctUntilChanged(): Emits a value only if it is different from the previous value.
    debounceTime(): Emits a value from the source observable only after a specified duration has passed without any other value being emitted.

##  Transformation Operators:
    map(): Transforms each value emitted by an observable into a new value.
    pluck(): Extracts the value of a specified property from each emitted object.
    scan(): Applies an accumulator function to each value emitted by an observable and emits each intermediate result.

##  Error Handling Operators:
    catchError(): Handles errors emitted by the source observable and returns a new observable or throws an error.
    retry(): Resubscribes to the source observable a specified number of times if an error occurs.

##  Utility Operators:
    tap(): Performs side effects for each emission on the source observable without modifying the emitted values.
    delay(): Delays the emissions from the source observable by a specified duration.

#   📊 Visual Sequence
##  Component → Dispatch Action → Effect (optional async) → Reducer → Store → Selector → Component (UI update)