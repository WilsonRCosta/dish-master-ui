export interface Meal {
    id: string;
    name: string;
    preparationTime: number;
    cookTime: number;
    totalTime: number;
    reviews: number;
    description: string;
    imagesUrls: string[];
    ingredients: Ingredient[];
    steps: Step[];
    categories: Category[];
    cuisine: Cuisine;
}

export interface Step {
    step: number;
    description: string;
}

export enum Category {
    SOUPS,
    SALADS,
    MEATS,
    PASTA,
    PIZZA,
    HEALTHY,
    VEGETARIAN
}

export enum Cuisine {
    BRAZILIAN,
    FRENCH,
    INDIAN,
    ITALIAN,
    GREEK,
    MEXICAN,
    PORTUGUESE,
    SPANISH
}

export interface Ingredient {
    id: string;
    name: string;
    serving: number;
    nutrients: Nutrient[];
    unit: Unit;
    imagesUrls: string[];
}

export enum Unit {
    UNIT, ML, MG, CUP, TEASPOON, TABLESPOON
}

export interface Nutrient {
    type: NutrientType;
    percentage: number;
}

export enum NutrientType {
    PROTEIN, CARBS, FAT
}
