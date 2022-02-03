import recipeData from "../recipeData/Recipe-data.json";

export default function RandomizerButton() {
  const allRecipes = recipeData;
  const random = Math.floor(Math.random() * allRecipes.length);
  const showRandomRecipe = allRecipes[random].title;

  console.log(showRandomRecipe);

  return (
    <div>
      <p>{showRandomRecipe}</p>
      <button onClick={RandomizerButton}> shuffle </button>
    </div>
  );
}
