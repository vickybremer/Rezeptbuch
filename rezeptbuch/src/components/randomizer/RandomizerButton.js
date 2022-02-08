import recipeData from "../recipeData/Recipe-data.json";
import { useState } from "react";
import FullRecipe from "../fullRecipe/fullRecipe.js";

export default function RandomizerButton() {
  //Mit Conditional Rendering prüfen, ob schon was in current Recipe steht
  //evtl. mit Conditional Rendering prüfen, dass die gleichen Rezepte nicht hintereinander
  //geshufflet werden können.
  const [currentRecipe, setCurrentRecipe] = useState(null);

  //useEffect können wir nutzen, falls wir anfangs schon ein Rezept anzeigen möchten

  function Randomize() {
    const random = Math.floor(Math.random() * recipeData.length);
    const RandomRecipe = recipeData[random].title;

    console.log(RandomRecipe);

    setCurrentRecipe(RandomRecipe);
  }

  return (
    <div>
      {currentRecipe && (
        <FullRecipe
          listData={recipeData}
          selectedRecipe={currentRecipe}
          closeHandler={() => setCurrentRecipe(null)}
        />
      )}
      <button onClick={Randomize}> shuffle </button>
    </div>
  );
}
