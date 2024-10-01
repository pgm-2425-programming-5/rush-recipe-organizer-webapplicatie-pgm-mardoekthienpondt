export type Ingredient = {
  name: string;
  quantity: number;
  measurement_unit: string;
};

export type Recipe = {
  name: string;
  ingredients: Ingredient[];
  instructions: string;
  category: Category;
};

export type Category = 'Ontbijt' | 'Lunch' | 'Diner' | 'Dessert';