import React, { useState } from "react";
import Search from "../components/Search";
import AirportItem from "../components/AirportItem";
import AirportView from "../components/AirportView";
import styles from "./airports.module.scss";

import { retrieveAirports, retrieveAirportInfoByCode } from "../services";

const AirportsContainer = () => {
  const [airports, setAirports] = useState([]);
  const [selectedAirportCode, setSelectedAirportCode] = useState("");
  const [displayAirport, setDisplayAirport] = useState({
    heading: "",
    description: ""
  });

  return (
    <div className={styles.airports}>
      <div className={styles.sidebar}>
        <Search endpoint={retrieveAirports} onChange={setAirports} />
        <div>
          {airports.slice(0, 50).map(airport => (
            <AirportItem
              {...airport}
              onClick={() => setSelectedAirportCode(airport.airportCode)}
              key={airport.city + airport.airportCode}
            />
          ))}
        </div>
      </div>
      <div className={styles.content}>
        <AirportView
          endpoint={retrieveAirportInfoByCode}
          code={selectedAirportCode}
          onChange={setDisplayAirport}
          displayAirport={displayAirport}
        />
      </div>
    </div>
  );
};

export default AirportsContainer;
