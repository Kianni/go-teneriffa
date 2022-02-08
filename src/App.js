import NestedList from "./components/NestedList";
import { Transfer } from "./components/Transfer";
import DATA from "./data";

function App() {
  return (
    <>
      <h1>План путешествия</h1>
      <NestedList data={DATA} />
    </>
  );
}

export default App;
