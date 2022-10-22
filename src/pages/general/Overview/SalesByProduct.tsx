import TableCard from "../../../components/Cards/TableCard";
import { SalesByProductProps } from "./type";

function SalesByProduct(props: SalesByProductProps) {
  const { restaurant } = props;
  return (
    <>
      <p>{restaurant}</p>
      <TableCard />;
    </>
  );
}
export default SalesByProduct;
