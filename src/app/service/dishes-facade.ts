import { Injectable, Signal, signal } from "@angular/core";
import { DishMasterApi } from "../api/dish-master.api";
import { Dish } from "../model/model";

@Injectable()
export class DishesFacade {

    private dishesSignal = signal<Dish[]>([]);

    constructor(private dishMasterApi: DishMasterApi) {}

    get dishes(): Signal<Dish[]> {
        return this.dishesSignal;
    }

    getDishes(): void {
        this.dishMasterApi
            .getDishes()
            .subscribe(dishes => this.dishesSignal.set(dishes))
    }

    searchDishesByFoodName(foodName: string) {
        this.dishMasterApi
            .searchDishesByFoodName(foodName)
            .subscribe(dishes => this.dishesSignal.set(dishes))
    }
}