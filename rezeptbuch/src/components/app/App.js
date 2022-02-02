import './App.css';
import { useState } from "react";
import Header from '../header/Header.js'
import Navigation from '../navigation/Navigation.js'
import Recipes from '../recipes/Recipes.js'
import Randomizer from '../randomizer/Randomizer.js'
import AddRecipe from '../addNewRecipe/AddRecipe.js'


function App() {
    //Anfangsstate ist "MainSite" -> Eigene Rezepte
    const [site, setSite] = useState("MainSite");
    return (
        <div>
            <Header title="Recipes" />
            <div>
                {site === "MainSite" ? <Recipes/> : ""}
            </div>
            <div>
                {site === "Randomizer" ? <Randomizer/> : ""}
            </div>
            <div>
                {site === "AddRecipe" ? <AddRecipe/> : ""}
            </div>
            <Navigation nav={setSite}></Navigation>
        </div>
    );
}

export default App;
