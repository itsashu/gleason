import { Button, OutlinedInput, TextField } from "@material-ui/core";
import { ReactElement, useState } from "react";
import { saveNewUserApi } from "../../api-service/gleason.api-service";
import { UserType } from "../../types/user-type";

export const EmployeeManagement = (): ReactElement => {
  const [Username, setUsername] = useState<string>("");
  const [UserPassword, setUserPassword] = useState<string>("");
  const [UserAddress, setUserAddress] = useState<string>("");
  const [Actions, setActions] = useState<string>("");
  const [Roles, setRoles] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const createNewUser = async () => {
    const newUserDetails: UserType = {
      Username,
      UserPassword,
      UserAddress,
      Roles,
      Actions,
    };
    try {
      await saveNewUserApi(newUserDetails);
    } catch (e) {
      setError(true);
    }
    // console.dir("users \n" + JSON.stringify(users));
  };

  return (
    <>
      ADD NEW EMPLOYEE
      {!error && (
        <>
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="UserName"
            label="UserName"
            value={Username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            placeholder="Password"
            label="Password"
            margin="normal"
            variant="outlined"
            type="Password"
            value={UserPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <TextField
            placeholder="Address"
            label="Address"
            margin="normal"
            variant="outlined"
            value={UserAddress}
            onChange={(event) => setUserAddress(event.target.value)}
          />
          <TextField
            placeholder="Roles"
            label="Roles"
            margin="normal"
            variant="outlined"
            value={Roles}
            onChange={(event) => setRoles(event.target.value)}
          />
          <TextField
            placeholder="Actions"
            label="Actions"
            margin="normal"
            variant="outlined"
            value={Actions}
            onChange={(event) => setActions(event.target.value)}
          />
          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={createNewUser}
          >
            Save New User
          </Button>
        </>
      )}
      {error && <p>ERROR SAVING EMPLOYEE</p>}
    </>
  );
};
