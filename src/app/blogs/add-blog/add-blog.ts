import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppState } from '../../store/app.state';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { createBlog, updateBlog } from '../state/blog.action';
import { selectAllBlogs, selectBlogById } from '../state/blog.selector';
import { take } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'aic-add-blog',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-blog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './add-blog.scss',
})
export class AddBlog implements OnInit {
  private store = inject(Store<AppState>);
  private fb = inject(FormBuilder);
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);
  blogId: number | null = null;

  addBlogForm: FormGroup = this.fb.group({
    title: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    content: new FormControl(null, [Validators.required, Validators.minLength(20)]),
  });

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.blogId = id ? Number(id) : null;

      if (this.blogId) {
        this.store
          .select(selectBlogById(this.blogId))
          .pipe(take(1))
          .subscribe((blog) => {
            if (blog) {
              this.addBlogForm.patchValue({
                title: blog.title,
                content: blog.content,
              });
            }
          });
      }
    });
  }

  onSubmit(): void {
    if (this.addBlogForm.invalid) {
      this.addBlogForm.markAllAsTouched();
      return;
    }

    if (this.blogId) {
      this.store.dispatch(
        updateBlog({
          blog: {
            id: this.blogId,
            title: this.addBlogForm.value.title,
            content: this.addBlogForm.value.content,
          },
        }),
      );

      this.router.navigate(['/blogs']);
      return;
    }

    this.store
      .select(selectAllBlogs)
      .pipe(take(1))
      .subscribe((blogs) => {
        const blogData = {
          id: Math.max(...blogs.map((blog) => blog.id), 0) + 1,
          title: this.addBlogForm.value.title,
          content: this.addBlogForm.value.content,
        };

        this.store.dispatch(createBlog({ blog: blogData }));
        this.addBlogForm.reset();
        this.router.navigate(['/blogs']);
      });
  }
}
