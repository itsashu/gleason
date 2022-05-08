import { ReactElement, useEffect, useState } from "react";
import { getUsersApi } from "../../api-service/gleason.api-service";
import { UserType } from "../../types/user-type";
import { EmployeeCard } from "./employee-card.component";

export const Dashboard = (): ReactElement => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    let users: UserType[];
    try {
      users = await getUsersApi();
      setUsers(users);
      setError(false);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", margin: "50px" }}>
      {users?.length > 0 && users.map((user) => <EmployeeCard user={user} />)}
      {error && <h1>Unable to fetch Employees</h1>}
    </div>
  );
};
