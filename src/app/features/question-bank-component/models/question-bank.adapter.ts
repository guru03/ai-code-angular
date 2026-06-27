// // question-bank.adapter.ts
// import { QuestionBank } from '../models/question-bank.models';
// import { TOPICS } from '../models/question-bank.models';
// import { WorkStatus } from '../../../enum/enum';


// export class QuestionBankAdapter {
//     static toViewModel(q: QuestionBank): QuestionBank {
//         const topic = TOPICS.find(t => t.name === q.topic);

//         return {
//             id: q.id,
//             serialNumber: q.serialNumber,
//             language: q.language,
//             label: q.label,
//             category: q.category,
//             topicLabel: topic ? topic.value : q.topic,
//             visible: q.visible,
//             question: q.question,
//             answer: q.answer,
//         };
//     }

//     static toViewModels(questions: QuestionBank[]): QuestionBank[] {
//         return questions.map(q => this.toViewModel(q));
//     }
// }



import { QuestionBankDto, QuestionBank, TOPICS } from '../models/question-bank.models';

export class QuestionBankAdapter {

  static toViewModel(dto: QuestionBankDto): QuestionBank {

    const topic = TOPICS.find(t => t.name === dto.topic);

    return {
      id: dto.id,
      serialNumber: dto.serial_number,
      language: dto.language,
      label: dto.label,
      category: dto.category,
      topicLabel: topic?.value ?? dto.topic,
      visible: dto.visible,
      content_status: dto.content_status,
      question: dto.question,
      answer: dto.answer,
      answer2: dto.answer2,
      answer3: dto.answer3,
      answer4: dto.answer4,
      code_language: dto.code_language,
      code_block_title: dto.code_block_title,
      code_block: dto.code_block,
      code_language2: dto.code_language2,
      code_block_title2: dto.code_block_title2,
      code_block2: dto.code_block2,
      code_language3: dto.code_language3,
      code_block_title3: dto.code_block_title3,
      code_block3: dto.code_block3,
      imageUrl: dto.imageUrl,
      image2Url: dto.image2Url,
      image3Url: dto.image3Url,
    };
  }

  static toViewModels(dtos: QuestionBankDto[]): QuestionBank[] {
    return dtos.map(dto => this.toViewModel(dto));
  }

}