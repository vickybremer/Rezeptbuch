import styles from './fullRecipe.module.css';
//import recipeData from "../recipes/Recipe-data.json"

export default function FullRecipe ({individualRecipeData, closeHandler}) {
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3>{individualRecipeData.title}</h3>
                <p>{individualRecipeData.ingredients}</p>
                <button onClick={closeHandler}>x</button>
            </div>
        </div>
    )
}