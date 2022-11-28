import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartTurnoverYear(props: any) {
  const { allTurnoverThisYear } = props;
  const resultTurnoverYear = Array.from(
    allTurnoverThisYear.reduce(
      (m: any, { month, income }: any) => m.set(month, (m.get(month) || 0) + income),
      new Map()
    ),
    ([month, income]) => ({ month, income })
  );
  function sortByMonth(arr: any) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    arr.sort((a: any, b: any) => months.indexOf(a.month) - months.indexOf(b.month));
  }
  sortByMonth(resultTurnoverYear);
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
      categories: resultTurnoverYear.map((e: any) => e.month),
    },
  };

  const series = [
    {
      name: "Turnover",
      data: resultTurnoverYear.map((e: any) => e.income),
    },
  ];

  return <Chart type="line" height={190} options={options} series={series} />;
}
