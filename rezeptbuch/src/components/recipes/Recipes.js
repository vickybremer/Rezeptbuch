const recipes = [{
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
}]

export default function Recipes () {
    console.log("This is a test for Recipe Function");

    const theRecipe = recipes.map(singleRecipe => 
    <li key={singleRecipe.id}>{singleRecipe.title}</li>)   

    return(
        <div>
            <ul>{theRecipe}</ul>
        </div>
    // <div>
    //     <h3>{recipes[0].title}</h3>
    // </div>
    ); 
}