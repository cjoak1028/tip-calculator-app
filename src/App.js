import styles from "./App.module.scss";

const App = () => {
  return (
    <div className={styles.app}>
      <img src="./images/logo.svg" alt="splitter logo" />
      <div className={styles.calculator}>
        <div className={styles["input-group"]}>
          <div className={styles["bill"]}>
            <h6 className={styles["bill__title"]}>Bill</h6>
            <div className={styles["bill__input"]}>
              <img src="./images/icon-dollar.svg" alt="dollar icon" />
              <input type="text"></input>
            </div>
          </div>
          <div className={styles["tip"]}>
            <h6 className={styles["tip__title"]}>Select Tip %</h6>
            <div className={styles["tip-grid"]}></div>
          </div>
          <div className={styles["people"]}>
            <h6 className={styles["people__title"]}>Number of People</h6>
            <div className={styles["people__input"]}>
              <img src="./images/icon-person.svg" alt="dollar icon" />
              <input type="text"></input>
            </div>
          </div>
        </div>
        <div className={styles["output-group"]}></div>
      </div>
    </div>
  );
};

export default App;
