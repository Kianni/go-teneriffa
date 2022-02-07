import { Transfer } from "./components/Transfer";

function App() {
  const DATA = [
    {
      date: "18.2",
      id: "1",
      time: { departure: "15.30", arrival: "18.00" },
      location: {
        departure_point: "Санкт-Петербург",
        arrival_point: "Хельсинки",
      },
      vehicle: "train",
      additional_info: "Allegro",
    },
    {
      date: "18.2",
      id: "2",
      time: { departure: "after 18.00", arrival: "two hours later" },
      location: { departure_point: "Helsinki", arrival_point: "Turku" },
      vehicle: "bus",
      additional_info: "Onnibus",
    },
    {
      date: "19.02",
      id: "3",
      time: { departure: "7.00", arrival: "13.45" },
      location: { departure_point: "Helsinki-Vanta", arrival_point: "Madrid" },
      vehicle: "plain",
      additional_info: "change in Amsterdam, night in Madrid",
    },
    {
      date: "20.02",
      id: "4",
      time: { departure: "15.00", arrival: "16.50" },
      location: { departure_point: "Madrid", arrival_point: "Teneriffa" },
      vehicle: "plain",
      additional_info: "week of adventures and rest",
    },
    {
      date: "27.02",
      id: "5",
      time: { departure: "16.15", arrival: "20.00" },
      location: { departure_point: "Teneriffa", arrival_point: "Madrid" },
      vehicle: "plain",
      additional_info: "night in Madrid",
    },
    {
      date: "28.02",
      id: "6",
      time: { departure: "16.50", arrival: "23.55" },
      location: { departure_point: "Madrid", arrival_point: "Helsinki" },
      vehicle: "plain",
      additional_info: "back to Turku",
    },
    {
      date: "1.3",
      id: "7",
      time: { departure: "14.57", arrival: "19.27" },
      location: {
        departure_point: "Helsinki",
        arrival_point: "Санкт-Петербург",
      },
      vehicle: "train",
      additional_info: "",
    },
  ];
  return (
    <ul>
      {DATA.map((transfer) => (
        <Transfer details={transfer} />
      ))}
    </ul>
  );
}

export default App;
