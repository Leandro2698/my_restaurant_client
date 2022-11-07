import { SelectChangeEvent } from "@mui/material";
import { ChangeEvent, useState } from "react";

const useForm = (callback: Function, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: (ChangeEvent<HTMLInputElement> & SelectChangeEvent<HTMLInputElement>) | any) => {
    setValues({ ...values, [event.target.name]: event.target.valueAsNumber || event.target.value });
  };

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
export default useForm;
