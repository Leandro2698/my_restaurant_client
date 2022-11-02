import { useState } from "react";

const useForm = (callback: Function, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: any) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: any) => {
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
