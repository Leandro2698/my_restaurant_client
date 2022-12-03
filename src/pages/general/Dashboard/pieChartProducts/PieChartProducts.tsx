import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PieChartProducts(props: any) {
  const { turnoversByProduct } = props;
  const listTurnoversByProduct = [];
  for (let i = 0; i < turnoversByProduct.length; i += 1) {
    listTurnoversByProduct.push(
      turnoversByProduct[i].turnovers
        .map((e: any) => e.income)
        .reduce((accumulator: any, value: any) => accumulator + value, 0)
    );
  }
  const options: ApexOptions = {
    chart: {
      type: "pie",
    },
    labels: turnoversByProduct.map((e: any) => e.name),
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

  const series = listTurnoversByProduct;

  return <Chart type="pie" height={300} options={options} series={series} />;
}
