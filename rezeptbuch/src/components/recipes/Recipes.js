const recipeData = [{
        "id": 0,
        "title": "Thai Curry",
        "ingredients": ["100g Rice", "400ml Coconut Milk", "Your favourite vegetables", "30g Cashews", "1Tbsp. Curry Paste"],
        "steps": ["1. Cook Rice", "2. Chop vegetables", "3. Put vegetable in pan", "4. Add Coconut Milk and Seasoning"],
        "category": "dinner",
        "date": "12.03.2022"
    },
    {
        "id": 1,
        "title": "Mango Pineapple Sorbet",
        "ingredients": ["365g Pineapple diced", "250g Mango diced", "200ml Water", "200g Sugar"],
        "steps": ["1. Combine sugar, water, pineapple and mangoes in pot over medium heat", "2. Combine with syrup", "3. freeze"],
        "category": "dessert",
        "date": "29.06.2034"
    },
    {
        "id": 2,
        "title": "Tzatziki",
        "ingredients": ["400g plain yogurt", "1 cucumber", "2 gloves of garlic", "Juice of half a lemon", "Salt", "Pepper"],
        "steps": ["1. Shred the cucumber", "2. Squeeze water out of cucumber", "3. Mix everything in a bowl"],
        "category": "side",
        "date": "15.07.2021"
}]

export default function Recipes () {
    console.log("This is a test for Recipe Function");

    //Button OnClick Test
    const testClick = () => {
        console.log("hallo");
    }

    //Liste der Rezepttitel wird erstellt (sind Buttons)
    const recipeList = recipeData.map(recipe => 
    <li key={recipe.id}>
        <button onClick={testClick}>{recipe.title}</button>
    </li>)   


    //Liste wird aufgerufen
    return(
        <div>
            <h3>{recipeList}</h3>
        </div>
    ); 
}