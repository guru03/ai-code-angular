import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'aic-question-edit-design3-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question-edit-design3-component.html',
  styleUrl: './question-edit-design3-component.scss',
})
export class QuestionEditDesign3Component implements OnInit {
  questionForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.questionForm = this.fb.group({
      serialNumber: ['', [Validators.required]],
      language: ['Angular', [Validators.required]],
      label: ['Beginner'],
      topic: ['Angular Fundamentals', [Validators.required]],
      contentStatus: [{ value: 'pending', disabled: true }], // Locked read-only state representation
      isVisible: [true],
      question: ['', [Validators.required, Validators.minLength(10)]],
      answer: ['', [Validators.required, Validators.minLength(20)]],
      additionalExplanation: ['']
    });
  }

  isInvalid(controlName: string): boolean {
    const control = this.questionForm.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit(): void {
    if (this.questionForm.valid) {
      // Access complete raw data including fields marked as disabled (contentStatus)
      const formData = this.questionForm.getRawValue();
      console.log('Submitted Payload:', formData);
    } else {
      this.questionForm.markAllAsTouched();
    }
  }
}