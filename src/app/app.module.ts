import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DishesComponent } from './dishes/dishes.component';
import { DishMasterApi } from './api/dish-master.api';
import { DishesFacade } from './service/dishes-facade';

import { ButtonModule } from 'primeng/button';
import { OrderListModule } from 'primeng/orderlist';
import { TreeTableModule } from 'primeng/treetable';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';

@NgModule({ 
    declarations: [
        AppComponent,
        DishesComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap: [AppComponent], 
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        ButtonModule,
        OrderListModule,
        TreeTableModule,
        SplitButtonModule,
        TableModule,
        InputTextModule,
        FloatLabelModule
    ],
    providers: [
        DishMasterApi, 
        DishesFacade,
        provideHttpClient(withInterceptorsFromDi())
    ] 
})
export class AppModule { }
