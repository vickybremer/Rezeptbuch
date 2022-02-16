import styles from "./Header.module.css";

export default function Header({ title }) {
  return (
    <div className={styles.headerStyling}>
      <h1 id="header">{title}</h1>
    </div>
  );
}
