# Angular, NgRx & JavaScript Q&A

---

## 📑 Table of Contents
- [NgRx - State Management](#ngrx---state-management)
- [NgRx - Effects](#ngrx---effects)
- [NgRx - Setup](#ngrx---setup)
- [NgRx - Router Integration](#ngrx---router-integration)
- [Angular - Lazy Loading](#angular---lazy-loading)
- [Angular - Pipes](#angular---pipes)
- [Angular - HTTP Interceptors](#angular---http-interceptors)
- [Angular - Lifecycle Hooks](#angular---lifecycle-hooks)
- [Angular - Standalone Components](#angular---standalone-components)
- [Angular - Compilation](#angular---compilation)
- [Angular - Route Guards](#angular---route-guards)
- [Angular - Signals](#angular---signals)
- [JavaScript - Closures](#javascript---closures)
- [JavaScript - Array Methods](#javascript---array-methods)
- [JavaScript - Function Methods](#javascript---function-methods)
- [JavaScript - Web Storage](#javascript---web-storage)
- [JavaScript - Comparison Operators](#javascript---comparison-operators)
- [HR - Self Introduction](#hr---self-introduction)
- [HR - Current Role](#hr---current-role)

---

## NgRx - State Management

**Q1. What is NgRx and why do we use it in Angular applications?**  
NgRx is a state management library based on Redux principles. It helps manage complex application state in a predictable way using a single immutable store and unidirectional data flow.  
*This makes debugging, scaling, and testing easier compared to ad-hoc service or BehaviorSubject approaches.*

**Q2. What are the key concepts of NgRx and how do they work?**  
- **Store:** Centralized state container.  
- **Actions:** Describe events in the app.  
- **Reducers:** Pure functions that return new state.  
- **Selectors:** Extract specific pieces of state.

---

## NgRx - Effects

**Q3. What are Effects in NgRx?**  
Effects handle side effects such as API calls or async operations. They listen for actions and dispatch new ones with results.

**Q4. What is the difference between NgRx and Redux?**  
NgRx is Angular-specific, built on RxJS, and adds features like Effects and Selectors not found in Redux.

**Q5. How do you handle side effects in NgRx?**  
Handled via **Effects**, which use RxJS streams to perform async tasks and dispatch new actions.

---

## NgRx - Setup

**Q6. How do you set up NgRx in an Angular application?**  
1. Install `@ngrx/store`.  
2. Add `StoreModule` in `AppModule`.  
3. Define state, actions, reducers, selectors.  
4. Use `Store` service in components.

---

## NgRx - Router Integration

**Q7. What is NgRx Router?**  
Integrates Angular Router with NgRx Store. Provides actions and selectors for router state, making navigation predictable and testable.

---

## Angular - Lazy Loading

**Q8. What is lazy loading in Angular and how does it improve performance?**  
Loads feature modules only when routes are accessed. Reduces initial bundle size, improves performance, and scales large apps.

---

## Angular - Pipes

**Q9. What are pure Pipes in Angular?**  
Pure pipes run only when Angular detects a pure change (new primitive or object reference).  
*This avoids unnecessary recalculations and boosts performance.*

---

## Angular - HTTP Interceptors

**Q10. What are HTTP interceptors in Angular and how do they work?**  
Intercept requests/responses globally. Common uses: add tokens, log, handle errors, modify headers.

**Q11. What is an HTTP Interceptor?**  
Middleware in HttpClient that intercepts requests/responses for tasks like authentication, caching, or logging.

---

## Angular - Lifecycle Hooks

**Q12. What are lifecycle hooks in Angular?**  
Special methods to tap into component lifecycle phases (creation, update, destruction). Examples: `ngOnInit`, `ngOnChanges`, `ngOnDestroy`.

**Q19. Lifecycle hooks detailed:**  
- `ngOnChanges` – input property changes.  
- `ngOnInit` – initialization.  
- `ngDoCheck` – custom change detection.  
- `ngAfterContentInit` / `ngAfterContentChecked` – content lifecycle.  
- `ngAfterViewInit` / `ngAfterViewChecked` – view lifecycle.  
- `ngOnDestroy` – cleanup before destruction.

---

## Angular - Standalone Components

**Q13. What are standalone components in Angular?**  
Components created without NgModule. Reduce boilerplate and improve modularity.

---

## Angular - Compilation

**Q14. What is Ivy in Angular?**  
Next-gen rendering engine (default since Angular 9).  
Benefits: smaller bundles, faster compilation, better debugging, dynamic component loading.

---

## Angular - Route Guards

**Q15. What are Angular Guards?**  
Services controlling route access.  
Types:  
- `CanActivate` – route activation.  
- `CanActivateChild` – child route activation.  
- `CanDeactivate` – route deactivation.

---

## Angular - Signals

**Q16. What are Signals in Angular?**  
Signals wrap values and notify consumers when they change, enabling reactive data flow.  
Types: Writable & Computed Signals.

**Q17. Types of Signals in Angular?**  
- Writable Signals  
- Computed Signals  

**Q18. Benefits of Signals:**  
- Reactive data flow  
- Automatic dependency tracking  
- Improved performance  
- Simplified state management

---

## JavaScript - Closures

**Q20. What are closures in JavaScript?**  
Functions that retain access to their scope, outer scope, and global scope even after execution. Useful for privacy and persistent state.

---

## JavaScript - Array Methods

**Q21. Difference between slice() and splice()?**  
- `slice()` – returns shallow copy, doesn’t modify original.  
- `splice()` – modifies array by adding/removing elements.

**Q22. Map and Set in JavaScript?**  
- **Map:** Key-value pairs, keys can be any type.  
- **Set:** Stores unique values.

---

## JavaScript - Function Methods

**Q23. Difference between call(), apply(), and bind()?**  
- `call()` – invokes with arguments individually.  
- `apply()` – invokes with arguments as array.  
- `bind()` – returns new function with bound context.

---

## JavaScript - Web Storage

**Q24. What is Local Storage?**  
Stores key-value pairs with no expiration. Persists across sessions.

**Q25. What is Session Storage?**  
Stores key-value pairs for a single session. Cleared when tab/window closes.

---

## JavaScript - Comparison Operators

**Q26. Difference between == and ===?**  
- `==` – equality with type coercion.  
- `===` – strict equality without type coercion.

---

## HR - Self Introduction

**Q27. Introduce yourself**  
"I'm Guru, a frontend developer with strong expertise in Angular. I’ve worked with signals, standalone components, lazy loading, REST API integration, and NgRx. I focus on scalable, maintainable applications with clean architecture."

---

## HR - Current Role

**Q28. Role and responsibilities in your current project?**  
As a frontend developer, responsible for designing and implementing responsive UIs in Angular, translating mockups into functional applications, and ensuring performance and scalability.

---
