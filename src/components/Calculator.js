import styles from "./Calculator.module.scss";

const Calculator = (prop) => {
  return <div className={styles.calculator}>{prop.children}</div>;
};

export default Calculator;
