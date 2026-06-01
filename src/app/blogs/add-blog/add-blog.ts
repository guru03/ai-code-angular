import { Component, inject, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { createBlog } from '../state/blog.action';

@Component({
  selector: 'aic-add-blog',
  imports: [ReactiveFormsModule],
  templateUrl: './add-blog.html',
  styleUrl: './add-blog.scss',
})
export class AddBlog implements OnChanges {
  private store = inject(Store<AppState>);
  private fb = inject(FormBuilder);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  addBlogForm: FormGroup = this.fb.group({
    title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    content: new FormControl(null, [Validators.required, Validators.minLength(20)]),
  });


  ngOnChanges(): void {
    this.updateBlog();
  }


  onAddPost(): void {
    if (this.addBlogForm.invalid) {
      return;
    }

    const blogData = {
      id: 10,
      title: this.addBlogForm.value.title,
      content: this.addBlogForm.value.content
    };

    this.store.dispatch(createBlog({ blog: blogData }));
    this.addBlogForm.reset();

    console.log(blogData);

    this.router.navigate(['/blogs']);
  }

  updateBlog() {
    const blogId = this.activatedRoute.snapshot.params['id'];
    console.log(blogId);
  }


}
