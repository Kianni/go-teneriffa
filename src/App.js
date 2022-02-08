import NestedList from "./components/NestedList";
import { Transfer } from "./components/Transfer";

const defaultData = [
  {
    date: "17.6",
    id: "1000",
    time: { departure: "8.30", arrival: "11.00" },
    location: {
      departure_point: "Stockholm",
      arrival_point: "Praga",
    },
    vehicle: "plane",
    additional_info: "Lufthansa",
  },
];

function App({ travelData = defaultData }) {
  return (
    <>
      <h1>План путешествия</h1>
      <NestedList data={travelData} />
    </>
  );
}

export default App;
