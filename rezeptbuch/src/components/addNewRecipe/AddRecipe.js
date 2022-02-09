import Header from "../header/Header.js";
import useLocalStorage from "react-use-localstorage";
import React, { useState, useEffect } from "react";

export default function AddRecipe() {
  const [localRecipe, setLocalRecipe] = useLocalStorage("recipes", {});

  //Titel
  const [addTitle, setAddTitle] = useState("");

  //Zutaten
  const [ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  //Schritte
  const [addSteps, setAddSteps] = useState([]);

  //Datum
  const [addDate, setAddDate] = useState("");

  //Liste mit allen neuen Rezepten
  const [newRecipes, setNewRecipes] = useState([]);

  useEffect(() => {
    const savedRecipes = JSON.parse(localRecipe);
    if (savedRecipes) {
      setNewRecipes(savedRecipes);
    }
  }, []);

  useEffect(() => {
    const json = JSON.stringify(newRecipes);
    setLocalRecipe(json);
  }, [newRecipes]);

  const AddRecipe = event => {
    event.preventDefault();
    //Das eine neue Rezept, was hinzugefügt wird
    const newRecipe = {
      //   id: addId,
      title: addTitle,
      ingredients: ingredients,
      steps: addSteps,
      date: addDate
    };

    //... = kurz für map Funktion
    setNewRecipes([...newRecipes, newRecipe]);
    //Daten werden gewiped
    setAddTitle("");
    setIngredients("");
  };

  const AddIngredient = event => {
    event.preventDefault();

    const newIngredient = currentIngredient;

    //... = kurz für map Funktion
    //alle Ingredients mappen, die schon drin sind
    setIngredients([...ingredients, newIngredient]);
    setCurrentIngredient("");
  };

  return (
    <>
      <Header title="Add new Recipe" />
      <div>
        <form onSubmit={AddRecipe}>
          <label>Title</label>
          <input
            onChange={event => setAddTitle(event.target.value)}
            value={addTitle}
          ></input>
          <br />
          <br />
          <label>Ingredients</label>
          <textarea
            onChange={event => setCurrentIngredient(event.target.value)}
            value={currentIngredient}
          ></textarea>
          <button onClick={AddIngredient}>+</button>
          {/* mappen  */}
          <span>{ingredients}</span>
          <br />
          <br />
          <label>Steps</label>
          <textarea
            onChange={event => setAddSteps(event.target.value)}
            value={addSteps}
          ></textarea>
          <button>+</button>
          <br />
          <br />
          <label>Date</label>
          <input
            onChange={event => setAddDate(event.target.value)}
            value={addDate}
          ></input>
          <br />
          <br />
          <button type="submit"> submit recipe </button>
        </form>
      </div>
    </>
  );
}
