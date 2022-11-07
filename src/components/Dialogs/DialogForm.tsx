import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";
import DialogButtons from "./DialogButtons";
import { PropsDialog } from "./typesDialogs";

export default function DialogForm(props: PropsDialog) {
  const { title, children, open, handleClose, actions } = props;
  return (
    <Dialog open={open} keepMounted onClose={handleClose} aria-describedby="alert-dialog-slide-description">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ margin: "10px" }}>
        <Box sx={{ flexGrow: 1, p: 3 }}>{children}</Box>
      </DialogContent>
      <DialogButtons>{actions}</DialogButtons>
    </Dialog>
  );
}
