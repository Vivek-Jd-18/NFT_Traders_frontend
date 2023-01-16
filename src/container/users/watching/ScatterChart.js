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
        tooltip: {
          custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            var data =
              w.globals.initialSeries[seriesIndex].data[dataPointIndex];

            return `
                        <div style="padding:10px;background: #FFFFFF 0% 0% no-repeat padding-box;
                        box-shadow: 0px 0px 30px #00000029;
                        border-radius: 10px;
                        opacity: 1;">
                      <img style="position:absolute" src="https://s2.coinmarketcap.com/static/img/coins/200x200/7647.png" alt="Simply Easy Learning" width="35"
                               height="35">
                      <p style="color:#6C6C6C;font-size:18px;font-weight: bold;margin: 4px 0px 0px 46px;">Mf3rs</p>
                      <p style="color:#6C6C6C;font-weight: normal;margin: 14px 0px 0px 0px;">24hr Floor Price</p>
                      <p style="color:#6C6C6C;font-size:14px;font-weight: bold;margin: 2px 0px 3px 0px;">23.12Eth</p>
                      <div style="background: #D9FAED 0% 0% no-repeat padding-box;
                      border-radius: 11px;
                      opacity: 1;width: 57px;
                      height: 26px;padding: 3px 0px 0px 7px;">
                      <span style="color:#0EB700;font-size:14px;font-weight: bold;">+2.1</span>
                      <img src="https://www.iconpacks.net/icons/3/free-up-arrow-icon-6159.png" width="10" height="10"/>
                      </div>
                      </div>
                      `;
          },
        },
        colors: ["#056BF6", "#D2376A"],
        xaxis: {
          labels: {
            show: false,
          },
          tickAmount: 10,
          min: 0,
          max: 40,
        },
        yaxis: {
          title: {
            show: false,
          },
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
              "https://s2.coinmarketcap.com/static/img/coins/200x200/7647.png",
              "https://variety.com/wp-content/uploads/2022/01/WOW.jpg?w=681&h=383&crop=1",
            ],
            width: 40,
            height: 40,
          },
        },
        legend: {
          labels: {
            useSeriesColors: false,
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
