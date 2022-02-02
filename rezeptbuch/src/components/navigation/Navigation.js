import React from "react";

export default function Navigation({nav}) {
    return(
        <div>
            <div>
                <button onClick={() => nav("MainSite")}> My Recipes </button>
                <button onClick={() => nav("Randomizer")}> Randomizer </button>
                <button onClick={() => nav("AddRecipe")}>Add Recipe</button>
            </div>
        </div>
    );
}