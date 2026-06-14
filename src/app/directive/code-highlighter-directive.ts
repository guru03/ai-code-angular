import { Directive, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

// Import the language grammars you need
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-json';

@Directive({
  selector: '[aicCodeHighlighterDirective]',
  standalone: true,
})
export class CodeHighlighterDirective implements OnChanges, AfterViewInit {
  @Input() language: string = 'typescript';
  @Input() codeBlock: string = '';

  constructor(private el: ElementRef<HTMLElement>) { }

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['codeBlock'] || changes['language']) {
      this.highlight();
    }
  }

  private async highlight() {
    const rawCode = this.codeBlock || this.el.nativeElement.textContent || '';

    // ✅ Lazy load grammar if not already present
    if (!Prism.languages[this.language]) {
      try {
        await import(
          /* webpackChunkName: "prism-[request]" */
          `prismjs/components/prism-${this.language}`
        );
      } catch (err) {
        console.warn(`Prism: could not load grammar for ${this.language}`, err);
      }
    }

    const grammar = Prism.languages[this.language] || Prism.languages['javascript'];
    const highlighted = Prism.highlight(rawCode, grammar, this.language);
    this.el.nativeElement.innerHTML = highlighted;
  }
}
