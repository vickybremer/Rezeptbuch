import "./App.css";
import { useState } from "react";
import Navigation from "../navigation/Navigation.js";
import Recipes from "../recipes/Recipes.js";
import Randomizer from "../randomizer/Randomizer.js";
import AddRecipe from "../addNewRecipe/AddRecipe.js";

function App() {
  //Anfangsstate ist MainSite -> Alle eigenen Rezepte
  const [site, setSite] = useState("MainSite");

  return (
    <div>
      <div>{site === "Randomizer" ? <Randomizer /> : ""}</div>
      <div>{site === "MainSite" ? <Recipes /> : ""}</div>
      <div>{site === "AddRecipe" ? <AddRecipe /> : ""}</div>
      <Navigation nav={setSite}></Navigation>
    </div>
  );
}

export default App;
