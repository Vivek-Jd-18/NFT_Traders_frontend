import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Mf3rs",
          data: [
            [16.4, 5.4],
            [21.7, 4],
            [25.4, 3],
            [19, 2],
            [32, 10],
          ],
        },
        {
          name: "Mf3rs",
          data: [
            [6.4, 5.4],
            [11.7, 4],
            [15.4, 3],
            [9, 2],
            [10.9, 11],
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: "scatter",
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
        colors: ["#056BF6", "#D2376A"],
        tooltip: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          tickAmount: 10,
          min: 0,
          max: 40,
        },
        yaxis: {
          tickAmount: 7,
        },
        markers: {
          size: 20,
        },
        fill: {
          type: "image",
          opacity: 1,
          image: {
            src: [
              "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BSicon_lHST_blue.svg/1200px-BSicon_lHST_blue.svg.png",
            ],
            width: 40,
            height: 40,
          },
        },
        legend: {
          labels: {
            useSeriesColors: true,
          },
          markers: {
            customHTML: [
              function () {
                return "";
              },
              function () {
                return "";
              },
            ],
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
          type="scatter"
          height={350}
        />
      </div>
    );
  }
}
export default ApexChart;
