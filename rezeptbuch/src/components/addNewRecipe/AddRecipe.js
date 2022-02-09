import Header from "../header/Header.js";
import useLocalStorage from "react-use-localstorage";
import { useState, useEffect } from "react";
import "./AddRecipe.module.css";


export default function AddRecipe() {
    const [localRecipe, setLocalRecipe] = useLocalStorage("recipes", {});

    //Titel
    const [addTitle, setAddTitle] = useState("");

    //Zutaten
    const [addIngredients, setAddIngredients] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState("");

    //Schritte
    const [addSteps, setAddSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState("");

    //Datum
    const [addDate, setAddDate] = useState("");

    //Liste mit allen neuen Rezepten
    const [newRecipes, setNewRecipes] = useState([]);


    //Alle gespeicherten Rezepte bei Reload noch da
    useEffect(() => {
        const savedRecipes = JSON.parse(localRecipe);
        if (savedRecipes) {
            setNewRecipes(savedRecipes);
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
            //   id: addId,
            title: addTitle,
            ingredients: addIngredients,
            steps: addSteps,
            date: addDate
        };

        //... = kurz für map Funktion
        setNewRecipes([...newRecipes, newRecipe]);

        //Daten werden gewiped
        setAddTitle("");
        setAddIngredients("");
        setAddSteps("");
        setAddDate("");
    };

    //Neue Zutat
    const AddIngredient = event => {
        event.preventDefault();

        const newIngredient = currentIngredient;

        //... = kurz für map Funktion
        //alle Ingredients mappen, die schon drin sind
        setAddIngredients([...addIngredients, newIngredient]);
        setCurrentIngredient("");
    };

    //Zutat löschen
    // const DeleteIngredient = (id) => {
    //     const filteredIngredients = [...newRecipes].filter((addIngredients) => addIngredients.id !== id);
    //     setAddIngredients(filteredIngredients);
    // }

    //Neuer Schritt
    const AddStep = event => {
        event.preventDefault();

        const newStep = currentStep;

        //... = kurz für map Funktion
        //alle Ingredients mappen, die schon drin sind
        setAddSteps([...addSteps, newStep]);
        setCurrentStep("");
    };

    //Schritt löschen
    // const DeleteStep = (id) => {
    //     const filteredSteps = [...newRecipes].filter((addSteps) => addSteps.id !== id);
    //     setAddSteps(filteredSteps);
    // }

    return (
        <>
            <Header title="Add new Recipe" />
            <div>
                <form onSubmit={AddRecipe}>
                    <h3>Title</h3>
                    <input
                        onChange={event => setAddTitle(event.target.value)}
                        value={addTitle}
                    ></input>
                    <br />
                    <br />

                    <h3>Ingredients</h3>
                    <h5>{addIngredients.map(item => (
                        <div key={item}>{item}
                            {/* <button onClick={() => DeleteIngredient(addIngredients.id)}>delete</button> */}
                        </div>
                    ))}</h5>
                    <input
                        onChange={event => setCurrentIngredient(event.target.value)}
                        value={currentIngredient}
                    ></input>
                    <button onClick={AddIngredient}>+</button>
                    <br />
                    <br />

                    <h3>Steps</h3>
                    <h5>{addSteps.map(item => (
                        <div key={item}>{item}
                            {/* <button onClick={() => DeleteStep(addSteps.id)}>delete</button>  */}
                        </div>
                    ))}</h5>
                    <input
                        onChange={event => setCurrentStep(event.target.value)}
                        value={currentStep}
                    ></input>
                    <button onClick={AddStep}>+</button>
                    <br />
                    <br />

                    <h3>Date</h3>
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


