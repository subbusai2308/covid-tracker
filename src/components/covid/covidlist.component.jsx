import React from 'react';
import Spinner from '../layout/spinner.component';
import CovidCard from './covidcard.component';
import PropTypes from 'prop-types'

const CovidList = ({ covidCases, loading, lastUpdate}) => {
    if(loading) {
      return <Spinner />;
    } else {
      const {confirmed, recovered, death} = covidCases;
      return (
        <div>
           <div style={covidListStyle}>
            <CovidCard name="Confirmed" caseType={confirmed} lastUpdate={lastUpdate}/>
            <CovidCard name="Recovered" caseType={recovered} lastUpdate={lastUpdate}/>
            <CovidCard name="Death" caseType={death} lastUpdate={lastUpdate}/>
          </div>
        </div>
      );
    }
}
const covidListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "1rem",
};

CovidList.propTypes = {
  covidCases: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  lastUpdate: PropTypes.string.isRequired,
};
export default CovidList;
