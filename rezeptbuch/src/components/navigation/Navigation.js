import React from "react";
import "./Navigation.module.css";

export default function Navigation({ nav }) {
  return (
    <div>
      <div>
        <button onClick={() => nav("Randomizer")}> Randomizer </button>
        <button onClick={() => nav("MainSite")}> My Recipes </button>
        <button onClick={() => nav("AddRecipe")}> Add Recipe </button>
      </div>
    </div>
  );
}
