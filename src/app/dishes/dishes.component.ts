import { Component, OnInit } from '@angular/core';
import { DishMasterApi } from '../api/dish-master.api';
import { Dish, Nutrient } from '../model/model';
import { Observable, of } from 'rxjs';
import { DishesFacade } from '../service/dishes-facade';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  food: string = '';

  dishes = this.dishesFacade.dishes;

  constructor(private dishesFacade: DishesFacade) { }

  ngOnInit(): void {
    this.dishesFacade.getDishes();
  }

  searchByFood() {
    this.dishesFacade.searchDishesByFoodName(this.food);
  }

  mapNutrients(nutrients: Nutrient[]): string {
    return nutrients.map(nutrient => `${nutrient.type} - ${nutrient.percentage}%`).join(', ')
  }
  
}
