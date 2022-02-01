// import FullRecipe from "../fullRecipe/fullRecipe.js"
// import {useState} from "react";
import recipeData from "./Recipe-data.json"

export default function Recipes () {
    console.log("This is a test for Recipe Function");

    // const [showFullRecipe, setShowFullRecipe] = useState(true);

    //Button OnClick Test
    const testClick = () => {
        console.log("hallo");
    }

    //Liste der Rezepttitel wird erstellt (sind Buttons)
    const recipeList = recipeData.map(recipe => 
    <li key={recipe.id}>
        <button onClick={testClick}>{recipe.title}</button>
    </li>)   

    //Liste wird aufgerufen
    return (
        <div>
            <h3>{recipeList}</h3>
            {/* <FullRecipe/> */}
        </div>
    );
}