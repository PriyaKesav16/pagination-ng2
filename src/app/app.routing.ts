import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PieChartComponent} from './pchart/pchart.component';
import {PaginationComponent} from './pagination/pagination.component';

const appRoutes: Routes = [
     
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'pchart', component: PieChartComponent},
    {path: 'page',component: PaginationComponent}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


/*import { provideRouter, RouterConfig }  from '@angular/router';
//import { AboutComponent } from './about/about.component';
import {AppComponent} from './app.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
{
  path : 'about',
  component : AboutComponent
}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];*/