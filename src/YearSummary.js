import React, {Component} from 'react';
import {compose, reduceObj, groupBy, id, map} from 'huan';

var format = compose(reduceObj((carry, v) => carry.concat([{name: v.key, value: v.value.length}]), []), groupBy(id));

export default class YearSummary extends Component {
  componentDidUpdate() {
    new Highcharts.Chart({
      chart: {
        renderTo: this.yearChart,
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
        data: format(this.props.years).map(item => {
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
