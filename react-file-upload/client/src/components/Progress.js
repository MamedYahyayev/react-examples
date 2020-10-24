import React from "react";
import PropTypes from "prop-types";

const Progress = ({ percentage }) => {
  return (
    <div class="progress">
      <div
        class="progress-bar bg-info"
        role="progressbar"
        style={{ width: `${percentage}%` }}
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {percentage}%
      </div>
    </div>
  );
};

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
