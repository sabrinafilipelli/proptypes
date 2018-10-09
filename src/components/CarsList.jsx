import React from "react";
import PropTypes from "prop-types";
import cars from "../Cars";
import Car from "./Car";
const CarsList = props => {
  // presentational component ==> dumb, stateless
  return (
    <div>
      {props.cars.map((item, index) => {
        return (
          <div key={index} className={item.card}>
            <h1> {item.make} </h1>
            <h2>{item.model} </h2>
            <h2>{item.color} </h2>
          </div>
        );
      })}
    </div>
  );
};

// type check and validate the type of data being passed To this component

CarsList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarsList;
