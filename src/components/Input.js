import styles from "./Input.module.scss";

const Input = (prop) => {
  // Function to retrieve title based on input type
  const retrieveTitleByType = (type) => {
    let title;
    if (type === "bill") {
      title = "Bill";
    } else if (type === "tip") {
      title = "Select Tip %";
    } else {
      title = "Number of People";
    }
    return title;
  };

  const retrieveContentByType = () => {};

  return (
    <div className={styles["input-wrapper"]}>
      <h6 className={styles["input-wrapper__title"]}>
        {retrieveTitleByType(prop.type)}
      </h6>
      <div>{retrieveContentByType(prop.type)}</div>
    </div>
  );
};

export default Input;
