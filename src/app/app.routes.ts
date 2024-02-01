import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'content',
        component: AboutComponent
    },
    {
        path: 'content/:slug',
        component: ContentComponent
    },
];
