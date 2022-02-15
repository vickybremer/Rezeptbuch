import React from "react";
import styles from "./Navigation.module.css";
import { motion } from "framer-motion";

export default function Navigation({ nav }) {
  return (
    <div className={styles.navButtons}>
      <div className={styles.nav3Container}>
        <button className={styles.nav3} onClick={() => nav("AddRecipe")}>
          +
        </button>
        <hr />
      </div>
      <footer>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={styles.nav1}
          onClick={() => nav("Randomizer")}
        >
          Can't decide?
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.9 }}
          className={styles.nav2}
          onClick={() => nav("MainSite")}
        >
          My Recipes
        </motion.button>
      </footer>
    </div>
  );
}
