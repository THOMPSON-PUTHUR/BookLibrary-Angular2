import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { CommonsloginComponent } from '../components/login/login.component';
import { MainComponent } from '../components/main/main.component';

const appRoutes: Routes = [
    {path: '', component: CommonsloginComponent},
    {path: '**', redirectTo: '/'}
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
