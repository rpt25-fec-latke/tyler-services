import React from 'react';
import Chart from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { ChartContainer, MainReviewListChartContainer, MainReviewListChart, RecentReviewListChartContainer, RecentReviewListChart } from '../styled';

class ReveiwStatsCharts extends React.Component {
  constructor() {
    super();
    this.mainReviewsChartReference = React.createRef();
    this.recentReviewsChartReference = React.createRef();
  }

  render() {
    return (
      <ChartContainer>
        <MainReviewListChartContainer>
          <Bar
            ref={this.mainReviewsChartReference}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#66c0f4',
                  },
                  gridLines: {
                    display: false,
                  },
                  stacked: true,
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'white',
                    callback: (label) => {
                      switch (label) {
                        default:
                          return null;
                        case 0:
                          return 0;
                        case 1:
                          return 1;
                        case 2:
                          return 2;
                        case 3:
                          return 3;
                        case 4:
                          return 4;
                        case 5:
                          return 5;
                        case 6:
                          return 6;
                        case 7:
                          return 7;
                        case 8:
                          return 8;
                        case 9:
                          return 9;
                        case 10:
                          return 10;
                        case 11:
                          return 11;
                        case 12:
                          return 12;
                        case 13:
                          return 13;
                        case 14:
                          return 14;
                        case 15:
                          return 15;
                        case 16:
                          return 16;
                        case 17:
                          return 17;
                        case 18:
                          return 18;
                        case 19:
                          return 19;
                        case 20:
                          return 20;
                      }
                    },
                  },
                  gridLines: {
                    display: false,
                  },
                  stacked: true,
                }],
              },
            }}
            data={{
              label: 'dataset 1',
              labels: ['day 1', 'day 2', 'day 3'],
              datasets: [
                {
                  label: 'population',
                  data: [
                    12,
                    13,
                    14,
                  ],
                },
                {
                  label: 'num ppl',
                  data: [
                    -2,
                    -5,
                    -3,
                  ],
                },
              ],
              gridLines: {
                display: false,
              },
            }}
          />
        </MainReviewListChartContainer>
        <RecentReviewListChartContainer>
          <Bar
            ref={this.mainReviewsChartReference}
            options={{
              maintainAspectRatio: false,
              scales: {
                xAxes: [{
                  ticks: {
                    fontColor: '#66c0f4',
                  },
                  gridLines: {
                    display: false,
                  },
                  stacked: true,
                }],
                yAxes: [{
                  ticks: {
                    fontColor: 'white',
                  },
                  gridLines: {
                    display: false,
                  },
                }],
              },
            }}
            data={{
              label: 'dataset 1',
              labels: ['day 1', 'day 2', 'day 3'],
              datasets: [
                {
                  label: 'population',
                  data: [
                    12,
                    13,
                    14,
                  ],
                },
                {
                  label: 'num ppl',
                  data: [
                    -2,
                    -5,
                    -3,
                  ],
                },
              ],
              gridLines: {
                display: false,
              },
              stacked: true,
            }}
          />
        </RecentReviewListChartContainer>
      </ChartContainer>
    );
  }
}

export default ReveiwStatsCharts;
