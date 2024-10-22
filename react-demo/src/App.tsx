import { testing, testingNoTsIgnore } from "@snsoft/bundle-test";

function App() {
  const demo = () => {
    testing();
  };

  const demo2 = () => {
    testingNoTsIgnore();
  };

  return (
    <>
      <button onClick={demo}>Click me</button>
      <button onClick={demo2}>Click me no ts ignore</button>
    </>
  );
}

export default App;
