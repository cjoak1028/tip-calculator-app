import styles from "./App.module.scss";

import Input from "./components/Input";

const App = () => {
  return (
    <div className={styles.app}>
      <img src="./images/logo.svg" alt="splitter logo" />
      <div className={styles["calc-wrapper"]}>
        <Input type="bill"></Input>
        <Input type="tip"></Input>
        <Input type="people"></Input>
      </div>
    </div>
  );
};

export default App;
