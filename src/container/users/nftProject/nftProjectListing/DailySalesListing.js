import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Spent",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Portfolio Value",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        colors: ["#FF1C2A", "#33DB40"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "15%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
        },
        xaxis: {
          categories: [
            "11 Sep, 2022",
            "11 Sep, 2022",
            "11 Sep, 2022",
            "11 Sep, 2022",
            "11 Sep, 2022",
            "11 Sep, 2022",
            "11 Sep, 2022",
          ],
          labels: {
            show: false,
          },
        },
        yaxis: {
          title: {
            show: false,
          },
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return `<div style="background: #FFFFFF 0% 0% no-repeat padding-box;
                            box-shadow: 0px 0px 30px #00000029;
                            border-radius: 5px;
                            opacity: 1;padding:10px;minwidth: 281px;
                            height: 106px;">
                           <div style="color:#6C6C6C;font-weight: bold;">
                           <span>11 Sep, 2022</span>
                           </div>
                           <div style="display-flex">
                           <span style=" height: 11px;
                           width: 11px;
                           background-color: #FC414D;
                           border-radius: 50%;
                           display: inline-block;"></span>
                           <span style="color:#FC414D;font-weight: bold;">430</span>
                           <span style="font-weight: bold;color:#6C6C6C;">Listed</span>
                           <span style='font-size:23px;color:#0EB700;'>&#8593;</span>
                           <span style='color:#0EB700;'>12%</span>
                           </div>
                           <div>
                           <span style=" height: 11px;
                           width: 11px;
                           background-color: #2CBC20;
                           border-radius: 50%;
                           display: inline-block;"></span>
                           <span style="color:#2CBC20;font-weight: bold;">430</span>
                           <span style="font-weight: bold;color:#6C6C6C;">Sales</span>
                           <span style='font-size:23px;color:#0EB700;'>&#8593;</span>
                           <span style='color:#0EB700;'>12%</span>
                           
                         
                           </div>
                            </div>`;
          },
        },
      },
    };
  }

  render() {
    return (
      <div className="dashboard-chart-scatter-dashBoard-1" id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}
export default ApexChart;
