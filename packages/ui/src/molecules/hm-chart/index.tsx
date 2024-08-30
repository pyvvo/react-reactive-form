/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/require-default-props */
import {
  BarChart,
  // The series types are defined with the SeriesOption suffix
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
  PieChart,
  PieSeriesOption
} from 'echarts/charts';
import {
  // Dataset
  DatasetComponent,
  DatasetComponentOption,
  GridComponent,
  GridComponentOption,
  TitleComponent,
  // The component types are defined with the suffix ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  // Built-in transform (filter, sort)
  TransformComponent
} from 'echarts/components';
import * as echarts from 'echarts/core';
import { ECharts, SetOptionOpts, getInstanceByDom, init } from 'echarts/core';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { CSSProperties, FC, useEffect, useRef } from 'react';

// Combine an Option type with only required components and charts via ComposeOption
export type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
  | PieSeriesOption
>;

// Register the required components
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PieChart,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
]);

interface IReactECharts {
  option: ECOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: 'light' | 'dark';
}

// @see https://dev.to/manufac/using-apache-echarts-with-react-and-typescript-353k
/**
 * Component for showing details of the user.
 *
 * @component
 * @example
 * const option: ECOption = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(180, 180, 180, 0.2)"
        }
      }
    ]
  // ...
};
 * const age = 21
 * const name = 'Jitendra Nirnejak'
 * return (
 *     <Box tw=" w-full h-full">
 *         <HMChart option={option} style={{ height: "500px" }} />
 *      </Box>
 * )
 */
const HMChart: FC<IReactECharts> = (props) => {
  const { option, style, settings, loading, theme } = props;
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize chart
    let chart: ECharts | undefined;
    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener('resize', resizeChart);

    // Return cleanup function
    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [theme]);

  useEffect(
    () => {
      // Update chart
      if (chartRef.current !== null) {
        const chart = getInstanceByDom(chartRef.current);
        if (!chart) return;
        chart.setOption(option, settings);
      }
    },
    // Whenever theme changes we need to add option
    //  and setting due to it being deleted in cleanup function
    [option, settings, theme]
  );

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      if (!chart) return;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      loading === true ? chart.showLoading() : chart.hideLoading();
    }
  }, [loading, theme]);

  return (
    <div ref={chartRef} style={{ width: '100%', height: '100px', ...style }} />
  );
};

export default HMChart;
