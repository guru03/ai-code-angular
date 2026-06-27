// topic.service.ts
import { Injectable } from '@angular/core';
import { TOPICS } from '../models/question-bank.models';

@Injectable({ providedIn: 'root' })
export class TopicService {
    getLabel(name: string): string {
        const topic = TOPICS.find(t => t.name === name);
        return topic ? topic.value : name;
    }
}
