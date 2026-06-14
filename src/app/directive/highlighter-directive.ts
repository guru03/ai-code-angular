import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
  inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import Prism from 'prismjs';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-clike';

@Directive({
  selector: '[aicHighlighterDirective]',
})
export class HighlighterDirective implements OnChanges, AfterViewInit {
  @Input() language?: string;
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['language']) {
      this.highlight();
    }
  }

  private highlight() {
    const codeElement = this.el.nativeElement;
    const language = this.normalizeLanguage(this.language || 'typescript');

    this.setLanguageClass(codeElement, language);

    if (this.isBrowser) {
      const grammar = Prism.languages[language] || Prism.languages['typescript'];
      requestAnimationFrame(() => {
        codeElement.innerHTML = Prism.highlight(codeElement.textContent || '', grammar, language);
      });
    }
  }

  private normalizeLanguage(language: string) {
    return language === 'html' ? 'markup' : language;
  }

  private setLanguageClass(codeElement: HTMLElement, language: string) {
    Array.from(codeElement.classList).forEach(className => {
      if (className.startsWith('language-')) {
        codeElement.classList.remove(className);
      }
    });
    codeElement.classList.add(`language-${language}`, 'rounded-md');
  }
}
