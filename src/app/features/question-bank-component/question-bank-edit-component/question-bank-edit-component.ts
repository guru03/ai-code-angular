import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'aic-question-bank-edit-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question-bank-edit-component.html',
  styleUrl: './question-bank-edit-component.scss',
})
export class QuestionBankEditComponent implements OnInit {
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
  }



  // Controls the drawer visibility state
  isOpen: boolean = true;

  // Call this method to open the drawer from outside
  openDrawer() {
    this.isOpen = true;
  }

  // Call this method to close it
  closeDrawer() {
    this.isOpen = false;
  }
}
