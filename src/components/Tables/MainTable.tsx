import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { styled } from "@mui/material/styles";
import { PropsMainTable } from "./typesTables";

const TableCellStyle = styled(TableCell)(() => ({
  paddingTop: "10px",
  paddingBottom: "10px",
  border: "none",
}));

export default function MainTable(props: PropsMainTable) {
  const { children, tableCells } = props;
  return (
    <TableContainer sx={{ maxHeight: "70vh" }}>
      <Table>
        <TableHead sx={{ backgroundColor: "rgba(188, 188, 188 ,0.2)" }}>
          <TableRow>
            <TableCellStyle />
            {tableCells.map((cell: string) =>
              cell === "Action" ? (
                <TableCellStyle key={cell} align="right" sx={{ pr: "25px" }}>
                  {cell}
                </TableCellStyle>
              ) : (
                <TableCellStyle key={cell}>{cell}</TableCellStyle>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
}
