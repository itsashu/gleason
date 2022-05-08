import { Button, OutlinedInput } from "@material-ui/core";
import { ReactElement, useState } from "react";
import { saveNewUser } from "../../api-service/gleason.api-service";
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
      await saveNewUser(newUserDetails);
    } catch (e) {
      setError(true);
    }
    // console.dir("users \n" + JSON.stringify(users));
  };

  return (
    <>
      EmpManagement <br />
      <br />
      ADD NEW EMPLOYEE
      {!error && (
        <>
          <OutlinedInput
            placeholder="UserName"
            value={Username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <OutlinedInput
            placeholder="Pasword"
            type="Password"
            value={UserPassword}
            onChange={(event) => setUserPassword(event.target.value)}
          />
          <OutlinedInput
            placeholder="Address"
            value={UserAddress}
            onChange={(event) => setUserAddress(event.target.value)}
          />
          <OutlinedInput
            placeholder="Roles"
            value={Roles}
            onChange={(event) => setRoles(event.target.value)}
          />
          <OutlinedInput
            placeholder="Actions"
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
