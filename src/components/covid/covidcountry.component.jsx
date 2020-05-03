import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

const CovidCountry = ({countries, handleChange}) => {
        return <Select onChange={handleChange} options={countries} placeholder="Select Country"/>
}

CovidCountry.propTypes = {
  countries: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default CovidCountry;
