import { Directive, ElementRef, Input, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

// Import the language grammars you need
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

@Directive({
  selector: '[aicCodeHighlighterDirective]',
  standalone: true,
})
export class CodeHighlighterDirective implements OnChanges, AfterViewInit {
  @Input() language: string = 'typescript';
  @Input() codeBlock: string = '';

  constructor(private el: ElementRef<HTMLElement>) {}

  ngAfterViewInit() {
    this.highlight();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['codeBlock'] || changes['language']) {
      this.highlight();
    }
  }

  private highlight() {
    const rawCode = this.codeBlock || this.el.nativeElement.textContent || '';
    const grammar = Prism.languages[this.language] || Prism.languages['typescript'];
    const highlighted = Prism.highlight(rawCode, grammar, this.language);
    this.el.nativeElement.innerHTML = highlighted;
  }
}
