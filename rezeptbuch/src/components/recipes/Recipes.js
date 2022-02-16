import FullRecipe from "../fullRecipe/fullRecipe.js";
import { useState, useEffect } from "react";
import Header from "../header/Header.js";
import styles from "./Recipes.module.css";
import useLocalStorage from "react-use-localstorage";
import { icons } from "../../CategoryIcons.js";
import { motion } from "framer-motion";

export default function Recipes() {
  console.log("This is a test for Recipe Function");

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
      iconSource = icons[0].src;
    }
    if (localData[recipeID].category === "dessert") {
      iconSource = icons[1].src;
    }
    if (localData[recipeID].category === "snack") {
      iconSource = icons[0].src;
    }
    if (localData[recipeID].category === "side dish") {
      iconSource = icons[1].src;
    }
    if (localData[recipeID].category === "salad") {
      iconSource = icons[0].src;
    }
    if (localData[recipeID].category === "soup") {
      iconSource = icons[1].src;
    }
    if (localData[recipeID].category === "drink") {
      iconSource = icons[0].src;
    }
    if (localData[recipeID].category === "baked good") {
      iconSource = icons[1].src;
    }

    console.log(iconSource);
    return iconSource;
  }

  let Test;

  //Liste der Rezepttitel wird erstellt (sind Buttons)
  if (localData === null || localData.length === 0) {
    localData = [];
    Test = (
      <div className={styles.listTextStyling}>
        <img src={icons[0].src} alt=""></img>
        <p>start cooking. :)</p>
      </div>
    );
  } else {
    // localData = JSON.parse(localStorage.getItem("recipes"));
    Test = recipeList.map((recipe, id) => (
      <div key={recipe.id}>
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
        </div>
        <button onClick={() => DeleteRecipe(recipe.title)}>x</button>
      </div>
    ));
  }

  const DeleteRecipe = id => {
    const filteredRecipes = recipeList.filter(recipe => recipe.title !== id);
    setRecipeList(filteredRecipes);
    console.log(recipeList);
    console.log(id + "   oki");
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipeList));
    localData = JSON.parse(localStorage.getItem("recipes"));
  }, [recipeList]);

  console.log(localData);
  //Liste wird aufgerufen
  return (
    <div className={styles.RecipesBody}>
      <Header title="My Recipes" />
      <div>
        <h3>{Test}</h3>

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
