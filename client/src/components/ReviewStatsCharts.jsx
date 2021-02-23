import React from 'react';
import Chart from 'chart.js';
import { Bar } from 'react-chartjs-2';

import { ChartContainer, MainReviewListChartContainer, MainReviewListChart, RecentReviewListChartContainer, RecentReviewListChart } from '../styled';

class ReveiwStatsCharts extends React.Component {
  constructor(props) {
    super(props);
    this.mainReviewsChartReference = React.createRef();
    this.recentReviewsChartReference = React.createRef();
  }

  render() {
    const { reviewCountsLastTwentyWeeks, reviewCountsLastThirtyDays } = this.props.chartData;
    const lastTwentyWeeksLabels = [];
    const lastThirtyDaysLabels = [];
    const positiveCountsLastTwentyWeeks = Object.values(reviewCountsLastTwentyWeeks.positive);
    const negativeCountsLastTwentyWeeks = Object.values(reviewCountsLastTwentyWeeks.negative);
    const positiveCountsLastThirtyDays = Object.values(reviewCountsLastThirtyDays.positive);
    const negativeCountsLastThirtyDays = Object.values(reviewCountsLastThirtyDays.negative);

    Object.keys(reviewCountsLastTwentyWeeks.positive).map((key) => {
      const keyDate = new Date(key);
      lastTwentyWeeksLabels.push(`${keyDate.toLocaleString('default', { month: 'short' })} ${keyDate.toLocaleString('default', { day: '2-digit' })}`);
    });
    Object.keys(reviewCountsLastThirtyDays.positive).map((key) => {
      const keyDate = new Date(key);
      lastThirtyDaysLabels.push(`${keyDate.toLocaleString('default', { month: 'short' })} ${keyDate.toLocaleString('default', { day: '2-digit' })}`);
    });

    return (
      <ChartContainer>
        <MainReviewListChartContainer>
          <Bar
            ref={this.mainReviewsChartReference}
            options={{
              maintainAspectRatio: false,
              animation: {
                duration: 0,
              },
              legend: {
                display: false,
              },
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
                    padding: 10,
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
                    zeroLineWidth: 1,
                    zeroLineColor: '#1b2837',
                    lineWidth: 0,
                  },
                  stacked: true,
                }],
              },
            }}
            data={{
              label: 'reviewsCountsLastTwentyWeeks',
              labels: lastTwentyWeeksLabels,
              datasets: [
                {
                  label: 'Positive Reviews',
                  backgroundColor: '#66c0f4',
                  data: positiveCountsLastTwentyWeeks,
                },
                {
                  label: 'Negative Reviews',
                  backgroundColor: '#a34c26',
                  data: negativeCountsLastTwentyWeeks,
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
              animation: {
                duration: 0,
              },
              legend: {
                display: false,
              },
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
                    padding: 10,
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
                    zeroLineWidth: 1,
                    zeroLineColor: '#1b2837',
                    lineWidth: 0,
                  },
                }],
              },
            }}
            data={{
              label: 'reviewsCountsLastThirtyDays',
              labels: lastThirtyDaysLabels,
              datasets: [
                {
                  label: 'Positive Reviews',
                  backgroundColor: '#66c0f4',
                  data: positiveCountsLastThirtyDays,
                },
                {
                  label: 'Negative Reviews',
                  backgroundColor: '#a34c26',
                  data: negativeCountsLastThirtyDays,
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
