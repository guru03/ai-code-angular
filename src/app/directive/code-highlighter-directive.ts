import { Directive, ElementRef, Input } from '@angular/core';
import Prism from 'prismjs';

@Directive({
  selector: '[aicCodeHighlighterDirective]',
  standalone: true,
})
export class CodeHighlighterDirective {
  @Input() language: string = 'typescript';

  constructor(private el: ElementRef) {}

  highlight(code: string) {
    const highlighted = Prism.highlight(code, Prism.languages[this.language], this.language);
    this.el.nativeElement.innerHTML = highlighted;
  }
}
