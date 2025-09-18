import { Routes } from "@angular/router";

export const PROFILE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./about-me/about-me').then(m => m.AboutMe),
        data: { preload: true }
    },
    {
        path: 'my-scrapers',
        loadComponent: () => import('./my-scrapers/my-scrapers').then(m => m.MyScrapers),
        data: { preload: true }
    },
    {
        path: 'profile-settings',
        loadComponent: () => import('./profile-settings/profile-settings').then(m => m.ProfileSettings),
        data: { preload: true }
    },
];