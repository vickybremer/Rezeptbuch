import Header from '../header/Header.js'


var testarray = ["1", "2", "3", "4"];
var rand = testarray[Math.floor(Math.random() * testarray.length)];


export default function Randomizer() {
    return (
        <>
            <Header title="Randomizer" />
            <h3> randomizer site </h3>
            <h3> {rand} </h3>
        </>
    );
}