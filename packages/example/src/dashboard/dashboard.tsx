/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable array-callback-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
import { HMChart, StatsRing, ECOption } from '@hm/ui';
import { Box, Paper, SimpleGrid } from '@mantine/core';
import { FC } from 'react';

interface IData {
  label: string;
  stats: string;
  progress: number;
  color: string;
  icon: 'up' | 'down';
}

const data: IData[] = [
  {
    label: 'Collector',
    stats: '16.75 msg/sec',
    progress: 65,
    color: 'teal',
    icon: 'up'
  },
  {
    label: 'Dispatcher',
    stats: '17.27  msg/sec',
    progress: 30,
    color: 'blue',
    icon: 'up'
  },
  {
    label: 'Datamodels',
    stats: '31.65 teleo data lines / sec',
    progress: 52,
    color: 'red',
    icon: 'down'
  }
];

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
        { value: 1048, name: 'Collector' },
        { value: 735, name: 'Dispatcher' },
        { value: 580, name: 'Transcoder' },
        { value: 484, name: 'Datalake' },
        { value: 300, name: 'Datamodels' }
      ]
    }
  ]
};

const Dashboard: FC = () => (
  <Box sx={{ marginTop: '24px' }}>
    <SimpleGrid
      cols={3}
      sx={{ marginBottom: '12px' }}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      {data.map((value) => (
        <StatsRing
          color={value.color}
          icon={value.icon}
          label={value.label}
          stats={value.stats}
          progress={value.progress}
        />
      ))}
    </SimpleGrid>
    <SimpleGrid
      cols={3}
      sx={{ marginBottom: '12px' }}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
      <Paper withBorder radius="md" p="xs">
        <HMChart option={barChartoption} style={{ height: '400px' }} />
      </Paper>
      <Paper withBorder radius="md" p="xs">
        <HMChart option={pieChartoption} style={{ height: '400px' }} />
      </Paper>
    </SimpleGrid>
  </Box>
);

export default Dashboard;
