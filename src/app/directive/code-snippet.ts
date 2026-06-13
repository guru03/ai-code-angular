import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
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
export class CodeSnippet implements AfterViewInit {
  @Input() language?: string;
  @Input() file?: string;

  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    const codeElement = this.el.nativeElement;

    // Detect language
    let lang = this.language;
    if (!lang) {
      const dataLang = codeElement.getAttribute('data-lang');
      if (dataLang) lang = dataLang;

      if (this.file) {
        if (this.file.endsWith('.ts')) lang = 'typescript';
        else if (this.file.endsWith('.js')) lang = 'javascript';
        else if (this.file.endsWith('.html')) lang = 'markup';
        else if (this.file.endsWith('.css')) lang = 'css';
      }
    }

    if (!lang) lang = 'typescript'; // default fallback

    codeElement.classList.add(`language-${lang}`);
    Prism.highlightElement(codeElement);
  }
}
