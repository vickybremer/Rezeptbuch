import FullRecipe from "../fullRecipe/fullRecipe.js";
import AddRecipe from "../addNewRecipe/AddRecipe.js";
import { useState } from "react";
// import recipeData from "../recipeData/Recipe-data.json";
import Header from "../header/Header.js";
import useLocalStorage from "react-use-localstorage";

export default function Recipes() {
  console.log("This is a test for Recipe Function");

  let localData = JSON.parse(localStorage.getItem("recipes"));
  let recipeList;

  //zeigt, welches Rezept angezeigt wird/werden soll
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Liste der Rezepttitel wird erstellt (sind Buttons)
  if (localData === null) {
    localData = [];
    recipeList = <p>start cooking. ;)</p>;
  } else {
    localData = JSON.parse(localStorage.getItem("recipes"));
    recipeList = localData.map(recipe => (
      <li key={recipe.id}>
        <button onClick={() => setSelectedRecipe(recipe.title)}>
          {recipe.title}
        </button>
        <button onClick={() => DeleteRecipe(recipe.id)}>delete</button>
      </li>
    ));
  }

  const xxxx = { id: localData.title };
  const DeleteRecipe = id => {
    // const filteredRecipes = xxxx.filter(recipe => recipe.id !== id);
    // setSelectedRecipe(filteredRecipes);
    // console.log(id);
    console.log(xxxx + "   oki");
  };

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
