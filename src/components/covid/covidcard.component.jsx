import React from 'react';
import CountUp from 'react-countup';
import './covid.styles.css';
import PropTypes from 'prop-types'
const CovidCard = ({name, caseType, lastUpdate}) => {
    return (
      <div className={`${name} card text-center`}>
        <h1>{name}</h1>
        <h3><CountUp start={0} end={caseType} duration={3}/></h3>
        <p>{new Date(lastUpdate).toDateString()}</p>
      </div>
    )
}

CovidCard.propTypes = {
  name: PropTypes.string.isRequired,
  caseType: PropTypes.number,
  lastUpdate: PropTypes.string.isRequired,
}

export default CovidCard;
