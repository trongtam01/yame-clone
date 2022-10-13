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
