/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
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
import { AuthContext } from "../../../context/authContext";
import useForm from "../../../hooks/useForm";
import { LOGIN_USER } from "../../../graphql/mutations/auth/authentification";

function LoginForm() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState<any>({});
  const [showPassword, setShowPassword] = useState(false);

  function loginUserCallback() {
    loginUser();
  }
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    email: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { loginUser: userData } }) {
      context.login(userData);
      navigate("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: { loginInput: values },
  });
  if (loading) return <p>{loading}</p>;
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
      <TextField name="email" label="Email address" error={!!errors.email} fullWidth onChange={onChange} />
      <TextField
        name="password"
        label="Password"
        type={showPassword ? "text" : "password"}
        onChange={onChange}
        error={!!errors.password}
        helperText={errors.password}
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
      <Button sx={{ textTransform: "none" }} variant="contained" onClick={onSubmit}>
        Log In
      </Button>
    </Stack>
  );
}
export default LoginForm;
