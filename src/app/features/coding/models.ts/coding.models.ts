import { WorkStatus } from "../../../enum/enum";


export interface Programming {
    id: number;
    serial_number: number;
    language: string;

    difficulty: string;
    topic: string;
    visible: boolean;
    content_status: WorkStatus;

    programe: string;
    soution: string;
    alternate_soution?: string;

    code_language: string;
    code_block_title: string;
    code_editor: string;
}

export interface ProgrammingState {
    programmings: Programming[];
    selectedProgram: Programming | null;
    loading: boolean;
    error: string | null;
}