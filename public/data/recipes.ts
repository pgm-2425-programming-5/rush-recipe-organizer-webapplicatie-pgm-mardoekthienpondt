import { Recipe } from '../../app/recipes/_types/types';

export const recipes: Recipe[] = [
    {
      name: 'Pancakes',
      ingredients: [
        { name: 'Flour', quantity: 200, measurement_unit: 'g' },
        { name: 'Milk', quantity: 300, measurement_unit: 'ml' },
        { name: 'Eggs', quantity: 2, measurement_unit: 'pieces' },
        { name: 'Butter', quantity: 50, measurement_unit: 'g' },
        { name: 'Sugar', quantity: 2, measurement_unit: 'tbsp' },
      ],
      instructions:
        'Mix all ingredients, cook on a hot skillet, flipping halfway until golden brown.',
      category: 'Ontbijt',
    },
    {
      name: 'Caesar Salad',
      ingredients: [
        { name: 'Romaine Lettuce', quantity: 1, measurement_unit: 'head' },
        { name: 'Parmesan', quantity: 50, measurement_unit: 'g' },
        { name: 'Croutons', quantity: 100, measurement_unit: 'g' },
        { name: 'Chicken Breast', quantity: 1, measurement_unit: 'piece' },
        { name: 'Caesar Dressing', quantity: 100, measurement_unit: 'ml' },
      ],
      instructions:
        'Chop lettuce, grill chicken, and toss with dressing, parmesan, and croutons.',
      category: 'Lunch',
    },
    {
      name: 'Spaghetti Bolognese',
      ingredients: [
        { name: 'Spaghetti', quantity: 200, measurement_unit: 'g' },
        { name: 'Ground Beef', quantity: 250, measurement_unit: 'g' },
        { name: 'Tomato Sauce', quantity: 400, measurement_unit: 'ml' },
        { name: 'Onion', quantity: 1, measurement_unit: 'piece' },
        { name: 'Garlic', quantity: 2, measurement_unit: 'cloves' },
      ],
      instructions:
        'Cook spaghetti. Sauté onions and garlic, add ground beef, then stir in tomato sauce. Serve with pasta.',
      category: 'Diner',
    },
    {
      name: 'Chocolate Cake',
      ingredients: [
        { name: 'Flour', quantity: 200, measurement_unit: 'g' },
        { name: 'Sugar', quantity: 150, measurement_unit: 'g' },
        { name: 'Cocoa Powder', quantity: 50, measurement_unit: 'g' },
        { name: 'Eggs', quantity: 3, measurement_unit: 'pieces' },
        { name: 'Butter', quantity: 100, measurement_unit: 'g' },
      ],
      instructions:
        'Mix dry ingredients, then add eggs and melted butter. Bake at 180°C for 30-35 minutes.',
      category: 'Dessert',
    },
    {
      name: 'Grilled Cheese Sandwich',
      ingredients: [
        { name: 'Bread', quantity: 2, measurement_unit: 'slices' },
        { name: 'Cheddar Cheese', quantity: 100, measurement_unit: 'g' },
        { name: 'Butter', quantity: 20, measurement_unit: 'g' },
      ],
      instructions:
        'Butter bread, place cheese between slices, and grill in a pan until golden brown and crispy.',
      category: 'Lunch',
    },
  ];