import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guard/auth.guard';
import { sslGuard } from './core/auth/guard/ssl.guard';

const applicationRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/pages/home/home').then(m => m.Home),
        data: { preload: true }
    },
    {
        path: 'home',
        loadComponent: () => import('./features/pages/home/home').then(m => m.Home),
        data: { preload: true }
    },
    {
        path: 'profile',
        loadComponent: () => import('./features/pages/profile/profile').then(m => m.Profile),
        data: { preload: true }
    },
];

export const routes: Routes = [
    {
        path: '',
        canMatch: [sslGuard],
        children: [
            {
                path: 'login',
                loadComponent: () => import('./features/pages/login/login').then(m => m.Login),
                data: { preload: true }
            },
            {
                path: 'register',
                loadComponent: () => import('./features/pages/register/register').then(m => m.Register),
                data: { preaload: true }
            },
            {
                path: '',
                canMatch: [authGuard],
                loadComponent: () => import('./core/layout/dashboard/dashboard').then(m => m.Dashboard),
                children: applicationRoutes,
                data: { preload: true }
            },
            {
                path: 'not-found-error',
                loadComponent: () => import('./shared/error-pages/not-found-error/not-found-error').then(m => m.NotFoundError),
                data: { preload: true },
            },
            {
                path: 'unauthorize-error',
                loadComponent: () => import('./shared/error-pages/unauthorized-error/unauthorized-error').then(m => m.UnauthorizedError),
                data: { preload: true },
            },
            {
                path: '*',
                loadComponent: () => import('./shared/error-pages/not-found-error/not-found-error').then(m => m.NotFoundError),
                data: { preload: true },
            }
        ]
    }
];
