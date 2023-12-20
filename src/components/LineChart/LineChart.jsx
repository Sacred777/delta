import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import {value as data} from '../../data/revenue.js';

export default function LineChart() {

  const options = {
    title: {
      text: null,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },

    xAxis: {
      labels: {
        enabled: false,
      },
      tickWidth: 8,
      tickLength: 8,
    },

    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },

      tickAmount: 6,
      tickWidth: 8,
      tickLength: 8,

      lineColor: 'black',
      lineWidth: 1,

      gridLineWidth: 0,


    },

    series: [{
      type: 'line',
      name: 'Выручка',
      data,
      showInLegend: false,
      color: '#037d50',
    }],

  }


  return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
  )
}
