import { Template, ContentCard, BarChart, DeclarationCard } from "@/components";
import { useEffect, useState } from "react";

const { Text, ShellCode, Image, Href, Code } = ContentCard;
const WrapperEcharts = () => {
  const [chartsLoading, setChartsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setChartsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <Template id="react-wrapper-axios">
      <Template.Content id="react-wrapper-axios-content">
        <ContentCard title="Echarts 简单封装">
          <ContentCard.Paragraph title="安装 Echarts" id="install-echarts">
            <Text>安装 Echarts，在命令行中运行以下命令：</Text>
            <ShellCode code={["npm install echarts"]} />
            <Text>echarts 配置项</Text>
            <Image src="/images/pyecharts-ops-img.png" />
            <Href href="https://pyecharts.org/#/zh-cn/global_options">图片来源于 pyecharts 官网</Href>
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="编辑 echarts 配置项文件" id="edit-echarts-config">
            <Text>在 src/component 目录下创建 echarts 文件夹，并在该文件夹下创建 config.ts 文件，编辑 echarts 配置项：</Text>
            <Code
              language="typescript"
              title="src/components/echarts/config.ts"
              code={[
                "// 按需导入组件，echarts 太大了，按需导入可以减小打包体积",
                'import * as echarts from "echarts/core";',
                "// 引入柱状图，折线图，饼图等图表组件",
                'import { BarChart, LineChart, PieChart, type BarSeriesOption, type LineSeriesOption, type PieSeriesOption } from "echarts/charts";',
                "// 引入提示框，标题，直角坐标系，图例等组件",
                "import {",
                "  TitleComponent,",
                "  TooltipComponent,",
                "  GridComponent,",
                "  LegendComponent,",
                "  type TitleComponentOption,",
                "  type TooltipComponentOption,",
                "  type GridComponentOption,",
                "  type LegendComponentOption,",
                '} from "echarts/components";',
                "// 引入 Canvas 标签布局、过渡动画等特性",
                'import { LabelLayout } from "echarts/features";',
                "// 引入 Canvas 渲染器，使 Echarts 支持在 canvas 中渲染",
                'import { CanvasRenderer } from "echarts/renderers";',
                "",
                "// 注册组件",
                "echarts.use([BarChart, LineChart, PieChart, TitleComponent, TooltipComponent, GridComponent, LabelLayout, CanvasRenderer, LegendComponent]);",
                "",
                "export { echarts };",
                "",
                "// 定义 BarChartOption、LineChartOption、PieChartOption 类型",
                "type GlobalOptions = TitleComponentOption | TooltipComponentOption | GridComponentOption | LegendComponentOption;",
                "",
                "export type BarChartOption = echarts.ComposeOption<",
                "  BarSeriesOption | GlobalOptions",
                ">;",
                "",
                "export type LineChartOption = echarts.ComposeOption<",
                "  LineSeriesOption | GlobalOptions",
                ">;",
                "",
                "export type PieChartOption = echarts.ComposeOption<",
                "  PieSeriesOption | GlobalOptions",
                ">;",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="封装 Echarts 组件" id="wrap-echarts-component">
            <Text>在 src/component/echarts 目录下创建 index.ts 文件，编辑 Echarts 组件：</Text>
            <Code
              language="typescript"
              title="src/components/echarts/index.ts"
              code={[
                'import { useEffect, useRef, type FC } from "react";',
                'import { echarts, type BarChartOption, type LineChartOption, type PieChartOption } from "./config";',
                "",
                "type EchartsOption = BarChartOption | LineChartOption | PieChartOption;",
                "",
                "// 定义组件必要的数据类型",
                "type ComponentConfig = {",
                "  loading?: boolean;",
                "  style?: React.CSSProperties;",
                "  className?: string;",
                "};",
                "",
                "// 定义 ChartProps 类型",
                "type ChartProps<T extends EchartsOption> = {",
                "  options: T;",
                "} & ComponentConfig;",
                "",
                'const EchartsComponent: FC<{ options: EchartsOption } & ComponentConfig> = ({ options, loading = false, style = {}, className = "size-full" }) => {',
                "  const conRef = useRef<HTMLDivElement | null>(null);",
                "  const chartInstance = useRef<echarts.ECharts | null>(null);",
                "",
                "  useEffect(() => {",
                "    // 初始化 Echarts",
                "    if (conRef.current) {",
                "      chartInstance.current = echarts.init(conRef.current);",
                "      chartInstance.current.setOption(options);",
                "    }",
                "",
                "    // 销毁组件实例，释放内存",
                "    return () => chartInstance.current?.dispose();",
                "  }, []);",
                "",
                "  // 监听 options 变化，更新组件实例",
                "  useEffect(() => chartInstance.current?.setOption(options), [options]);",
                "",
                "  // 定义 resize 函数，更新 Echarts 尺寸",
                "  const resize = () => {",
                "    chartInstance.current?.resize({",
                "      animation: { duration: 500 },",
                "    });",
                "  };",
                "",
                "  // 定义 loading 状态",
                "  useEffect(() => {",
                "    if (chartInstance.current) {",
                "      if (loading) chartInstance.current.showLoading();",
                "      else chartInstance.current.hideLoading();",
                "    }",
                "  }, [loading]);",
                "",
                "  // 监听窗口尺寸变化",
                "  useEffect(() => {",
                '    window.addEventListener("resize", resize);',
                '    return () => window.removeEventListener("resize", resize);',
                "  });",
                "",
                "  return <div ref={conRef} style={style} className={className}></div>;",
                "};",
                "",
                "// 创建 createChartComponent 函数，用于创建 Echarts 组件",
                "const createChartComponent = <T extends EchartsOption>() => ((props: ChartProps<T>) => <EchartsComponent {...props} />) as FC<ChartProps<T>>;",
                "",
                "// 创建 BarChart、LineChart、PieChart 组件并导出",
                "const BarChart = createChartComponent<BarChartOption>();",
                "const LineChart = createChartComponent<LineChartOption>();",
                "const PieChart = createChartComponent<PieChartOption>();",
                "",
                "// export default EchartsComponent;",
                "export { BarChart, LineChart, PieChart };",
              ]}
            />
            <Text>在 src/component/index.ts 文件中导出 Echarts 组件：</Text>
            <Code
              language="typescript"
              title="src/components/index.ts"
              code={[
                "export { BarChart, LineChart, PieChart } from './echarts';",
                "// 把类型也导出去，创建 options 时可能会用到",
                "export type { BarChartOption, LineChartOption, PieChartOption } from './echarts/config';",
              ]}
            />
          </ContentCard.Paragraph>
          <ContentCard.Paragraph title="使用自定义 Echarts 组件" id="use-echarts">
            <Text>使用 Echarts 组件，在文件中引入组件并渲染：</Text>
            <Code
              language="typescript"
              title="TestEcharts.tsx"
              code={[
                "import { BarChart, LineChart, PieChart } from '@/components';",
                'import { useEffect, useState } from "react";',
                "",
                "const TestEcharts = () => {",
                "  const [chartsLoading, setChartsLoading] = useState(true);",
                "  useEffect(() => {",
                "    const timer = setTimeout(() => {",
                "      setChartsLoading(false);",
                "    }, 2000);",
                "    return () => clearTimeout(timer);",
                "  });",
                "",
                "  // 可以通过 setinterval 定时更新数据，模拟数据变化",
                "  // const [dataList, setDataList] = useState<number[]>([100, 90, 80, 70, 60, 50, 40, 30, 20, 10]);",
                "  // useEffect(() => {",
                "  //   const timer = setInterval(() => {",
                "  //     setDataList((prev) => prev.map((item) => item + Math.floor(Math.random() * 10) - 5));",
                "  //   }, 2000);",
                "  //",
                "  //   return () => clearInterval(timer);",
                "  // }, []);",
                "",
                "  return (",
                "    <BarChart",
                '      className="w-full h-80"',
                "      loading={chartsLoading}",
                "      options={{",
                "        title: {",
                "          text: 'Bar Chart',",
                "          top: 20,",
                "          left: 20,",
                "        },",
                "        legend: {",
                "          data: ['bar1', 'bar2'],",
                "          top: '10%',",
                "        },",
                "        xAxis: [",
                "          {",
                "            type: 'category',",
                "            data: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009'],",
                "          },",
                "        ],",
                "        yAxis: [{ type: 'value' }],",
                "        tooltip: {",
                "          trigger: 'axis',",
                "          axisPointer: {",
                "            type: 'cross',",
                "            crossStyle: {",
                "              color: '#999',",
                "            },",
                "            label: {",
                "              backgroundColor: '#555',",
                "              borderColor: '#ccc',",
                "              borderWidth: 1,",
                "              padding: [6, 10],",
                "              borderRadius: 3,",
                "            },",
                "          },",
                "        },",
                "        grid: {",
                "          left: '3%',",
                "          right: '4%',",
                "          bottom: '3%',",
                "          containLabel: false,",
                "        },",
                "        series: [",
                "          {",
                "            name: 'bar1',",
                "            type: 'bar',",
                "            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],",
                "          },",
                "          {",
                "            name: 'bar2',",
                "            type: 'bar',",
                "            // data: dataList,",
                "            data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],",
                "          },",
                "        ],",
                "      }}",
                "    />",
                "  );",
                "};",
                "",
                "export default WrapperEcharts;",
              ]}
            />
            <Text>渲染结果：</Text>
            <BarChart
              className="w-full h-80"
              loading={chartsLoading}
              options={{
                title: {
                  text: "Bar Chart",
                  top: 20,
                  left: 20,
                },
                legend: {
                  data: ["bar1", "bar2"],
                  top: "10%",
                },
                xAxis: [
                  {
                    type: "category",
                    data: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"],
                  },
                ],
                yAxis: [{ type: "value" }],
                tooltip: {
                  trigger: "axis",
                  axisPointer: {
                    type: "cross",
                    crossStyle: {
                      color: "#999",
                    },
                    label: {
                      backgroundColor: "#555",
                      borderColor: "#ccc",
                      borderWidth: 1,
                      padding: [6, 10],
                      borderRadius: 3,
                    },
                  },
                },
                grid: {
                  left: "3%",
                  right: "4%",
                  bottom: "3%",
                  containLabel: false,
                },
                series: [
                  {
                    name: "bar1",
                    type: "bar",
                    data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                  },
                  {
                    name: "bar2",
                    type: "bar",
                    data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10],
                  },
                ],
              }}
            />
            <Text>其他 Echarts 组件的使用方法与 BarChart 组件相同，这里就不过多赘述啦。</Text>
          </ContentCard.Paragraph>
        </ContentCard>
      </Template.Content>
      <DeclarationCard
        importForm={[
          { text: "参考文章：React hooks 封装 ECharts5 通用组件", href: "https://juejin.cn/post/7235603140261937209" },
          { text: "echarts 官网", href: "https://echarts.apache.org/zh/index.html" },
        ]}
      />
    </Template>
  );
};

export default WrapperEcharts;
