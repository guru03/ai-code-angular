
import { QuestionBankDto, QuestionBank } from '../models/question-bank.models';
import { TOPICS } from './topics.models';

export class QuestionBankAdapter {

    static toViewModel(dto: QuestionBankDto): QuestionBank {

        const topic = TOPICS.find(t => t.value === dto.topic);

        return {
            ...dto,
            //   topicLabel: dto.topic,
            serialNumber: dto.serial_number,
            language: dto.language,
            topicLabel: topic?.value ?? dto.topic
        };
    }

    static toViewModels(dtos: QuestionBankDto[]): QuestionBank[] {
        return dtos.map(dto => this.toViewModel(dto));
    }

}
