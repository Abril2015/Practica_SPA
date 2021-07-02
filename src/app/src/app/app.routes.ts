import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './../../components/about/about.component';
import { HomeComponent } from './../../components/home/home.component';
import { HeroeComponent } from './../../components/heroe/heroe.component';


const app_routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'heroe', component: HeroeComponent },
    {path: 'about', component: AboutComponent },
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);

