import { useEffect, useRef, type FC } from "react";
import { echarts, type BarChartOption, type LineChartOption, type PieChartOption } from "./config";

type EchartsOption = BarChartOption | LineChartOption | PieChartOption;
type ComponentConfig = {
  loading?: boolean;
  style?: React.CSSProperties;
  className?: string;
};

type ChartProps<T extends EchartsOption> = {
  options: T;
} & ComponentConfig;

const EchartsComponent: FC<{ options: EchartsOption } & ComponentConfig> = ({ options, loading = false, style = {}, className = "size-full" }) => {
  const conRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (conRef.current) {
      chartInstance.current = echarts.init(conRef.current);
      chartInstance.current.setOption(options);
    }

    return () => chartInstance.current?.dispose();
  }, []);

  useEffect(() => chartInstance.current?.setOption(options), [options]);

  const resize = () => chartInstance.current?.resize({ animation: { duration: 500 } });

  useEffect(() => {
    if (chartInstance.current) {
      if (loading) chartInstance.current.showLoading();
      else chartInstance.current.hideLoading();
    }
  }, [loading]);

  useEffect(() => {
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  });

  return <div ref={conRef} style={style} className={className}></div>;
};

const createChartComponent = <T extends EchartsOption>() => ((props: ChartProps<T>) => <EchartsComponent {...props} />) as FC<ChartProps<T>>;

const BarChart = createChartComponent<BarChartOption>();
const LineChart = createChartComponent<LineChartOption>();
const PieChart = createChartComponent<PieChartOption>();

// export default EchartsComponent;
export { BarChart, LineChart, PieChart };
