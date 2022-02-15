import Header from "../header/Header.js";
import useLocalStorage from "react-use-localstorage";
import { useState, useEffect } from "react";
import styles from "./AddRecipe.module.css";

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

  //Kategorie
  const [addCategory, setAddCategory] = useState("placeholder");
  const handleCategoryChange = event => {
    setAddCategory(event.target.value);
  };

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
      //   id: addTitle,
      title: addTitle,
      ingredients: addIngredients,
      steps: addSteps,
      category: addCategory,
      date: addDate
    };

    //... = kurz für map Funktion
    setNewRecipes([...newRecipes, newRecipe]);

    //Daten werden gewiped
    setAddTitle("");
    setAddIngredients([]);
    setAddSteps([]);
    setAddDate("");
    setAddCategory("placeholder");
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
    <div>
      <Header title="Add Recipe" />
      <div className={styles.addRBody}>
        <form onSubmit={(handleSubmit, AddRecipe)}>
          <div className={styles.titleStyling}>
            <h3>Title</h3>
            <input
              placeholder="add title"
              onChange={
                (handleTitleChange, event => setAddTitle(event.target.value))
              }
              value={addTitle}
            ></input>
          </div>
          <br />
          <br />

          <div className={styles.ingredientStyling}>
            <h3>Ingredients</h3>
            <h5>
              {addIngredients.map(item => (
                <div className={styles.ingredientsListStyling} key={item.id}>
                  <div className={styles.singleElement}>{item.id}</div>
                  <button
                    id={styles.buttonDelete}
                    onClick={() => DeleteIngredient(item.id)}
                  >
                    x
                  </button>
                </div>
              ))}
            </h5>
            <div className={styles.inputAndButtonStyling}>
              <input
                placeholder="add ingredients"
                onChange={event => setCurrentIngredient(event.target.value)}
                value={currentIngredient}
              ></input>
              <button id={styles.buttonAdd} onClick={AddIngredient}>
                +
              </button>
            </div>
          </div>
          <br />
          <br />

          <div className={styles.stepsStyling}>
            <h3>Steps</h3>
            <h5>
              {addSteps.map(item => (
                <div className={styles.stepsListStyling} key={item.id}>
                  <div className={styles.singleElement}>{item.id}</div>
                  <button
                    id={styles.buttonDelete}
                    onClick={() => DeleteStep(item.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </h5>
            <div className={styles.inputAndButtonStyling}>
              <input
                placeholder="add steps"
                onChange={event => setCurrentStep(event.target.value)}
                value={currentStep}
              ></input>
              <button id={styles.buttonAdd} onClick={AddStep}>
                +
              </button>
            </div>
          </div>
          <br />
          <br />

          <div className={styles.flexStyling}>
            <div className={styles.categoryStyling}>
              <h3>category</h3>
              <select
                onChange={
                  (handleCategoryChange,
                    event => setAddCategory(event.target.value))
                }
                value={addCategory}
              >
                <option disabled selected value="placeholder">
                  pick category
                </option>
                <option value="drinks">drinks</option>
                <option value="food">food</option>
              </select>
            </div>
            <br />
            <br />

            <div className={styles.dateStyling}>
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
            </div>
          </div>
          <div className={styles.submitButtonStyling}>
            <button
              type="submit"
              disabled={!addTitle || !addCategory || !addDate}
            >
              add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
