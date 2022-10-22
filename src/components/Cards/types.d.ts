import { SxProps } from "@mui/material";

export type PropsMainCard = {
  title: string;
  sx: SxProps;
  children: JSX.Element;
  // whatever else is in the JWT.
};
export type PropsMiniCard = {
  sx: SxProps;
  // whatever else is in the JWT.
};
