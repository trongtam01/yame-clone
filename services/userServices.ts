import { User, UserData } from "../typings";
import axios from "../utils/axios";

const RegisterNewUser = (
  email: string,
  password: string,
  username: string,
  phone: number
) => {
  return axios.post("/api/v1/register", {
    email,
    password,
    username,
    phone,
  });
};

const loginUser = (valueLogin: number | string, password: string) => {
  return axios.post("/api/v1/login", {
    valueLogin,
    password,
  });
};

const logoutUser = () => {
  return axios.post("/api/v1/logout");
};

const getUserAccount = () => {
  return axios.get("/api/v1/account");
};

const fetchAllUser = (page: number | string, limit: number | string) => {
  return axios.get(`/api/v1/user/read?page=${page}&limit=${limit}`);
};

const deleteUser = (user: User) => {
  return axios.delete("/api/v1/user/delete", {
    data: {
      id: user.id,
    },
  });
};

const createNewUser = (userData: UserData) => {
  return axios.post("/api/v1/user/create", {
    ...userData,
  });
};

const updateCurrentUser = (userData: UserData) => {
  return axios.put("/api/v1/user/update", {
    ...userData,
  });
};

const fetchGroup = () => {
  return axios.get("/api/v1/group/read");
};

export {
  RegisterNewUser,
  loginUser,
  logoutUser,
  getUserAccount,
  fetchAllUser,
  fetchGroup,
  deleteUser,
  updateCurrentUser,
  createNewUser
};
