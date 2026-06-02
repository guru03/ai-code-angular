import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllBlogs, selectError, selectLoading } from '../state/blog.selector';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { AppState } from '../../store/app.state';
import { deleteBlog } from '../state/blog.action';

@Component({
  selector: 'aic-blog-list',
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})
export class BlogList {

  private store = inject(Store<AppState>);
  private sanitizer = inject(DomSanitizer);

  blogs$ = this.store.select(selectAllBlogs);
  loading$ = this.store.select(selectLoading);
  error$ = this.store.select(selectError);

  onDeleteBlog(id: number) {
    let blogId: number = id;
    this.store.dispatch(deleteBlog({ id: blogId }));
    console.log(blogId);
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
