import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { languages } from 'prismjs';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../models/language.models';
import { Topic, TOPICS } from '../models/topics.models';
import { Labels, WorkStatus } from '../../../enum/enum';

@Component({
  selector: 'aic-question-bank-edit-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './question-bank-edit-component.html',
  styleUrl: './question-bank-edit-component.scss',
})
export class QuestionBankEditComponent implements OnInit {

  private fb = inject(FormBuilder);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  readonly WorkStatus = WorkStatus;
  readonly Labels = Labels;

  questionId: number | null = null;
  supportedLanguage: SupportedLanguage[] = SUPPORTED_LANGUAGES;
  topics: Topic[] = TOPICS;

  submitted = false;


  @Input() isOpen: boolean = false;              // controlled by parent
  @Output() closed = new EventEmitter<void>();   // notify parent when closed

  // questionForm!: FormGroup;

  form: FormGroup = this.fb.group({
    serialNumber: new FormControl(null, [Validators.required]),
    languages: new FormControl(this.supportedLanguage[1].name),
    label: new FormControl(this.Labels.Beginner),
    topic: new FormControl(this.topics[0].name),
    contentStatus: new FormControl(this.WorkStatus.Pending),
    visible: new FormControl(true, [Validators.required]),

    question: new FormControl('quest', [Validators.required]),

    answer: new FormControl(null),
    answer2: new FormControl(null),
  });

  constructor() { }

  ngOnInit(): void { }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.valid) {
      console.log('Form Submitted Data:', this.form.value);
    } else {
      // Mark all controls as touched to trigger validation messages in the UI
      this.form.markAllAsTouched();
      console.error('Form contains validation errors.');
    }
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  closeDrawer() {
    this.isOpen = false;
    this.closed.emit();   // tell parent to hide
  }
}
