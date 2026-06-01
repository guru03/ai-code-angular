import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'aic-signup',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss',
})
export class Signup {
  signupForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      agreeTerms: [false, Validators.requiredTrue]
    });
  }

  // Convenient getter for easy access to form fields in the HTML template
  get f() { return this.signupForm.controls; }

  onSubmit(): void {
    this.isSubmitted = true;

    if (this.signupForm.invalid) {
      return;
    }

    console.log('Form Submitted Successfully', this.signupForm.value);
    // Proceed with your backend authentication API call here
  }
}
