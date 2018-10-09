import React from "react";
import PropTypes from "prop-types";

import { checkServerIdentity } from "tls";
import CarsList from "./CarsList";

const Car = ({ props }) => <div className="Car" />;

Car.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    color: PropTypes.string
  })
};
export default Car;
