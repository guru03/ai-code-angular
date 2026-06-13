import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import Prism from 'prismjs';
// Load Prism language components used in this project
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-css';

@Directive({
  selector: '[aicCodeSnippet]',
  standalone: true,
})
export class CodeSnippet implements OnChanges {
  @Input() language = 'typescript';
  @Input() codeBlock = '';

  constructor(private el: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['codeBlock']) {
      const codeElement = this.el.nativeElement;
      codeElement.textContent = this.codeBlock;
      codeElement.classList.add(`language-${this.language}`);
      Prism.highlightElement(codeElement);
    }
  }
}
