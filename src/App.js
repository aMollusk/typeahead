import React from "react";
import "./App.css";
import { retrieveAirports, retrieveAirportInfoByCode } from "./services";

retrieveAirports("sydney").then(airports => {
  console.log(airports);
});

retrieveAirportInfoByCode("SYD").then(data => {
  console.log(data);
});

function App() {
  return <div>Your app </div>;
}

export default App;
