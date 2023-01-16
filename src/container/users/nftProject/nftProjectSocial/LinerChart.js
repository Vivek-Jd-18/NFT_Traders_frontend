import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },

        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
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
               <span style="color:#1A9DFC;font-weight: bold;">430</span>
               <span style="font-weight: bold;color:#6C6C6C;">Volume</span>
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
      <div id="chart">
        <ReactApexChart
          className="dashboard-chart-scatter"
          options={this.state.options}
          series={this.state.series}
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default ApexChart;
