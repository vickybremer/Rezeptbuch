import FullRecipe from "../fullRecipe/fullRecipe.js"
import {useState} from "react";
import recipeData from "./Recipe-data.json"



export default function Recipes () {
    console.log("This is a test for Recipe Function");

    //zeigt den State, ob Rezept gezeigt wird
    const [showFullRecipe, setShowFullRecipe] = useState(false)

    const toggleFullRecipe = () => {
      setShowFullRecipe(!showFullRecipe);
    };

    //Liste der Rezepttitel wird erstellt (sind Buttons)
    const recipeList = recipeData.map(recipe => 
    <li key={recipe.id}>
        <button onClick={toggleFullRecipe}>{recipe.title}</button>
    </li>)   

    //Liste wird aufgerufen
    return (
        <div>
            <h3>{recipeList}</h3>
            {showFullRecipe && <FullRecipe individualRecipeData={recipeData} closeHandler={toggleFullRecipe}/>}
        </div>
    )
}