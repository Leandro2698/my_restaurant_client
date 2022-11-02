export type PropsDialog = {
  title: string;
  children: JSX.Element;
  open: boolean;
  handleClose: () => void;
  actions: JSX.Element;
};
export type PropsDialogButtons = {
  children: JSX.Element;
};
