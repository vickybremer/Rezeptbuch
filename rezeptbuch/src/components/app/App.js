import './App.css';
import {recipes} from '../../Recipes.js';

function App() { 
    console.log("this is a test");
    console.log(recipes[0].category);
    return(
    <div>
        <h3>{recipes[1].steps[0]}</h3>
    </div>
    ); 
}

export default App;
