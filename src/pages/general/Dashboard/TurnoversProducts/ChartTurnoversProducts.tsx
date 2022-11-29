import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartTurnoversProducts(props: any) {
  const { turnoversByProduct } = props;
  console.log(`turturnoversByProduct`, turnoversByProduct);
  const turnoversProductForChart = [];
  for (let i = 0; i < turnoversByProduct.length; i += 1) {
    const { turnovers } = turnoversByProduct[i];
    const map = turnovers.reduce(
      (m: any, { month, income }: any) => m.set(month, (m.get(month) || 0) + income),
      new Map()
    );
    const array = Array.from(map, ([month, income]) => ({ month, income }));

    turnoversProductForChart.push({
      data: array.map(e => e.income),
      name: turnoversByProduct[i].name,
    });
  }

  function sortByMonth(arr: any) {
    console.log(`arr`, arr);
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
  sortByMonth(turnoversProductForChart);
  console.log(`array income`, turnoversProductForChart);
  console.log(`all`, turnoversProductForChart);

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
    colors: ["#29c784", "#2ddb91", "#486dd0", "#5048e5", "#001e47"],
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
      // borderColor: "#F44336",
    },
  };
  const series = turnoversProductForChart;
  // console.log(`serseries`, series);
  console.log(`turnoversProductForChart`, turnoversProductForChart);

  return <Chart type="bar" options={options} series={series} />;
}
