/* eslint-disable react/forbid-prop-types */
import {
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

function TableCard() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardHeader />
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Name</TableCell>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {restaurants.map((restaurant) => ( */}
            <TableRow
              // hover
              // key={restaurant.id}
              // ttot
              sx={{ color: "d" }}
            >
              <TableCell>{/* {restaurant.status} */}</TableCell>
              <TableCell>{/* {restaurant.name} */}</TableCell>
              <TableCell>{/* {restaurant.create_at} */}</TableCell>
            </TableRow>
            {/* ))} */}
          </TableBody>
        </Table>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          p: 2,
        }}
      >
        <Button color="primary" endIcon={<ArrowRightIcon fontSize="small" />} size="small" variant="text">
          View all
        </Button>
      </Box>
    </Card>
  );
}
export default TableCard;
