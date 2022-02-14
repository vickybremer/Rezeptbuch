import React from "react";
import styles from "./Navigation.module.css";

export default function Navigation({ nav }) {
  return (
    <div className={styles.navButtons}>
      <div className={styles.nav3Container}>
        <button className={styles.nav3} onClick={() => nav("AddRecipe")}>
          +
        </button>
      </div>
      <footer>
        <button className={styles.nav1} onClick={() => nav("Randomizer")}>
          Can't decide?
        </button>
        <button className={styles.nav2} onClick={() => nav("MainSite")}>
          My Recipes
        </button>
      </footer>
    </div>
  );
}
