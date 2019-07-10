import React from "react";
import style from "./airportItem.module.scss";

export default ({ country, city, airportCode, countryCode, onClick }) => {
  return (
    <button className={style.airportItem} onClick={onClick}>
      <div>{country}</div>
      <div>{city}</div>
      <div>{countryCode}</div>
      <div>{airportCode}</div>
    </button>
  );
};
