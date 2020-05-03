import React, { Component, Fragment } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/navbar.component';
import CovidList from './components/covid/covidlist.component';
import CovidCountry from './components/covid/covidcountry.component';
class App extends Component {
  state = {
    covidCases: {},
    loading: false,
    lastUpdate:'',
    countries: [],
    country: ''
  }
  async componentDidMount() {
    this.setState({loading: true});
    let covidRes = await (await axios.get('https://covid19.mathdro.id/api')).data;
    let countryRes = await (await axios.get('https://covid19.mathdro.id/api/countries')).data;
    let { confirmed, recovered, deaths, lastUpdate } = covidRes;
    let countries = countryRes.countries.map(country => {
      return { 
        value:country.name,
        label: country.name
      }
    });
    let covidCases = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      death: deaths.value,
    }
    this.setState({ loading: false, lastUpdate:lastUpdate, covidCases: covidCases, countries: countries});
  }
  handleChange = async (country) => {
     this.setState({country: country.value, loading: true});
     let covidRes = await (await axios.get(`https://covid19.mathdro.id/api/countries/${country.value}`)).data;
     let { confirmed, recovered, deaths, lastUpdate} = covidRes;
     let covidCases = {
      confirmed: confirmed.value,
      recovered: recovered.value,
      death: deaths.value,
      lastUpdate
    }
    this.setState({ loading: false, lastUpdate:lastUpdate,covidCases: covidCases});
  }
  render() {
    const {loading, covidCases, countries, lastUpdate} = this.state;
    return (
      <Fragment>
        <Navbar />
        <div className="container">
        <CovidList loading={loading} covidCases={covidCases} lastUpdate={lastUpdate}/>
        <CovidCountry countries={countries} handleChange={this.handleChange}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
