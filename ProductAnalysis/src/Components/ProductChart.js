import React from "react";
import Chart from "react-apexcharts";

export default function ProductChart(props) {
    return (
        <div className="app">
            <div className="row">
                <div className="mixed-chart">
                    <Chart 
                        options={
                          props.chartOptions.options
                        }
                        series={
                          props.chartOptions.series
                        }
                        type="bar"
                        width="500"/>
                </div>
            </div>
        </div>
    )
}
