export interface ListResponse<T> {
  data: T[];
}

export interface User {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  phone?: string;
  groupId?: number;
  productId?: number;
}

// @types.User.ts
export interface IUser {
  isLoading?: boolean;
  isAuthenticated?: boolean;
  token?: string;
  account: {
    groupWithRoles?: number | sting;
    email?: string;
    username?: string;
  };
}
export type UserContextType = {
  user?: IUser;
  loginContext: (userData: IUser) => void;
  logoutContext: (userData: IUser) => void | null;
};
