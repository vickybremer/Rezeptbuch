import FullRecipe from "../fullRecipe/fullRecipe.js";
import { useState, useEffect } from "react";
import Header from "../header/Header.js";
import styles from "./Recipes.module.css";
import useLocalStorage from "react-use-localstorage";
import { icons } from "../../CategoryIcons.js";
import { motion } from "framer-motion";

export default function Recipes() {
  let localData = JSON.parse(localStorage.getItem("recipes"));

  const [recipeList, setRecipeList] = useState(localData);

  //zeigt, welches Rezept angezeigt wird/werden soll
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Icons werden gewählt (pro Kategorie)
  function getIcon(recipeID) {
    let iconSource;
    if (localData[recipeID].category === "starter") {
      iconSource = icons[0].src;
    }
    if (localData[recipeID].category === "appetizer") {
      iconSource = icons[1].src;
    }
    if (localData[recipeID].category === "main") {
      iconSource = icons[2].src;
    }
    if (localData[recipeID].category === "dessert") {
      iconSource = icons[3].src;
    }
    if (localData[recipeID].category === "snack") {
      iconSource = icons[4].src;
    }
    if (localData[recipeID].category === "side dish") {
      iconSource = icons[5].src;
    }
    if (localData[recipeID].category === "salad") {
      iconSource = icons[6].src;
    }
    if (localData[recipeID].category === "soup") {
      iconSource = icons[7].src;
    }
    if (localData[recipeID].category === "drink") {
      iconSource = icons[8].src;
    }
    if (localData[recipeID].category === "baked good") {
      iconSource = icons[9].src;
    }

    return iconSource;
  }

  let Switch;

  //Liste der Rezepttitel wird erstellt (sind Buttons)
  if (localData === null || localData.length === 0) {
    localData = [];
    Switch = (
      <div className={styles.listTextStyling}>
        <img src="./assets/no-recipes.png" alt=""></img>
        <p>
          Add your first <br />
          recipe. :)
        </p>
      </div>
    );
  } else {
    // localData = JSON.parse(localStorage.getItem("recipes"));
    Switch = recipeList.map((recipe, id) => (
      <div key={recipe.title}>
        <div className={styles.listItemStyling}>
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={styles.recipeButton}
            onClick={() => setSelectedRecipe(recipe.title)}
          >
            <img src={getIcon(id)} alt=""></img>
            <div className="textFlex">
              <h3>{recipe.title}</h3>
              <h5>{recipe.date}</h5>
            </div>
          </motion.button>
          <button
            className={styles.deleteButton}
            onClick={() => DeleteRecipe(recipe.title)}
          >
            ⨯
          </button>
        </div>
      </div>
    ));
  }

  const DeleteRecipe = id => {
    const filteredRecipes = recipeList.filter(recipe => recipe.title !== id);
    setRecipeList(filteredRecipes);
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
    localData = JSON.parse(localStorage.getItem("recipes"));
  }, [recipeList]);

  //Liste wird aufgerufen
  return (
    <div className={styles.RecipesBody}>
      <Header title="My Recipes" />
      <div>
        <h3>{Switch}</h3>

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
