import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import Prism from 'prismjs';
import prettier from "prettier/standalone";
import * as parserTypescript from "prettier/parser-typescript";
import * as parserHtml from "prettier/parser-html";
import * as parserPostcss from "prettier/parser-postcss";

import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';

@Directive({
  selector: '[aicCodeSnippet]',
  standalone: true,
})
export class CodeSnippet implements OnChanges, AfterViewInit {
  @Input() language?: string;
  @Input() codeBlock = '';

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    void this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['codeBlock'] || changes['language']) {
      void this.highlight();
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
        plugins: [parserTypescript, parserHtml, parserPostcss],
      });
    } catch (err) {
      console.warn('Prettier formatting failed, using raw code:', err);
    }

    codeElement.textContent = formatted;
    codeElement.classList.add(`language-${language}`);
    Prism.highlightElement(codeElement);
  }

  private normalizeLanguage(language: string) {
    return language === 'html' ? 'markup' : language;
  }

  private getParser(language: string) {
    if (language === 'markup') return 'html';
    if (language === 'css') return 'css';
    return 'typescript';
  }

  private detectLanguage(code: string): string {
    if (code.trim().startsWith('<')) return 'markup';
    if (code.includes('{') && code.includes(';')) return 'typescript';
    if (code.includes('{') && code.includes(':')) return 'css';
    return 'typescript';
  }
}
