import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './chartComponents/Chart';
class App extends Component {

  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount() {
    this.getChartData();
  }


  getChartData(){
    this.setState({
      chartData:{
        labels:['rajini','kamal','vijay','ajith','dhanush'],
        datasets:[
          {
            label:'population',
            data:[
              12345,
              2440,
              10054,
              5304,
              9500
            ],
            backgroundColor:[
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1

          }
        ]

      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Chart chartData={this.state.chartData} location="chennai"/>
      </div>
    );
  }
}

export default App;
