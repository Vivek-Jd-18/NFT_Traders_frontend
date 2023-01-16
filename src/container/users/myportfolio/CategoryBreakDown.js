import React from "react";
import { useTheme } from "@mui/system";
import ReactEcharts from "echarts-for-react";

const DoughnutChart = ({ height, color = [] }) => {
  const theme = useTheme();

  const option = {
    legend: {
      show: true,
      itemGap: 20,
      icon: "circle",
      bottom: 0,
      textStyle: {
        color: "#6C6C6C",
        fontSize: 13,
        fontFamily: "roboto",
      },
    },
    tooltip: {
      show: true,
      trigger: "item",
      padding: 0,
      borderColor: "#fff",
      formatter: function (params) {
        return `<div style="background: #FFFFFF 0% 0% no-repeat padding-box;
                box-shadow: 0px 0px 30px #00000029;
                border-radius: 5px;
                opacity: 1;padding:10px;minwidth: 281px;
                height: 83px;">
               <div style="color:#6C6C6C;font-weight: bold;">
               <span>Holder Time</span>
               </div>
               <div >
               <span style=" height: 11px;
               width: 11px;
               background-color: #1B9DFC;
               border-radius: 50%;
               display: inline-block;"></span>
               <span style="color:#1B9DFC;font-weight: bold;">Under 30 Days</span>
               <span style='color:#1B9DFC;'>33%</span>
               </div>
                </div>`;
      },
    },
    xAxis: [
      {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],

    series: [
      {
        name: "Traffic Rate",
        type: "pie",
        radius: ["45%", "72.55%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        hoverOffset: 5,
        stillShowZeroSum: false,
        label: {
          normal: {
            show: false,
            position: "center", // shows the description data to center, turn off to show in right side
            textStyle: {
              color: "#6C6C6C",
              fontSize: 13,
              fontFamily: "roboto",
            },
            formatter: "",
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: "14",
              fontWeight: "normal",
              // color: "rgba(15, 21, 77, 1)"
            },
            formatter: "",
          },
        },
        labelLine: {
          normal: {
            show: false,
          },
        },
        data: [
          {
            value: 65,
            name: "Google",
          },
          {
            value: 20,
            name: "Facebook",
          },
          { value: 15, name: "Others" },
        ],
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      },
    ],
  };

  return (
    <ReactEcharts
      className="dashboard-chart"
      style={{ height: height }}
      option={{
        ...option,
        color: [...color],
      }}
    />
  );
};

export default DoughnutChart;
