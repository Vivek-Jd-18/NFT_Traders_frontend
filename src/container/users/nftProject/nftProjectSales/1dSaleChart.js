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
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#009DFF"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "8px",

            borderRadius: 4,
          },
        },
        dataLabels: {
          enabled: false,
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
                            height: 83px;">
                           <div style="color:#6C6C6C;font-weight: bold;">
                           <span>11 Sep, 2022</span>
                           </div>
                           <div >
                           <span style=" height: 11px;
                           width: 11px;
                           background-color: #1B9DFC;
                           border-radius: 50%;
                           display: inline-block;"></span>
                           <span style="color:#1B9DFC;font-weight: bold;">430</span>
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
