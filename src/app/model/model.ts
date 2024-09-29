export interface Meal {
    name: string;
    ingredients: Ingredient[];
}

export interface Ingredient {
    name: string;
    grams: number;
    nutrients: Nutrient[];
}

export interface Nutrient {
    type: NutrientType;
    percentage: number;
}

export enum NutrientType {
    PROTEIN, CARBS, FAT
}