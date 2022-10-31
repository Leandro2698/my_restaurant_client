import { Dialog, DialogContent, DialogTitle } from "@mui/material";

export default function DialogForm(props: any) {
  const { title, children, open, handleClose } = props;
  return (
    <Dialog
      sx={{
        backdropFilter: "blur(5px)",
      }}
      open={open}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent sx={{ margin: "10px" }}>{children}</DialogContent>
    </Dialog>
  );
}
