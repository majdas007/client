import React, {Component} from "react";
import Chart from 'react-apexcharts'
import axios from "axios";


class OfferStat extends Component {


    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: ["Nb Good Day","Nb Good Night","Nb Sad Day","Nb Sad Night"]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: []
                }
            ]
        };
    }
    componentWillMount() {
        axios.get(`https://academicbot.herokuapp.com/history/ScoreTime`).then(response => {
            const res = response.data.data;
            this.setState({series:[{data: [res.goodday,res.goodnight,res.sadday,res.sadnight]}]});

        });


    }

    render() {

        return (

            <React.Fragment>
                <div className="w-75 p-3" >
                    <div className="card card-chart" >
                        <div className="card-header card-header-icon card-header-danger">
                            <div className="card-icon">
                                <i className="material-icons">pie_chart</i>
                            </div>
                            <h4 className="card-title">Satisfaction Client Par Time Zone</h4>
                        </div>
                        <div className="card-body" width="1600px">
                            <Chart options={this.state.options} series={this.state.series} type="bar" width={550} height={320} />
                        </div>
                        <div className="card-footer">

                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default OfferStat;