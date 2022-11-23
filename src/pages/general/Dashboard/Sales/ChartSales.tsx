import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartSales(props: any) {
  const { allSalesThisMonth } = props;
  const resultSalesYear = Array.from(
    allSalesThisMonth.reduce((m: any, { month, sales }: any) => m.set(month, (m.get(month) || 0) + sales), new Map()),
    ([month, sales]) => ({ month, sales })
  );
  const options: ApexOptions = {
    chart: {
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    // // colors: ["#fff"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    tooltip: {
      // theme: "dark",
      fixed: {
        enabled: false,
      },
    },
    grid: {
      show: true,
      // borderColor: "#F44336",
    },
    xaxis: {
      categories: resultSalesYear.map((e: any) => e.month),
    },
  };

  const series = [
    {
      name: "Sales",
      data: resultSalesYear.map((e: any) => e.sales),
    },
  ];

  return <Chart type="line" height={150} options={options} series={series} />;
}
