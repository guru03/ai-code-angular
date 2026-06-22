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
    {
        path: '',
        loadChildren: () =>
            import('./auth/auth.routes').then(m => m.AUTH_ROUTES)
    },

    {
        path: 'question-bank',
        loadChildren: () =>
            import('./features/question-bank-component/question-bank.routes').then(m => m.QUESTION_BANK_ROUTES)
    },

    {
        path: 'angular',
        loadChildren: () =>
            import('./angular/angular.routes').then(m => m.ANGULAR_ROUTES)
    },

    {
        path: 'javascript',
        loadChildren: () =>
            import('./javascript/javascript.routes').then(m => m.JAVASCRIPT_ROUTES)
    },

    {
        path: 'coding',
        loadChildren: () =>
            import('./coding/coding.routes').then(m => m.CODING_ROUTES)
    },


    {
        path: 'blogs',
        loadChildren: () =>
            import('./blogs/blogs.routes').then(m => m.BLOGS_ROUTES)
    },

    {
        path: 'design',
        loadChildren: () =>
            import('./design/design.routes').then(m => m.DESIGN_ROUTES)
    },
    // {
    //     path: 'coding-practice',
    //     loadComponent: () =>
    //         import('./coding-practice/coding-practice').then(m => m.CodingPractice)
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
