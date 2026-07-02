import { Component, input, Input, signal } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';

@Component({
  selector: 'aic-code-editor-header-component',
  imports: [ClipboardModule],
  templateUrl: './code-editor-header-component.html',
  styleUrl: './code-editor-header-component.scss',
})
export class CodeEditorHeaderComponent {
  @Input() codeText!: string;

  @Input() codeLanguage!: string;

  copiedMap = signal<Record<string, boolean>>({});

  copied = signal(false);

  onCopied(success: boolean): void {
    if (success) {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    }
  }



  onCopiedOld(key: string, success: boolean): void {
    if (success) {
      const current = { ...this.copiedMap() };
      current[key] = true;
      this.copiedMap.set(current);

      setTimeout(() => {
        const reset = { ...this.copiedMap() };
        reset[key] = false;
        this.copiedMap.set(reset);
      }, 2000);
    }
  }

}