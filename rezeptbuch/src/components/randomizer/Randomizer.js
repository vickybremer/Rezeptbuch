import Header from "../header/Header.js";
import RandomizerButton from "./RandomizerButton.js";
import "./Randomizer.module.css";

export default function Randomizer() {
  return (
    <div>
      <Header title="We'll choose for you" />
      <RandomizerButton />
    </div>
  );
}
