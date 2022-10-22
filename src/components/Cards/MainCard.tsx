import { Card, CardContent, CardHeader } from "@mui/material";
import { PropsMainCard } from "./types";

function MainCard(props: PropsMainCard) {
  const { sx, title, children } = props;
  return (
    <Card sx={sx}>
      <CardHeader title={title} />
      <CardContent>{children}</CardContent>
    </Card>
  );
}
export default MainCard;
