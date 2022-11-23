import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { PropsMainCard } from "./typesCards";

function MainCard(props: PropsMainCard) {
  const { sx, title, children, action, content = true, header = true, avatar } = props;
  return (
    <Card
      sx={{
        ...sx,
      }}
    >
      {header ? <CardHeader avatar={avatar} title={title} action={action} /> : ""}
      {title && <Divider />}
      {content && <CardContent>{children}</CardContent>}
      {!content && children}
    </Card>
  );
}
export default MainCard;
