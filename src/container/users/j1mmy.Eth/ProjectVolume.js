import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ProjectVolume = ({ height }) => {

    const option = {
        grid: {
            left: '6%',
            bottom: '10%',
            right: '1%',
        },
        legend: {
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                color: "black",
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        color: [
            "#009DFF",
            "#33DB40",
        ],
        barMaxWidth: '10px',
        tooltip: {},
        dataset: {
            source: [
                ['Month', '', '', '', ''],
                ['Jan', 2200],
                ['Feb', 800],
                ['Mar', 700],
                ['Apr', 1500],
                ['May', 2450],
                ['June', 1700],
            ],  
        },
        xAxis: {
            type: 'category',
            axisLine: {
                show: false,
            },
            splitLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: "black",
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: "black",
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: "black",
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {
                type: 'bar',
                itemStyle: {
                    borderRadius: [10, 10, 0, 0],
                },
            },
            {
                type: 'bar',
                itemStyle: {
                    borderRadius: [10, 10, 0, 0],
                },
            },
        ],
    }

    return <ReactEcharts className="dashboard-chart" style={{ height: height }} option={option} />
}

export default ProjectVolume
