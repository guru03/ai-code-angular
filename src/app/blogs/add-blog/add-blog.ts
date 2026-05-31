import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'aic-add-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './add-blog.html',
  styleUrl: './add-blog.scss',
})
export class AddBlog {
  private store = inject(Store<AppState>);
  private fb = inject(FormBuilder);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  addBlogForm: FormGroup = this.fb.group({
    title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    content: new FormControl(null, [Validators.required, Validators.minLength(20)]),
  });





  onAddPost(): void {
    if (this.addBlogForm.invalid) {
      return;
    }

    const blogData = {
      title: this.addBlogForm.value.title,
      content: this.addBlogForm.value.content
    };



    this.router.navigate(['/blogs']);
  }


}
