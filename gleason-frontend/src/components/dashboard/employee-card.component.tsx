import { ReactElement } from "react";
import { UserType } from "../../types/user-type";
import "./employee-card.css";

export const EmployeeCard = (props: { user: UserType }): ReactElement => (
  <div className="userCard">
    <span>Name: {props.user.Username}</span>
    <span>Address: {props.user.UserAddress}</span>
    <span>UserId: {props.user.UserId}</span>
  </div>
);
