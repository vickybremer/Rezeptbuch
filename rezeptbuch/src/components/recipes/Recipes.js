import FullRecipe from "../fullRecipe/fullRecipe.js";
import { useState } from "react";
import Header from "../header/Header.js";
import styles from "./Recipes.module.css";
import useLocalStorage from "react-use-localstorage";
// import { icons } from "../../CategoryIcons.js";

export default function Recipes() {
  console.log("This is a test for Recipe Function");

  let localData = JSON.parse(localStorage.getItem("recipes"));
  let recipeList;

  //zeigt, welches Rezept angezeigt wird/werden soll
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Icons werden gewählt (pro Kategorie)
  // let icon;
  // if (localData[0].category === "food") {
  //   icon = icons[0].src;
  //   console.log("hat funktioniert");
  // }

  //Liste der Rezepttitel wird erstellt (sind Buttons)
  if (localData === null || localData.length === 0) {
    localData = [];
    recipeList = <p className={styles.ListTextStyling}>start cooking. ;)</p>;
  } else {
    localData = JSON.parse(localStorage.getItem("recipes"));
    recipeList = localData.map(recipe => (
      <div key={recipe.id}>
        <div className={styles.ListItemStyling}>
          <button onClick={() => setSelectedRecipe(recipe.title)}>
            {/* <img src={icon} width="25px" alt=""></img> */}
            {recipe.title}
          </button>
        </div>
        {/* <button onClick={() => DeleteRecipe(recipe.id)}>x</button> */}
      </div>
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
    <div className={styles.RecipesBody}>
      <Header title="My Recipes" />
      <div>
        <h3>{recipeList}</h3>
        {selectedRecipe && (
          <FullRecipe
            listData={localData}
            selectedRecipe={selectedRecipe}
            closeHandler={() => setSelectedRecipe(null)}
          />
        )}
      </div>
    </div>
  );
}
