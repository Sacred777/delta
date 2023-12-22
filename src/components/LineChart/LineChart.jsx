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

      tickWidth: 5,
      tickLength: 5,
    },

    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },

      tickAmount: 6,
      tickWidth: 5,
      tickLength: 5,

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
    <div style={{width: '70%', margin: '0 auto'}}>
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
        containerProps={{ style: { height: '240px' } }}
      />
    </div>
  )
}
