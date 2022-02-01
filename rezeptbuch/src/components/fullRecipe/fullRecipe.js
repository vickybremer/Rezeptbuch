import styles from './fullRecipe.module.css';
import recipeData from "../recipes/Recipe-data.json"

export default function FullRecipe ({closeHandler}) {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3>{recipeData.title}</h3>
                <p>{recipeData.ingredients}</p>
                <button onClick={closeHandler}>x</button>
            </div>
        </div>
    )
}