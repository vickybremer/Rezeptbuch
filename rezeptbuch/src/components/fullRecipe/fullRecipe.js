import styles from "./fullRecipe.module.css";
//import recipeData from "../recipes/Recipe-data.json"

export default function FullRecipe({ listData, selectedRecipe, closeHandler }) {
  //die Rezepte werden nach dem Titel gefiltert (.filter = Array)
  const recipe = listData.filter(item => item.title === selectedRecipe);

  //jedes div muss bei map ein key bekommen
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3>{recipe[0].title}</h3>
        <p>
          {recipe[0].ingredients.map(item => (
            <div> {item} </div>
          ))}
        </p>
        <p>
          {recipe[0].steps.map(item => (
            <div> {item} </div>
          ))}
        </p>
        <p>{"created on: " + recipe[0].date}</p>
        <button onClick={closeHandler}> close </button>
      </div>
    </div>
  );
}
