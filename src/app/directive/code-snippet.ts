import { AfterViewInit, Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import Prism from 'prismjs';
import prettier from 'prettier/standalone';
import * as parserEstree from 'prettier/plugins/estree';
import * as parserHtml from 'prettier/plugins/html';
import * as parserPostcss from 'prettier/plugins/postcss';
import * as parserTypescript from 'prettier/plugins/typescript';

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

    codeElement.textContent = formatted;
    codeElement.classList.add('rounded-md', 'p-4', 'bg-gray-900', 'text-gray-100');
    requestAnimationFrame(() => Prism.highlightElement(codeElement));
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
    const trimmed = code.trim();
    if (trimmed.startsWith('<')) return 'markup';
    if (trimmed.startsWith('{') && trimmed.endsWith('}')) return 'json';
    if (/function|const|let|=>/.test(trimmed)) return 'javascript';
    if (trimmed.includes(':') && trimmed.includes('{')) return 'css';
    return 'typescript';
  }
}
