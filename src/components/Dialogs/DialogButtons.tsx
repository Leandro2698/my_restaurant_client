import { DialogActions } from "@mui/material";
import { PropsDialogButtons } from "./typesDialogs";

export default function DialogButtons(props: PropsDialogButtons) {
  const { children } = props;
  return <DialogActions>{children}</DialogActions>;
}
