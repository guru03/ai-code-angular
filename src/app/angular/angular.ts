import { Component, OnInit, inject, signal } from '@angular/core';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/app.state';
import { loadQuestions } from './state/angular.action';
import { getLanguageCounts } from './state/angular.selector';
import { LANGUAGES } from '../models/question.model';

@Component({
  selector: 'aic-angular',
  imports: [AsyncPipe, NgClass, RouterOutlet, CommonModule],
  templateUrl: './angular.html',
  styleUrl: './angular.scss',
})
export class Angular implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private store = inject(Store<AppState>);
  // activeCategory = signal('All');
  languages = LANGUAGES;
  activeLanguage: string = 'All'; // default active
  languageCounts$!: Observable<Record<string, number>>;

  ngOnInit(): void {
    this.languageCounts$ = this.store.select(getLanguageCounts);
    this.store.dispatch(loadQuestions());

    this.route.queryParamMap.subscribe(params => {
      this.activeLanguage = params.get('language') ?? 'All';
      this.filterByLanguage(this.activeLanguage);
    });
  }

  filterByLanguage(language: string): void {
    this.activeLanguage = language;

    this.router.navigate(['questions'], {
      relativeTo: this.route,
      queryParams: language === 'All' ? {} : { language },
    });
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
