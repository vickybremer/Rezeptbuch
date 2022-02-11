import FullRecipe from "../fullRecipe/fullRecipe.js";
import { useState } from "react";
// import recipeData from "../recipeData/Recipe-data.json";
import Header from "../header/Header.js";
import useLocalStorage from "react-use-localstorage";

export default function Recipes() {
  console.log("This is a test for Recipe Function");

  let localData = JSON.parse(localStorage.getItem("recipes"));

  if (localData === null) {
    localData = [];
  } else {
    localData = JSON.parse(localStorage.getItem("recipes"));
  }

  //zeigt, welches Rezept angezeigt wird/werden soll
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Liste der Rezepttitel wird erstellt (sind Buttons)
  const recipeList = localData.map(recipe => (
    <li key={recipe.id}>
      <button onClick={() => setSelectedRecipe(recipe.title)}>
        {recipe.title}
      </button>
    </li>
  ));
  console.log(selectedRecipe);

  //Liste wird aufgerufen
  return (
    <div>
      <Header title="My Recipes" />
      <h3>{recipeList}</h3>
      {selectedRecipe && (
        <FullRecipe
          listData={localData}
          selectedRecipe={selectedRecipe}
          closeHandler={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
}
