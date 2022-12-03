import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChartProducts() {
  const options: ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [44, 55, 13, 43, 22];

  return <Chart type="pie" height={300} options={options} series={series} />;
}
