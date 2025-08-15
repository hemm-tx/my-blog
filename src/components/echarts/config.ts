import * as echarts from "echarts/core";
import { BarChart, LineChart, PieChart, type BarSeriesOption, type LineSeriesOption, type PieSeriesOption } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  type TitleComponentOption,
  type TooltipComponentOption,
  type GridComponentOption,
  type LegendComponentOption,
} from "echarts/components";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

type GlobalOptions = TitleComponentOption | TooltipComponentOption | GridComponentOption | LegendComponentOption;
echarts.use([BarChart, LineChart, PieChart, TitleComponent, TooltipComponent, GridComponent, LabelLayout, CanvasRenderer, LegendComponent]);

export { echarts };
export type BarChartOption = echarts.ComposeOption<BarSeriesOption | GlobalOptions>;
export type LineChartOption = echarts.ComposeOption<LineSeriesOption | GlobalOptions>;
export type PieChartOption = echarts.ComposeOption<PieSeriesOption | GlobalOptions>;
