import styles from './fullRecipe.module.css';
//import recipeData from "../recipes/Recipe-data.json"

export default function FullRecipe({ listData, selectedRecipe, closeHandler }) {
    //die Rezepte werden nach dem Titel gefiltert (.filter = Array)
    const recipe = listData.filter((item) => item.title === selectedRecipe)

    // const test = recipe[0].ingredients.join("\n");
    // const bla = test.split('');

    // test.forEach(function (element) {
    // });

    // const test = recipe[0].ingredients

    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3>{recipe[0].title}</h3>
                <p>{recipe[0].ingredients.join("\n")}</p>
                <p>{recipe[0].steps}</p>
                <p>{"created on: " + recipe[0].date}</p>
                <button onClick={closeHandler}> close </button>
            </div>
        </div>
    )
} 