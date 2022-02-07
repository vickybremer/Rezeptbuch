import recipeData from "../recipeData/Recipe-data.json";
import { useState } from "react";

export default function RandomizerButton() {
  //Mit Conditional Rendering prüfen, ob schon was in current Recipe steht
  const [currentRecipe, setCurrentRecipe] = useState("");

  //useEffect

  function Randomize() {
    const random = Math.floor(Math.random() * recipeData.length);
    const RandomRecipe = recipeData[random].title;
    console.log(RandomRecipe);

    setCurrentRecipe(RandomRecipe);
  }

  return (
    <div>
      <p>{currentRecipe}</p>
      <button onClick={Randomize}> shuffle </button>
    </div>
  );
}
