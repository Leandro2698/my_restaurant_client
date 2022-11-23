import { SxProps } from "@mui/material";

export type PropsMainCard = {
  title?: string;
  avatar?: React.ReactNode;
  sx?: SxProps;
  sxContent?: SxProps;
  children: JSX.Element;
  action?: React.ReactNode;
  content?: boolean;
  header?: boolean;
};
export type PropsSubCard = {
  title?: string;
  sx?: SxProps;
  sxContent?: SxProps;
  children: JSX.Element;
  action?: React.ReactNode;
  content?: boolean;
};
