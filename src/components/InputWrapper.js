import styles from "./InputWrapper.module.scss";

const InputWrapper = (prop) => {
  // Function to retrieve title based on input section
  const retrieveTitleBySection = (section) => {
    let title;
    if (section === "bill") {
      title = "Bill";
    } else if (section === "tip") {
      title = "Select Tip %";
    } else {
      title = "Number of People";
    }
    return title;
  };

  return (
    <div className={styles["input-wrapper"]}>
      <h6 className={styles["input-wrapper__title"]}>
        {retrieveTitleBySection(prop.section)}
      </h6>
      <div>{prop.children}</div>
    </div>
  );
};

export default InputWrapper;
