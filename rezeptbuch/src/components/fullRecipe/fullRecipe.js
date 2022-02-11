import styles from "./fullRecipe.module.css";
//import recipeData from "../recipes/Recipe-data.json"

export default function FullRecipe({ listData, selectedRecipe, closeHandler }) {
  //die Rezepte werden nach dem Titel gefiltert (.filter = Array)
  const recipe = listData.filter(item => item.title === selectedRecipe);

  //evtl. automatisch schon 1., 2., 3. vorher hinzufügen (bei steps)
  //Key = item? Reicht das? Auf ID kann man mit item nicht zugreifen
  return (
    <div className={styles.container}>
      <div className={styles.infoBox}>
        <h3>{recipe[0].title}</h3>
        <h5>
          {recipe[0].ingredients.map(item => (
            <div key={item.id}> {item.id} </div>
          ))}
        </h5>
        <h5>
          {recipe[0].steps.map(item => (
            <li>
              <div key={item.id}> {item.id} </div>
            </li>
          ))}
        </h5>
        <h5>{"created on: " + recipe[0].date}</h5>
        <button onClick={closeHandler}> close </button>
      </div>
    </div>
  );
}
