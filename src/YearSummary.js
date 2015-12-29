import React, {Component} from 'react';
import {compose, reduceObj, groupBy, id, map, pair} from 'huan';
import _ from 'lodash';

var format = compose(pair, map(v => v.length), groupBy(id));

export default class YearSummary extends Component {
  shouldComponentUpdate(newProps) {
    return !_.isEqual(newProps.years, this.cachedYears);
  }
  componentDidUpdate() {
    this.cachedYears = this.props.years;
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
          return [item[0], item[1]];
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
