import { format } from "date-fns";
import MainCard from "../../../../components/Cards/MainCard";
import PieChartProducts from "./PieChartProducts";

export default function CardPieChartProducts(props: any) {
  const { restaurant } = props;
  const { products } = restaurant;
  const thisYear = new Date();

  const allTurnovers: any = [];
  for (let i = 0; i < products.length; i += 1) {
    const turnoverThisMonth = products[i].turnoversProductMonth.filter((e: any) => e.year === format(thisYear, "yyyy"));
    for (let u = 0; u < turnoverThisMonth.length; u += 1) {
      allTurnovers.push({
        name: products[i].name,
        month: turnoverThisMonth[u].month,
        income: turnoverThisMonth[u].income,
      });
    }
  }
  const turnoversByProduct = allTurnovers.reduce((agg: any, curr: any) => {
    const foundName: any = agg.find((x: any) => x.name === curr.name);
    if (foundName) {
      foundName.turnovers.push({
        income: curr.income,
        month: curr.month,
      });
    } else {
      agg.push({
        name: curr.name,
        turnovers: [
          {
            income: curr.income,
            month: curr.month,
          },
        ],
      });
    }
    return agg;
  }, []);
  return (
    <MainCard title="Best Product">
      <PieChartProducts turnoversByProduct={turnoversByProduct} />
    </MainCard>
  );
}
