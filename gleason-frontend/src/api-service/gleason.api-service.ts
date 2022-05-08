import { UserLoginDetailsType, UserType } from "../types/user-type";

export const loginUser = async (
  userLoginDetails: UserLoginDetailsType
): Promise<UserType> => {
  const response = await fetch("https://localhost:44333/api/users/getUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userLoginDetails),
  });

  const user: UserType = await response.json();
  return user;
};

export const saveNewUser = async (newuserDetails: UserType): Promise<any> =>
  await fetch("https://localhost:44333/api/users/saveUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newuserDetails),
  });
