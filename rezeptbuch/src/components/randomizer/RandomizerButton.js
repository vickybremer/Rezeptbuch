// import recipeData from "../recipeData/Recipe-data.json";
import { useState } from "react";
import FullRecipe from "../fullRecipe/fullRecipe.js";
import useLocalStorage from "react-use-localstorage";

export default function RandomizerButton() {
  let localData = JSON.parse(localStorage.getItem("recipes"));
  if (localData === null) {
    localData = [];
  } else {
    localData = JSON.parse(localStorage.getItem("recipes"));
  }

  //Mit Conditional Rendering prüfen, ob schon was in current Recipe steht
  //evtl. mit Conditional Rendering prüfen, dass die gleichen Rezepte nicht hintereinander
  //geshufflet werden können.
  const [currentRecipe, setCurrentRecipe] = useState(null);

  //useEffect können wir nutzen, falls wir anfangs schon ein Rezept anzeigen möchten

  function Randomize() {
    const random = Math.floor(Math.random() * localData.length);
    const RandomRecipe = localData[random].title;


    console.log(RandomRecipe);

    setCurrentRecipe(RandomRecipe);
  }

  return (
    <div>
      {currentRecipe && (
        <FullRecipe
          listData={localData}
          selectedRecipe={currentRecipe}
          closeHandler={() => setCurrentRecipe(null)}
        />
      )}
      <button onClick={Randomize}> shuffle </button>
    </div>
  );
}
