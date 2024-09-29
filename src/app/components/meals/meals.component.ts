import { Component, OnInit } from '@angular/core';
import { MealsFacade } from 'src/app/service/meals-facade';
import { Nutrient } from 'src/app/model/model';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.css']
})
export class MealsComponent implements OnInit {

  ingredient: string = '';

  meals = this.mealsFacade.meals;

  constructor(private mealsFacade: MealsFacade) { }

  ngOnInit(): void {
    this.mealsFacade.getMeals();
  }

  searchByIngredient() {
    this.mealsFacade.searchMealsByIngredient(this.ingredient);
  }

  mapNutrients(nutrients: Nutrient[]): string {
    return nutrients.map(nutrient => `${nutrient.type} - ${nutrient.percentage}%`).join(', ')
  }
  
}
