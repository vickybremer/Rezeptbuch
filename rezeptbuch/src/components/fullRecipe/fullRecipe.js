import styles from './fullRecipe.module.css';
//import recipeData from "../recipes/Recipe-data.json"

export default function FullRecipe({ listData, selectedRecipe, closeHandler }) {
    const recipe = listData.filter((item) => item.title === selectedRecipe)
    return (
        <div className={styles.container}>
            <div className={styles.infoBox}>
                <h3>{recipe[0].title}</h3>
                <p>{recipe[0].ingredients}</p>
                <button onClick={closeHandler}>x</button>
            </div>
        </div>
    )
}