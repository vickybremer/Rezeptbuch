import styles from "./Header.css";

export default function Header({ title }) {
  return (
    <div className={styles.headerStyling}>
      <h1 id="header">{title}</h1>
      <hr />
    </div>
  );
}
