import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DishMasterApi } from './api/dish-master.api';
import { MealsComponent } from './components/meals/meals.component';
import { MealsFacade } from './service/meals-facade';

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
        MealsComponent
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
        MealsFacade,
        provideHttpClient(withInterceptorsFromDi())
    ] 
})
export class AppModule { }
