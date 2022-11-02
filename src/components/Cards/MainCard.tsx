import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { PropsMainCard } from "./typesCards";

function MainCard(props: PropsMainCard) {
  const { sx, title, children, action, content = true } = props;
  return (
    <Card
      sx={{
        ...sx,
      }}
    >
      <CardHeader sx={{ p: "30px" }} title={title} action={action} />
      {title && <Divider />}
      {content && <CardContent>{children}</CardContent>}
      {!content && children}
    </Card>
  );
}
export default MainCard;
