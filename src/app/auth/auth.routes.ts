import { Routes } from "@angular/router";
import { Login } from "./login/login";
import { Signup } from "./signup/signup";
import { ForgotPassword } from "./forgot-password/forgot-password";
import { AuthLayout } from "./auth-layout/auth-layout";

export const AUTH_ROUTES: Routes = [
    { path: 'login', component: Login },
    { path: 'sign-up', component: Signup },
    { path: 'forgot-password', component: ForgotPassword },
    { path: 'design', component: AuthLayout },
];