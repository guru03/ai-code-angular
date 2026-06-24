import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'angular/questions/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'javascript/questions/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'question-bank/questions/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'coding/coding/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'blogs/details/:id',
    renderMode: RenderMode.Server
  },
  {
    path: 'blogs/edit/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
