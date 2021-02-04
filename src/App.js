import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import MainWeather from './containers/MainWeather/MainWeather';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <MainWeather/>
        </Layout>
      </div>
    );
  }
}

export default App;