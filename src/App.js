import styles from "./App.module.scss";

import InputWrapper from "./components/InputWrapper";

const App = () => {
  return (
    <div className={styles.app}>
      <img src="./images/logo.svg" alt="splitter logo" />
      <div className={styles["calc-wrapper"]}>
        <InputWrapper section="bill"></InputWrapper>
        <InputWrapper section="tip"></InputWrapper>
        <InputWrapper section="people"></InputWrapper>
      </div>
    </div>
  );
};

export default App;
