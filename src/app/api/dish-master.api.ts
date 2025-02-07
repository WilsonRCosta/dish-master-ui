import { HttpClient, HttpParams } from "@angular/common/http";
import { Meal } from "../model/model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class DishMasterApi {

    constructor(private http: HttpClient) {}

    getMeals(): Observable<Meal[]> {
        return this.http.get<Meal[]>(environment.host + '/meals')
    }

    searchMealsByIngredient(name: string): Observable<Meal[]> {
        return this.http.get<Meal[]>(environment.host + '/meals/search/ingredient', { 
            params: new HttpParams().set('name', name)
         })
    }
}