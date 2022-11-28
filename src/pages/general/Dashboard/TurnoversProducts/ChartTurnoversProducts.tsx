import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function ChartTurnoversProducts(props: any) {
  const { turnoversByProduct } = props;
  console.log(`turturnoversByProduct`, turnoversByProduct);
  const turnoversProduct = [];
  for (let i = 0; i < turnoversByProduct.length; i += 1) {
    const { turnovers } = turnoversByProduct[i];
    for (let u = 0; u < turnovers.length; u += 1) {
      console.log(`foo`, turnoversByProduct[i].name);
      console.log(`foo`, turnovers[u].income);
      // turnoversProduct.push({
      //   name: turnoversByProduct[i].name,
      //   month: turnoverThisMonth[u].month,
      //   income: turnoverThisMonth[u].income,
      // });
    }
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

  const series = [
    {
      name: "product1",
      data: [35, 125, 35, 35, 35, 80, 35, 20, 35, 45, 15, 75],
    },
    {
      name: "product2",
      data: [35, 15, 15, 35, 65, 40, 80, 25, 15, 85, 25, 75],
    },
    {
      name: "product3",
      data: [35, 145, 35, 35, 20, 105, 100, 10, 65, 45, 30, 10],
    },
  ];

  return <Chart type="bar" height={480} options={options} series={series} />;
}
