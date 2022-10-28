export type ChangeEvent<T = HTMLInputElement> = React.ChangeEventHandler<T>;

export type ClickEvent<T = HTMLButtonElement> = React.MouseEventHandler<T>;

export type SelectEvent<T = HTMLSelectElement> = React.ChangeEvent<T>;

export type KeyDownEvent<T = HTMLInputElement> = React.KeyboardEventHandler<T>;

export interface ListResponse<T> {
  data: T[];
}

export interface User {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  phone?: string | number;
  Group?: {
    id?: number;
    name?: string;
    description?: string;
  };
  productId?: number;
}

export interface UserData {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  phone?: string | number;
  groupId?: number | string | undefined;
  productId?: number;
}

export interface UserGroup {
  id?: number;
  name?: string;
  description?: string;
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
