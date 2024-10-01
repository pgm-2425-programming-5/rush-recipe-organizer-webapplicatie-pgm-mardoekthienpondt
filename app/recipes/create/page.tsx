'use client'
import React, { useState } from 'react';

import { Category } from '../_types/types';
import { Recipe } from '../_types/types';
import { Ingredient } from '../_types/types';
import Link from 'next/link';

const CreateRecipePage: React.FC = () => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState<Category>('Ontbijt');
    const [ingredientName, setIngredientName] = useState('');
    const [ingredientQuantity, setIngredientQuantity] = useState('');
    const [ingredientUnit, setIngredientUnit] = useState('');

    const handleAddIngredient = () => {
        if (!ingredientName || !ingredientQuantity || !ingredientUnit) {
            return;
        }

        const newIngredient: Ingredient = {
            name: ingredientName,
            quantity: parseFloat(ingredientQuantity),
            measurement_unit: ingredientUnit
        };

        setIngredients([...ingredients, newIngredient]);
        setIngredientName('');
        setIngredientQuantity('');
        setIngredientUnit('');
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        const newRecipe: Recipe = {
            name: recipeName,
            ingredients: ingredients,
            instructions: instructions,
            category: category
        };

        // Assuming you have a function to save the recipe, you can call it here
        // saveRecipe(newRecipe);
        console.log(newRecipe);
        const existingRecipes = JSON.parse(localStorage.getItem('recipes') || '[]');
        localStorage.setItem('recipes', JSON.stringify([...existingRecipes, newRecipe]));
    };

    return (
        <div>
            <h1>Create a New Recipe</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="recipeName">Gerechtnaam: De naam van het gerecht.</label>
                    <input
                        type="text"
                        id="recipeName"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="ingredientName">Ingrediënt Naam:</label>
                    <input
                        type="text"
                        id="ingredientName"
                        value={ingredientName}
                        onChange={(e) => setIngredientName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="ingredientQuantity">Hoeveelheid:</label>
                    <input
                        type="text"
                        id="ingredientQuantity"
                        value={ingredientQuantity}
                        onChange={(e) => setIngredientQuantity(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="ingredientUnit">Eenheid:</label>
                    <input
                        type="text"
                        id="ingredientUnit"
                        value={ingredientUnit}
                        onChange={(e) => setIngredientUnit(e.target.value)}
                    />
                </div>
                <button type="button" onClick={handleAddIngredient}>Voeg Ingrediënt Toe</button>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>{`${ingredient.quantity} ${ingredient.measurement_unit} ${ingredient.name}`}</li>
                    ))}
                </ul>

                <div>
                    <label htmlFor="instructions">Instructies: Stapsgewijze uitleg hoe het gerecht bereid moet worden.</label>
                    <textarea
                        id="instructions"
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="category">Categorie:</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value as Category)}
                    >
                        <option value="Ontbijt">Ontbijt</option>
                        <option value="Lunch">Lunch</option>
                        <option value="Diner">Diner</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </div>
                <button type="submit">Create Recipe</button>
            </form>
            <Link href="/recipes">Terug naar Recepten</Link>
        </div>
    );
};

export default CreateRecipePage;