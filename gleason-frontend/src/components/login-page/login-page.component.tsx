import { ReactElement, useState } from "react";
import OutlinedInput from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import { loginUserApi } from "../../api-service/gleason.api-service";
import { UserLoginDetailsType, UserType } from "../../types/user-type";
import "./login-page.css";
import { TextField } from "@material-ui/core";

export const LoginPage = (): ReactElement => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const logIn = async () => {
    const userLoginDetails: UserLoginDetailsType = {
      userName,
      password,
    };

    try {
      const user: UserType = await loginUserApi(userLoginDetails);
      console.log("user \n" + JSON.stringify(user));

      if (user.Username) {
        sessionStorage.setItem("isAuthenticated", "true");
        // eslint-disable-next-line no-restricted-globals
        location.href = "/dashboard";
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className="loginContainer">
      GEMS Cloud Web Application
      <div>
        <TextField
          required
          fullWidth
          className="inputs"
          label="UserName"
          placeholder="username"
          variant="outlined"
          margin="normal"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <PersonIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          required
          fullWidth
          variant="outlined"
          label="Password"
          className="inputs"
          placeholder="password"
          margin="normal"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="button"
          variant="contained"
          size="large"
          color="primary"
          onClick={logIn}
        >
          Sign In
        </Button>
        {error && <b>Unable to login... Try Again</b>}
      </div>
    </div>
  );
};
