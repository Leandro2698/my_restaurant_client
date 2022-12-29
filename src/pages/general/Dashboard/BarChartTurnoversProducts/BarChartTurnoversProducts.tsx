import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function BarChartTurnoversProducts(props: any) {
  const { turnoversByProduct } = props;
  const turnoversProduct: any = [];
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
  for (let i = 0; i < turnoversByProduct.length; i += 1) {
    const { turnovers } = turnoversByProduct[i];
    const map = turnovers.reduce(
      (m: any, { month, income }: any) => m.set(month, (m.get(month) || 0) + income),
      new Map()
    );
    const array = Array.from(map, ([month, income]) => ({ month, income })).sort(
      (a: any, b: any) => months.indexOf(a.month) - months.indexOf(b.month)
    );
    const makeDataForEveryMonths = (data: any) => {
      const lastMonthIndex = months.indexOf(data[array.length - 1].month);
      return Array.from({ length: Math.max(12 - array.length, 0) }, (v, index) => (lastMonthIndex + index + 1) % 12)
        .map(month_index => ({ month: months[month_index], income: 0 }))
        .concat(array);
    };
    turnoversProduct.push({
      data: makeDataForEveryMonths(array),
      name: turnoversByProduct[i].name,
    });
  }
  const finalResultTurnoverProduct = [];
  for (let i = 0; i < turnoversProduct.length; i += 1) {
    finalResultTurnoverProduct.push({
      name: turnoversProduct[i].name,
      data: turnoversProduct[i].data.map((e: any) => e.income),
    });
  }
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
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    colors: ["#001e47", "#5048e5", "#008FFB"],
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    },
    legend: {
      show: true,
      fontSize: "14px",
      fontFamily: `'Roboto', sans-serif`,
      position: "bottom",
      offsetX: 20,
      labels: {
        useSeriesColors: false,
      },
      markers: {
        width: 16,
        height: 16,
        radius: 5,
      },
      itemMargin: {
        horizontal: 15,
        vertical: 8,
      },
    },
    fill: {
      type: "solid",
    },
    dataLabels: {
      enabled: false,
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
    yaxis: {
      labels: {
        style: {
          // colors: ["#"],
        },
      },
    },
    grid: {
      show: true,
    },
  };
  const series = finalResultTurnoverProduct;

  return <Chart type="bar" height={300} options={options} series={series} />;
}
