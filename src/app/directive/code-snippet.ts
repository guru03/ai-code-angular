import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';
import Prism from 'prismjs';

@Directive({
  selector: '[aicCodeSnippet]'
})
export class HighlightCodeDirective implements AfterViewInit {
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
