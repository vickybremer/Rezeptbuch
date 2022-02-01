import './App.css';
import Recipes from '../recipes/Recipes.js'
import Header from '../header/Header.js'

function App() { 
    return(
    <div>
        <Header title="Recipes"/>
        <Recipes/>
    </div>
    ); 
}

export default App;
