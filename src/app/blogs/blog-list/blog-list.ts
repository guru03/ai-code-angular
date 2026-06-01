import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogState } from '../../models/blog.model';
import { Store } from '@ngrx/store';
import { selectAllBlogs, selectError, selectLoading } from '../state/blog.selector';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { App } from '../../app';
import { AppState } from '../../store/app.state';

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

  onDeleteBlog(id:number){
    let idblod:number = id;
    console.log(idblod);
  }

  setHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
