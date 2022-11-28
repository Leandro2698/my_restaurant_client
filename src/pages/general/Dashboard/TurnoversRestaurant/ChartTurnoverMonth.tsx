import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartTurnoverMonth(props: any) {
  const { allTurnoverThisMonth } = props;
  const map = allTurnoverThisMonth.reduce(
    (m: any, { day, income }: any) => m.set(day, (m.get(day) || 0) + income),
    new Map()
  );
  const array = Array.from(map, ([day, income]) => ({ day, income }));

  const resultTurnoverMonth = array.sort((a, b) => a.day - b.day);

  const options: ApexOptions = {
    chart: {
      stacked: false,
      toolbar: {
        show: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    // colors: ["BE235"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: false,
      },
      y: {
        formatter(val) {
          return `$ ${val}`;
        },
      },
    },
    xaxis: {
      categories: resultTurnoverMonth.map((e: any) => `day ${e.day}`),
    },
  };

  const series = [
    {
      name: "Turnover",
      data: resultTurnoverMonth.map((e: any) => e.income),
    },
  ];

  return <Chart type="line" height={190} options={options} series={series} />;
}
