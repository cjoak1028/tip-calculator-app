import "./App.scss";
import Calculator from "./components/Calculator";

const App = () => {
  return (
    <div className="app">
      <img src="./images/logo.svg" alt="splitter logo" />
      <Calculator>hello</Calculator>
    </div>
  );
};

export default App;
