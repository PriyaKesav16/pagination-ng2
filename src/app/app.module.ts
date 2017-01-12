import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import {AppComponent} from './app.component';
import {routing, appRoutingProviders} from './app.routing';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import  {PieChartComponent} from './pchart/pchart.component';
import {PieChartService} from './pchart/piechart.service';
import{Ng2PaginationModule} from 'ng2-pagination';
import{PaginationComponent} from './pagination/pagination.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PieChartComponent,PaginationComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        JsonpModule,
        routing,
        Ng2PaginationModule,
         ChartsModule,
         ModalModule.forRoot(),
    BootstrapModalModule
    ],
    providers: [appRoutingProviders],
    bootstrap: [AppComponent]
})

export class AppModule {
}
