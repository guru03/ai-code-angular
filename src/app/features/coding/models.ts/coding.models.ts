import { WorkStatus } from "../../../enum/enum";


export interface Coding {
    id: number;
    serial_number: number;
    language: string;

    difficulty: string;
    topic: string;
    visible: boolean;
    content_status: WorkStatus;

    question: string;
    solution: string;
    alternate_solution?: string;

    code_language: string;
    code_title: string;
    code_editor: string;
    code_output: string;
    code_explanation: string;

    code_examples: CodingExample[];

    code_tags: string;
    code_hint: string;



}

export interface CodingState {
    codings: Coding[];
    selectedCoding: Coding | null;
    loading: boolean;
    error: string | null;
}

export interface CodingExample {
    id: number;
    code_title: string;
    code_language: string;
    code_editor: string;
    code_output: string;
    code_explanation: string;
    coding: number;
}
