export interface Dish {
    name: string;
    food: Food[];
}

export interface Food {
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