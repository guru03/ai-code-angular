import { Routes } from '@angular/router';
import { Angular } from './angular/angular';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Signal } from './signal/signal';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'dashboard',
        component: Home
    },
    {
        path: 'home',
        component: Home
    },
    // {
    //     path: '',
    //     loadChildren: () =>
    //         import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    // },
    {
        path: 'angular',
        component: Angular,
    },
    // {
    //     path: 'blogs',
    //     loadChildren: () =>
    //         import('./blogs/blogs-routes').then(m => m.routes)
    // },
    // {
    //     path: 'counter',
    //     loadComponent: () =>
    //         import('./counter/counter').then(m => m.Counter)
    // },
    {
        path: 'about',
        component: About,
    },
    {
        path: 'signals',
        component: Signal,
    },
    {
        path: 'contact',
        component: Contact,
    },
];
