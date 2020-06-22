import React, { Component, Fragment } from 'react'
import { Line } from 'react-chartjs-2';
const data = {
  labels: [],
  datasets: [{
      label: 'Trend',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(26,187,156,0.1)',
      borderColor: 'rgba(26,187,156,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(26,187,156,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(26,187,156,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: []
    }]
};
export default class TrendGraph extends Component {
  constructor(props){
      super(props)
      this.state = {
        chart: data    
      }
  }
  componentDidMount(){
    this.setState({
      chart: {
        ...this.state.chart,
        labels: ['Jun-19', 'Jul-19', 'Aug-19' ,'Sep-19' ,'Oct-19' , 'Nov-19' , 'Dec-19' ,'Jan-20', 'Feb-20', 'Mar-20', 'Apr-20', 'May-20' ],
        datasets: [ {
          ...this.state.chart.datasets[0],
          data: [80, 74, 88, 82, 72, 70, 70 ,78, 69, 80, 81, 86 ]
        }]
      }
    })
  }
  render() {
    return(
      <Fragment>
       <Line data={this.state.chart} />
          
      </Fragment>
    )
  }
}


