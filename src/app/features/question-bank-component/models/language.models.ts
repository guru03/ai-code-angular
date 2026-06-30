// Define the type
export interface SupportedLanguage {
    id: number;
    name: string;   // internal identifier (used in params, routing)
    value: string;  // display label (user-facing)
}

// Define the constant
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = [
    { id: 1, name: 'all', value: 'All' },
    { id: 2, name: 'angular', value: 'Angular' },
    { id: 3, name: 'ngrx', value: 'NgRx' },
    { id: 4, name: 'rxjs', value: 'RxJS' },
    { id: 5, name: 'signals', value: 'Signals' },
    { id: 6, name: 'javascript', value: 'JavaScript' },
    { id: 7, name: 'hr', value: 'HR' },
    { id: 8, name: 'ai', value: 'Artificial Intelligence' },
    { id: 9, name: 'question_design', value: 'Question Design' },
];
