import React from "react";
import Search from "../components/Search";
import AirportItem from "../components/AirportItem";
import AirportView from "../components/AirportView";
import styles from "./airports.module.scss";

import { retrieveAirports, retrieveAirportInfoByCode } from "../services";

class Airports extends React.Component {
  state = {
    selectedAirportCode: ""
  };

  selectAirport = code =>
    this.setState({
      selectedAirportCode: code
    });

  render() {
    return (
      <div className={styles.main}>
        <div className={styles.sidebar}>
          <Search endpoint={retrieveAirports}>
            {airports =>
              airports
                .slice(0, 20)
                .map(airport => (
                  <AirportItem
                    {...airport}
                    onClick={() => this.selectAirport(airport.airportCode)}
                    key={airport.city + airport.airportCode}
                  />
                ))
            }
          </Search>
        </div>
        <div className={styles.content}>
          <AirportView
            endpoint={retrieveAirportInfoByCode}
            code={this.state.selectedAirportCode}
          />
        </div>
      </div>
    );
  }
}

export default Airports;
