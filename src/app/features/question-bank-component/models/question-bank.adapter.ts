
import { QuestionBankDto, QuestionBank } from '../models/question-bank.models';
import { TOPICS } from './topics.models';

export class QuestionBankAdapter {

    static toViewModel(dto: QuestionBankDto): QuestionBank {

        const topic = TOPICS.find(t => t.value === dto.topic);

        return {
            ...dto,
            serialNumber: dto.serial_number,
            language: dto.language,
            
            codeLanguage: dto.code_language,
            codeTitle: dto.code_title,
            codeEditor: dto.code_editor,

            codeLanguage2: dto.code_language2,
            codeTitle2: dto.code_title2,
            codeEditor2: dto.code_editor2,

            codeLanguage3: dto.code_language3,
            codeTitle3: dto.code_title3,
            codeEditor3: dto.code_editor3,
            //   topicLabel: dto.topic,
            topicLabel: topic?.value ?? dto.topic
        };
    }

    static toViewModels(dtos: QuestionBankDto[]): QuestionBank[] {
        return dtos.map(dto => this.toViewModel(dto));
    }

}
