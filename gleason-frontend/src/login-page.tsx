import React, { ReactElement, useState } from "react";
import OutlinedInput from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";

export const LoginPage = (): ReactElement => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const logIn = async () => {
    const details = {
      userName,
      password,
    };
    try {
      const result = await fetch("https://localhost:44333/api/users/getUser", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
      });

      const user = await result.json();
      console.log("user \n" + JSON.stringify(user));
      if (user.Username) {
        // sessionStorage.clear();
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
    <>
      GEMS Cloud Web Application
      <div>
        <OutlinedInput
          placeholder="username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <br />
        <OutlinedInput
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {/* {values.showPassword ? <Visibility /> : <VisibilityOff />} */}
              </IconButton>
            </InputAdornment>
          }
        />
        <br />
        <Button
          variant="contained"
          size="large"
          color="primary"
          onClick={logIn}
        >
          Sign In
        </Button>
        {error && <b>Unable to login... Try Again</b>}
      </div>
    </>
  );
};
