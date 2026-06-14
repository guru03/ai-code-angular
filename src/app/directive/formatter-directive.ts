import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  AfterViewInit,
} from '@angular/core';
import prettier from 'prettier/standalone';
import * as parserEstree from 'prettier/plugins/estree';
import * as parserHtml from 'prettier/plugins/html';
import * as parserPostcss from 'prettier/plugins/postcss';
import * as parserTypescript from 'prettier/plugins/typescript';

@Directive({
  selector: '[aicFormatterDirective]',
})
export class FormatterDirective implements OnChanges, AfterViewInit {
  @Input() language?: string;
  @Input() codeBlock = '';

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    void this.format();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['codeBlock'] || changes['language']) {
      void this.format();
    }
  }

  private async format() {
    const codeElement = this.el.nativeElement;
    const rawCode = this.codeBlock || codeElement.textContent || '';
    const language = this.normalizeLanguage(this.language || 'typescript');

    try {
      const formatted = await prettier.format(rawCode, {
        parser: this.getParser(language),
        plugins: [parserTypescript, parserEstree, parserHtml, parserPostcss],
      });
      codeElement.textContent = formatted;
    } catch (err) {
      console.warn('Prettier formatting failed, using raw code:', err);
      codeElement.textContent = rawCode;
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
}
