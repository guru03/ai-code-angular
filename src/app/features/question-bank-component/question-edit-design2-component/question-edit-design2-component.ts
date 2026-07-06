import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'aic-question-edit-design2-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question-edit-design2-component.html',
  styleUrl: './question-edit-design2-component.scss',
})
export class QuestionEditDesign2Component {

  @Input() isOpen: boolean = false;              // controlled by parent
  @Output() closed = new EventEmitter<void>();   // notify parent when closed

  questionForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.questionForm = this.fb.group({
      serialNumber: ['', Validators.required],
      language: ['Angular'],
      label: ['Beginner'],
      topic: ['angular_fundamentals'],
      contentStatus: ['Pending'],
      visible: [false],
      question: ['', Validators.required],
      answer1: [''],
      answer2: [''],
      answer3: [''],
      answer4: [''],
      codeLanguage1: ['Typescript'],
      codeTitle1: [''],
      codeEditor1: [''],
      codeLanguage2: ['Typescript'],
      codeTitle2: [''],
      codeEditor2: [''],
      codeLanguage3: ['Typescript'],
      codeTitle3: [''],
      codeEditor3: [''],
      angularQuestions: ['null']
    });
  }
    onSubmit() {
      if (this.questionForm.valid) {
        console.log('Form Submitted Data:', this.questionForm.value);
      } else {
        console.error('Form contains validation errors.');
      }

      // if (this.questionForm.valid) {
      //   console.log('Form Submitted Data:', this.questionForm.value);
      // }
    }

  closeDrawer() {
    this.isOpen = false;
    this.closed.emit();   // tell parent to hide
  }
}
