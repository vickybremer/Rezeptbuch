import { useState } from "react";
import FullRecipe from "../fullRecipe/fullRecipe.js";
import styles from "./Randomizer.module.css";
import useLocalStorage from "react-use-localstorage";
import { motion } from "framer-motion";
import { icons } from "../../CategoryIcons.js";

export default function RandomizerButton() {
  let localData = JSON.parse(localStorage.getItem("recipes"));

  //Prüft, ob bereits Rezepte eingetragen wurden
  let handleRandomize;
  if (localData === null || localData.length === 0) {
    localData = [];
    handleRandomize = (
      <div className={styles.noRecipePage}>
        <img src={icons[0].src} alt=""></img>
        <p>no recipes yet.</p>
      </div>
    );
  } else {
    localData = JSON.parse(localStorage.getItem("recipes"));
    handleRandomize = (
      <motion.button
        whileTap={{ scale: 0.9 }}
        className={styles.shuffleButton}
        onClick={Randomize}
      >
        shuffle
      </motion.button>
    );
  }

  //Mit Conditional Rendering prüfen, ob schon was in current Recipe steht
  //evtl. mit Conditional Rendering prüfen, dass die gleichen Rezepte nicht hintereinander
  //geshufflet werden können.
  const [currentRecipe, setCurrentRecipe] = useState(null);

  function Randomize() {
    const random = Math.floor(Math.random() * localData.length);
    const RandomRecipe = localData[random].title;

    console.log(RandomRecipe);

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
      <h3>{handleRandomize}</h3>
    </div>
  );
}
