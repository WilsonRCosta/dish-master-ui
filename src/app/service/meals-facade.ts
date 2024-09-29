import { Injectable, Signal, signal } from "@angular/core";
import { DishMasterApi } from "../api/dish-master.api";
import { Meal } from "../model/model";

@Injectable()
export class MealsFacade {

    private mealsSignal = signal<Meal[]>([]);

    constructor(private dishMasterApi: DishMasterApi) {}

    get meals(): Signal<Meal[]> {
        return this.mealsSignal;
    }

    getMeals(): void {
        this.dishMasterApi
            .getMeals()
            .subscribe(meals => this.mealsSignal.set(meals))
    }

    searchMealsByIngredient(ingredient: string) {
        this.dishMasterApi
            .searchMealsByIngredient(ingredient)
            .subscribe(meals => this.mealsSignal.set(meals))
    }
}