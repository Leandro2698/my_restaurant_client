/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Alert,
  AlertTitle,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useMutation } from "@apollo/client";
import { AuthContext } from "../../../context/authContext";
import useForm from "../../../hooks/useForm";
import { REGISTER_USER } from "../../../graphql/mutations/auth/authentification";

function RegisterForm() {
  const context = useContext(AuthContext);

  const navigate = useNavigate();
  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const { onChange, onSubmit, values } = useForm(registerUserCallback, {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [registerUser] = useMutation(REGISTER_USER, {
    update(_, { data: { registerUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError(err) {
      console.log(`err`, err);
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: { registerInput: values },
  });
  function registerUserCallback() {
    registerUser();
  }
  return (
    <Stack spacing={3}>
      {Object.keys(errors).length > 0 && (
        <Alert severity="error">
          <AlertTitle>Errors</AlertTitle>

          <List disablePadding>
            {Object.values(errors).map(value => (
              <ListItem disablePadding>
                <ListItemText primary={` ${value}`} />
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <TextField name="firstname" label="First name" error={!!errors.firstname} fullWidth onChange={onChange} />
        <TextField name="lastname" label="Last name" error={!!errors.lastname} fullWidth onChange={onChange} />
      </Stack>

      <TextField name="email" label="Email address" error={!!errors.email} fullWidth onChange={onChange} />

      <TextField
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        error={!!errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        name="confirmPassword"
        label="Confirm password"
        type={showConfPassword ? "text" : "password"}
        onChange={onChange}
        error={!!errors.confirmPassword}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" onClick={() => setShowConfPassword(!showConfPassword)}>
                {showConfPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button sx={{ textTransform: "none" }} variant="contained" onClick={onSubmit}>
        Register
      </Button>
    </Stack>
  );
}

export default RegisterForm;
