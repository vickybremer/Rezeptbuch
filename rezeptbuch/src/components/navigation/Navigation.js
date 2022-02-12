import React from "react";
import styles from "./Navigation.module.css";

export default function Navigation({ nav }) {
  return (
    <div className={styles.navButtons}>
      <header>
        <button className={styles.nav3} onClick={() => nav("AddRecipe")}>
          +
        </button>
      </header>
      <footer>
        <button className={styles.nav1} onClick={() => nav("Randomizer")}>
          Randomizer
        </button>
        <button className={styles.nav2} onClick={() => nav("MainSite")}>
          My Recipes
        </button>
      </footer>
    </div>
  );
}
