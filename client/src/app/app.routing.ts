import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent, AddDocumentComponent, SearchDocumentComponent } from './Shared/index';

const appRoutes: Routes = [
    {
        path: '',
        component: LandingPageComponent
    },
    {
        path: 'add',
        component: AddDocumentComponent
    },
    {
        path: 'search',
        component: SearchDocumentComponent
    },
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
