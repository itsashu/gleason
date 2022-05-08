import React, { ReactElement, useEffect, useState } from "react";
import { UserType } from "./user-type";

export const Dashboard = (): ReactElement => {
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const result = await fetch(
      "https://localhost:44333/api/users/getAllUsers",
      {
        method: "GET",
        // headers: {
        //   Accept: "application/json",
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify({ a: 1, b: "Textual content" }),
      }
    );
    const users: UserType[] = await result.json();
    console.dir("users \n" + JSON.stringify(users));
    setUsers(users);
  };

  return (
    <>
      Dashboard Page
      <br />
      <br />
      {users?.length > 0 &&
        users.map((user) => {
          console.log(user.Username);
          return (
            <p key={user.UserId}>
              Name:{user.Username} <br /> Address: {user.UserAddress} <br />{" "}
              userId:{user.UserId}
            </p>
          );
        })}
    </>
  );
};
