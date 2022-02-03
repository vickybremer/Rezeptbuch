import FullRecipe from "../fullRecipe/fullRecipe.js"
import { useState } from "react";
import recipeData from "../recipeData/Recipe-data.json"
import Header from '../header/Header.js'


export default function Recipes() {
    console.log("This is a test for Recipe Function");

    //zeigt, welches Rezept angezeigt wird/werden soll
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    //Liste der Rezepttitel wird erstellt (sind Buttons)
    const recipeList = recipeData.map(recipe =>
        <li key={recipe.id}>

            <button onClick={() => setSelectedRecipe(recipe.title)}>{recipe.title}</button>
        </li>
    )
    console.log(selectedRecipe);

    //Liste wird aufgerufen
    return (
        <div>
            <Header title="My Recipes" />
            <h3>{recipeList}</h3>
            {selectedRecipe && <FullRecipe listData={recipeData} selectedRecipe={selectedRecipe} closeHandler={() => setSelectedRecipe(null)} />}
        </div>
    )
}