import React, {Component} from 'react'   ;
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData:props.chartData

            }
        }

    static defaultProps = {
        displayTitle : true,
        displayLegend : true,
        legendPostion:'right',
        location :'City'
    }


    render(){
        return(
            <div className ="chart" >
            <Bar
                data={this.state.chartData}
                width={100}
                height={50}
                options={{
                    title: {
                        display: true,
                        text: 'best tamil actors in '+this.props.location,
                        fontSize:25
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        labels: {
                            fontColor: '#000'
                        }

                    }
                }}
                />
                <Line
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        title: {
                            display: true,
                            text: 'best tamil actors in '+this.props.location,
                            fontSize:25
                        },
                        legend: {
                            display: true,
                            position: 'right',
                            labels: {
                                fontColor: '#000'
                            }

                        }
                    }}
                />
            </div>
            )
    }
}

export default Chart;