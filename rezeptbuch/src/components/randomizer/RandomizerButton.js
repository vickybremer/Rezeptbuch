import { useState } from "react";
import FullRecipe from "../fullRecipe/fullRecipe.js";
import styles from "./Randomizer.module.css";
import useLocalStorage from "react-use-localstorage";
import { motion } from "framer-motion";

export default function RandomizerButton() {
  let localData = JSON.parse(localStorage.getItem("recipes"));

  //Prüft, ob bereits Rezepte eingetragen wurden
  let handleRandomize;
  if (localData === null || localData.length === 0) {
    localData = [];
    handleRandomize = (
      <div className={styles.noRecipePage}>
        <img src="./assets/no-recipes.png" alt=""></img>
        <p>no recipes yet.</p>
      </div>
    );
  } else {
    localData = JSON.parse(localStorage.getItem("recipes"));
    handleRandomize = (
      <div className={styles.randomizerContainer}>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={styles.shuffleButton}
          onClick={Randomize}
        >
          Pick a meal
        </motion.button>
        <p>
          Sometimes it’s hard to pick A meal. We totally get that. <br />
          <br />
          That’s why we’re here! ;)
        </p>
        <img src="./assets/icons/example1.jpeg"></img>
      </div>
    );
  }

  const [currentRecipe, setCurrentRecipe] = useState(null);

  function Randomize() {
    const random = Math.floor(Math.random() * localData.length);
    const RandomRecipe = localData[random].title;

    setCurrentRecipe(RandomRecipe);
  }

  return (
    <div className={styles.RandomizerBody}>
      {currentRecipe && (
        <FullRecipe
          listData={localData}
          selectedRecipe={currentRecipe}
          closeHandler={() => setCurrentRecipe(null)}
        />
      )}
      {handleRandomize}
    </div>
  );
}
