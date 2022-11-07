import { Card, CardContent, CardHeader, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { PropsSubCard } from "./typesCards";

function SubCard(props: PropsSubCard) {
  const { sx, title, children, action, content = true } = props;
  const theme = useTheme();
  return (
    <Card
      sx={{
        border: "1px solid",
        borderColor: theme.palette.primary.light,
        ":hover": {
          boxShadow: "0 2px 14px 0 rgb(32 40 45 / 8%)",
        },
        ...sx,
      }}
      elevation={1}
    >
      <CardHeader sx={{ p: "30px" }} title={title} action={action} />
      {title && <Divider />}
      {content && <CardContent>{children}</CardContent>}
      {!content && children}
    </Card>
  );
}
export default SubCard;
