import React from "react";
import PropTypes from "prop-types";
import Car from "./Car";
const CarsList = props => {
  return (
    <div>
      {props.cars.map(car => (
        <Car key={car.id} car={car} />
      ))}
    </div>
  );
};

// type check and validate the type of data being passed To this component

CarsList.propTypes = {
  cars: PropTypes.array.isRequired
};

export default CarsList;
