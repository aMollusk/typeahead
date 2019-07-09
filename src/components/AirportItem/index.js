import React from "react";
import style from "./airportItem.module.scss";

export default ({ country, city, airportCode, countryCode, onClick }) => {
  return (
    <div
      className={style.airportItem}
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      <div>{country}</div>
      <div>{city}</div>
      <div>{countryCode}</div>
      <div>{airportCode}</div>
    </div>
  );
};
