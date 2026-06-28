// topic.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TopicCountService {
    private baseUrl = `${environment.baseurl}/angular`;

    constructor(private http: HttpClient) { }

    getTopicsSummary() {
        return this.http.get<any[]>(`${this.baseUrl}/topics_summary`);
    }

    getCountByTopic(topic: string) {
        return this.http.get<{ topic: string; count: number }>(
            `${this.baseUrl}/count_by_topic?topic=${topic}`
        );
    }
}