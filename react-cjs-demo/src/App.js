import logo from "./logo.svg";
import "./App.css";
import { testing, testingNoTsIgnore } from "@snsoft/bundle-test";

function App() {
  const demo = () => {
    try {
      testing();
    } catch (error) {
      console.log(error);
    }
  };

  const demo2 = () => {
    try {
      testingNoTsIgnore();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <button onClick={demo}>Click me</button>
      <button onClick={demo2}>Click me no ts ignore</button>
    </div>
  );
}

export default App;
