import Header from "../header/Header.js";
import useLocalStorage from "react-use-localstorage";
import { useState, useEffect } from "react";
import "./AddRecipe.module.css";

export default function AddRecipe() {
  const [localRecipe, setLocalRecipe] = useLocalStorage("recipes", []);

  //Titel
  const [addTitle, setAddTitle] = useState("");
  //Titel muss ausgefüllt sein, um Submit-Button zu aktivieren
  const handleTitleChange = event => {
    setAddTitle(event.target.value);
  };

  //Zutaten
  const [addIngredients, setAddIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  //Schritte
  const [addSteps, setAddSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState("");

  //Datum
  const [addDate, setAddDate] = useState("");
  //Datum: muss ausgefüllt sein, um Submit-Button zu aktivieren
  const handleDateChange = event => {
    setAddDate(event.target.value);
  };

  //Liste mit allen neuen Rezepten
  const [newRecipes, setNewRecipes] = useState([]);

  //Alle gespeicherten Rezepte bei Reload noch da
  useEffect(() => {
    if (localRecipe.length > 0) {
      const savedRecipes = JSON.parse(localRecipe);
      if (savedRecipes) {
        setNewRecipes(savedRecipes);
      }
    }
  }, []);

  //Wird nur ausgeführt wenn neues Rezept dazu kommt
  useEffect(() => {
    const json = JSON.stringify(newRecipes);
    setLocalRecipe(json);
  }, [newRecipes]);

  //Neues Rezept
  const AddRecipe = event => {
    event.preventDefault();
    //Das neue Rezept, was hinzugefügt wird
    const newRecipe = {
      id: addTitle,
      title: addTitle,
      ingredients: addIngredients,
      steps: addSteps,
      date: addDate
    };

    //... = kurz für map Funktion
    setNewRecipes([...newRecipes, newRecipe]);

    //Daten werden gewiped
    setAddTitle("");
    setAddIngredients([]);
    setAddSteps([]);
    setAddDate("");
  };

  //Neue Zutat
  const AddIngredient = event => {
    event.preventDefault();

    const newIngredient = { id: currentIngredient };

    //... = kurz für map Funktion
    //alle Ingredients mappen, die schon drin sind
    setAddIngredients([...addIngredients, newIngredient]);
    setCurrentIngredient("");
  };

  //Zutat löschen
  const DeleteIngredient = id => {
    const filteredIngredients = addIngredients.filter(
      ingredient => ingredient.id !== id
    );
    setAddIngredients(filteredIngredients);
    // console.log(id);
    // console.log(filteredIngredients);
    // console.log(addIngredients);
  };

  //Neuer Schritt
  const AddStep = event => {
    event.preventDefault();
    const newStep = { id: currentStep };

    //... = kurz für map Funktion
    //alle Ingredients mappen, die schon drin sind
    setAddSteps([...addSteps, newStep]);
    setCurrentStep("");
  };

  //Schritt löschen
  const DeleteStep = id => {
    const filteredSteps = addSteps.filter(step => step.id !== id);
    setAddSteps(filteredSteps);
  };

  //Submit-Button erst klickbar, wenn Titel & Datum Feld ausgefüllt ist
  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <>
      <Header title="Add new Recipe" />
      <div>
        <form onSubmit={(AddRecipe, handleSubmit)}>
          <h3>Title</h3>
          <input
            onChange={
              (handleTitleChange, event => setAddTitle(event.target.value))
            }
            value={addTitle}
          ></input>
          <br />
          <br />

          <h3>Ingredients</h3>
          <h5>
            {addIngredients.map(item => (
              <div key={item.id}>
                {item.id}
                <button onClick={() => DeleteIngredient(item.id)}>
                  delete
                </button>
              </div>
            ))}
          </h5>
          <input
            onChange={event => setCurrentIngredient(event.target.value)}
            value={currentIngredient}
          ></input>
          <button onClick={AddIngredient}>+</button>
          <br />
          <br />

          <h3>Steps</h3>
          <h5>
            {addSteps.map(item => (
              <div key={item.id}>
                {item.id}
                <button onClick={() => DeleteStep(item.id)}>delete</button>
              </div>
            ))}
          </h5>
          <input
            onChange={event => setCurrentStep(event.target.value)}
            value={currentStep}
          ></input>
          <button onClick={AddStep}>+</button>
          <br />
          <br />

          <h3>Date</h3>
          <input
            type="date"
            onChange={
              (handleDateChange, event => setAddDate(event.target.value))
            }
            value={addDate}
          ></input>
          <br />
          <br />
          <button type="submit" disabled={!addDate || !addTitle}>
            {" "}
            submit recipe{" "}
          </button>
        </form>
      </div>
    </>
  );
}
