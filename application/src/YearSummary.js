import React, {Component} from 'react';
import * as util from './util';

export default class YearSummary extends Component {
  format() {
    return util.entry(util.group(this.props.years), 'count');
  }
  componentDidUpdate() {
    new Highcharts.Chart({
      chart: {
        renderTo: this.yearChart.getDOMNode(),
        type: 'column'
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Count of journals'
        }
      },
      title: '',
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Journals published <b>{point.y}</b>'
      },
      series: [{
        name: 'Year',
        data: this.format().map(item => {
          return [item.name, item.value];
        }),
        events: {
          click: function(ev) {
            this.props.onSeriesClick(ev.point.name);
          }.bind(this)
        },
        dataLabels: {
          enabled: false,
          color: '#FFFFFF',
          align: 'top',
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    });
  }
  render() {
    return (
      <div ref={ref => this.yearChart = ref} style={{height: '250px'}}></div>
    )
  }
};
