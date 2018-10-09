import React from "react";
import PropTypes from "prop-types";

import { checkServerIdentity } from "tls";

const Car = props => {
  console.log(props);
  return <div>Car</div>;
};

Car.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    color: PropTypes.string
  })
};
export default Car;
