import { HttpClient, HttpParams } from "@angular/common/http";
import { Dish } from "../model/model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class DishMasterApi {

    constructor(private http: HttpClient) {}

    getDishes(): Observable<Dish[]> {
        return this.http.get<Dish[]>(environment.host + '/dishes')
    }

    searchDishesByFoodName(foodName: string): Observable<Dish[]> {
        return this.http.get<Dish[]>(environment.host + '/dishes/search', { 
            params: new HttpParams().set('foodName', foodName)
         })
    }
}