import { Directive, ElementRef, Input, AfterViewInit, Optional } from '@angular/core';
import prettier from 'prettier/standalone';
import * as parserTypescript from 'prettier/plugins/typescript';
import * as parserHtml from 'prettier/plugins/html';
import * as parserEstree from 'prettier/plugins/estree';
import * as parserCss from 'prettier/plugins/postcss';
import { CodeHighlighterDirective } from './code-highlighter-directive';

@Directive({
  selector: '[aicCodeFormatterDirective]',
  standalone: true,
})
export class CodeFormatterDirective {
  @Input() language: string = 'typescript';

  constructor(
    private el: ElementRef,
    @Optional() private highlighter: CodeHighlighterDirective // 👈 sibling directive injection
  ) { }

  async ngAfterViewInit() {
    const code = this.el.nativeElement.textContent.trim();

    try {
      const formatted = await prettier.format(code, {
        parser: this.language,
        plugins: [parserTypescript, parserHtml, parserCss]
      });

      this.el.nativeElement.textContent = formatted;

      // 🔥 Always trigger highlighter after formatting
      if (this.highlighter) {
        this.highlighter.highlight(formatted);
      }
    } catch (err) {
      console.error('Formatting error:', err);
    }
  }
}
