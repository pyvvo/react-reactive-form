/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
import type { Meta, StoryObj } from '@storybook/react';
import HMChart, { ECOption } from './index';

type Story = StoryObj<typeof HMChart>;

const meta: Meta<typeof HMChart> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/7.0/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Molecules/HMChart',
  component: HMChart
};

export default meta;

const barChartoption: ECOption = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      barWidth: '12px',
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      },
      itemStyle: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        barBorderRadius: 45,
        borderWidth: 1,
        borderType: 'solid',
        borderColor: '#73c0de',
        shadowColor: '#5470c6',
        shadowBlur: 3
      }
    }
  ]
  // ...
};

export const BarChart: Story = {
  args: {
    option: barChartoption,
    style: { height: '500px' }
  }
};

const pieChartoption: ECOption = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
};

export const PieChart: Story = {
  args: {
    option: pieChartoption,
    style: { height: '500px' }
  }
};

// export const Exemple2: Story = {
//   args: {
//     label: 'New users',
//     stats: '2,550',
//     progress: 72,
//     color: 'blue',
//     icon: 'up'
//   }
// };

// export const Exemple3: Story = {
//   args: {
//     label: 'Orders',
//     stats: '4,735',
//     progress: 52,
//     color: 'red',
//     icon: 'down'
//   }
// };
