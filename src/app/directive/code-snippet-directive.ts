import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Directive,
  ElementRef,
  inject,
  Input,
  OnChanges,
  PLATFORM_ID,
  SimpleChanges,
} from '@angular/core';
import Prism from 'prismjs';
import prettier from 'prettier/standalone';
import * as parserEstree from 'prettier/plugins/estree';
import * as parserHtml from 'prettier/plugins/html';
import * as parserPostcss from 'prettier/plugins/postcss';
import * as parserTypescript from 'prettier/plugins/typescript';

import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-clike';

@Directive({
  selector: '[aicCodeSnippetDirective]',
  standalone: true,
})
export class CodeSnippetDirective implements OnChanges, AfterViewInit {
  @Input() language?: string;
  @Input() codeBlock = '';
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    void this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['codeBlock'] || changes['language']) {
      void this.highlight();
    }
  }

  private getPlugins(language: string) {
    switch (language) {
      case 'markup':
        return [parserHtml];
      case 'css':
        return [parserPostcss];
      default:
        return [parserTypescript, parserEstree];
    }
  }

  private async highlight() {
    const codeElement = this.el.nativeElement;
    const rawCode = this.codeBlock || codeElement.textContent || '';
    const language = this.normalizeLanguage(this.language || this.detectLanguage(rawCode));
    let formatted = rawCode;

    try {
      formatted = await prettier.format(rawCode, {
        parser: this.getParser(language),
        plugins: this.getPlugins(language),
      });
    } catch (err) {
      console.warn('Prettier formatting failed, using raw code:', err);
    }

    this.setLanguageClass(codeElement, language);

    codeElement.classList.add('rounded-b-md', '!p-6', '!mt-0');

    if (this.isBrowser) {
      const grammar = Prism.languages[language] || Prism.languages['typescript'];

      requestAnimationFrame(() => {
        codeElement.innerHTML = Prism.highlight(formatted, grammar, language);
      });
    } else {
      codeElement.textContent = formatted;
    }
  }

  private normalizeLanguage(language: string) {
    return language === 'html' ? 'markup' : language;
  }

  private getParser(language: string) {
    if (language === 'markup') return 'html';
    if (language === 'css') return 'css';
    return 'typescript';
  }

  private setLanguageClass(codeElement: HTMLElement, language: string) {
    Array.from(codeElement.classList).forEach(className => {
      if (className.startsWith('language-')) {
        codeElement.classList.remove(className);
      }
    });

    codeElement.classList.add(`language-${language}`);
  }

  private detectLanguage(code: string): string {
    const trimmed = code.trim();
    if (trimmed.startsWith('<')) return 'markup';
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) return 'json';
    if (/function|const|let|=>/.test(trimmed)) return 'javascript';
    if (trimmed.includes(':') && trimmed.includes('{')) return 'css';
    return 'typescript';
  }
}
