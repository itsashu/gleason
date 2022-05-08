export type UserType = {
  UserId?: number;
  Username: string;
  UserPassword: string;
  Actions?: string;
  UserAddress: string;
  Roles?: string;
};

export type UserLoginDetailsType = {
  userName: string;
  password: string;
};
