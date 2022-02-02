import FullRecipe from "../fullRecipe/fullRecipe.js"
import { useState } from "react";
import recipeData from "./Recipe-data.json"



export default function Recipes() {
    console.log("This is a test for Recipe Function");

    //zeigt den State, ob Rezept gezeigt wird
    // const [showFullRecipe, setShowFullRecipe] = useState(false)

    //welches angezeigt wird
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    // const toggleFullRecipe = () => {
    //     setShowFullRecipe(!showFullRecipe);

    // };

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
            <h3>{recipeList}</h3>
            {selectedRecipe && <FullRecipe listData={recipeData} selectedRecipe={selectedRecipe} closeHandler={() => setSelectedRecipe(null)} />}
        </div>
    )
}