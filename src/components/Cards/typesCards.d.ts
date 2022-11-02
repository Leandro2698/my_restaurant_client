import { SxProps } from "@mui/material";

export type PropsMainCard = {
  title: string;
  sx?: SxProps;
  sxContent?: SxProps;
  children: JSX.Element;
  action?: React.ReactNode;
  content?: boolean;
};
export type PropsMiniCard = {
  sx?: SxProps;
};
