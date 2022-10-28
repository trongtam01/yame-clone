import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { User, UserGroup } from "../../../typings";
import {
  createNewUser,
  fetchGroup,
  updateCurrentUser,
} from "../../../services/userServices";
import { toast } from "react-toastify";
import _ from "lodash";
import Button from "../../Button";

interface Props {
  dataModalUser: User;
  action: string;
  onHide: () => void;
  show: boolean;
}

interface userData {
  email?: string;
  phone?: number | string;
  username?: string;
  password?: string;
  group?: number | string | undefined;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalUser = ({ dataModalUser, action, onHide, show }: Props) => {
  const defaultUserData: userData = {
    email: "",
    phone: "",
    username: "",
    password: "",
    group: "",
  };

  const validInputsDefalut = {
    email: true,
    phone: true,
    username: true,
    password: true,
    group: true,
  };

  const [userData, setUserData] = useState(defaultUserData);
  const [validInputs, setValidInputs] = useState(validInputsDefalut);
  const [userGroup, setUserGroup] = useState<UserGroup[]>([]);

  useEffect(() => {
    getGroup();
  }, []);

  useEffect(() => {
    if (action === "UPDATE") {
      setUserData({
        ...dataModalUser,
        group: dataModalUser.Group ? dataModalUser.Group.id : "",
      });
    }
  }, [dataModalUser]);

  useEffect(() => {
    if (action === "CREATE") {
      if (userGroup && userGroup.length > 0) {
        setUserData({ ...userData, group: userGroup[0].id });
      }
    }
  }, [action]);

  const getGroup = async () => {
    let response = await fetchGroup();
    if (response && response.EC === 0) {
      setUserGroup(response.DT);
      if (response.DT && response.DT.length > 0) {
        let groups = response.DT;
        setUserData({ ...userData, group: groups[0].id });
      }
    } else {
      toast.error(response.EM);
    }
  };

  const handleChangeInput = (val: string, name: string) => {
    let _userData = _.cloneDeep(userData);
    _userData[name as keyof typeof _userData] = val;
    setUserData(_userData);
  };

  const checkValidInputs = () => {
    //create user
    if (action === "UPDATE") return true;

    setValidInputs(validInputsDefalut);
    let arr = ["email", "phone", "password", "group"];
    let check = true;
    for (let i = 0; i < arr.length; i++) {
      if (!userData[arr[i] as keyof typeof userData]) {
        let _validInputs = _.cloneDeep(validInputsDefalut);
        _validInputs[arr[i] as keyof typeof _validInputs] = false;
        setValidInputs(_validInputs);
        toast.error(`Empty input ${arr[i]}`);
        check = false;
        break;
      }
    }
    return check;
  };

  const handleConfirmUser = async () => {
    // Create USer
    let check = checkValidInputs();
    if (check === true) {
      let res =
        action === "CREATE"
          ? await createNewUser({
              ...userData,
              groupId: userData["group"],
            })
          : await updateCurrentUser({
              ...userData,
              groupId: userData["group"],
            });
      if (res && res.EC === 0) {
        onHide();
        setUserData({
          ...defaultUserData,
          group: userGroup && userGroup.length > 0 ? userGroup[0].id : "",
        });
      }
      if (res && res.EC !== 0) {
        toast.error(res.EM);
        let _validInputs = _.cloneDeep(validInputsDefalut);
        _validInputs[res.DT as keyof typeof _validInputs] = false;
        setValidInputs(_validInputs);
      }
    }
  };

  const handleCloseModalUser = () => {
    onHide();
    setUserData(defaultUserData);
    setValidInputs(validInputsDefalut);
  };

  return (
    <Modal
      open={show}
      onClose={() => handleCloseModalUser()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="relative px-5 py-3">
          <div className="group absolute top-5 right-5">
            <i
              onClick={() => onHide()}
              className="fa-solid fa-x cursor-pointer rounded-full border border-gray-600 p-2 transition delay-100 duration-150 group-hover:text-white hover:bg-black"
            ></i>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              {action === "CREATE" ? "Create New User" : "Edit User"}
            </h1>
          </div>
          <div className="mt-12 flex items-center justify-center">
            <form className="w-full max-w-lg">
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-city"
                  >
                    Email
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Email"
                    disabled={action === "CREATE" ? false : true}
                    value={userData.email}
                    onChange={(e) => handleChangeInput(e.target.value, "email")}
                  />
                </div>
              </div>
              <div className="-mx-3 mb-6 flex flex-wrap">
                <div className="mb-6 w-full px-3 md:mb-0 md:w-full">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-city"
                  >
                    Phone
                  </label>
                  <input
                    className="mb-3 block w-full appearance-none rounded border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                    type="text"
                    placeholder="Phone Number"
                    disabled={action === "CREATE" ? false : true}
                    value={userData.phone}
                    onChange={(e) => handleChangeInput(e.target.value, "phone")}
                  />
                </div>
              </div>
              {action === "CREATE" && (
                <div className="-mx-3 mb-6 flex flex-wrap">
                  <div className="w-full px-3">
                    <label
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                      htmlFor="grid-city"
                    >
                      Password
                    </label>
                    <input
                      className="mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                      type="password"
                      placeholder="Password"
                      value={userData.password}
                      onChange={(e) =>
                        handleChangeInput(e.target.value, "password")
                      }
                    />
                  </div>
                </div>
              )}

              <div className="-mx-3 mb-2 flex flex-wrap">
                <div className="w-full px-3 md:w-8/12">
                  <label
                    className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                    htmlFor="grid-city"
                  >
                    Username
                  </label>
                  <input
                    className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                    type="text"
                    placeholder="Username"
                    value={userData.username}
                    onChange={(e) =>
                      handleChangeInput(e.target.value, "username")
                    }
                  />
                </div>
                <div className="mb-6 w-full px-3 md:mb-0 md:w-1/3">
                  <div className="relative">
                    <label
                      className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                      htmlFor="grid-city"
                    >
                      Group
                    </label>
                    <select
                      className="block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 pr-8 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                      onChange={(e) =>
                        handleChangeInput(e.target.value, "group")
                      }
                      value={userData.group}
                    >
                      {userGroup.length > 0 &&
                        userGroup.map((items: UserGroup) => {
                          return (
                            <option key={items.id} value={items.id}>
                              {items.name}
                            </option>
                          );
                        })}
                    </select>
                    <div className="pointer-events-none absolute top-10 right-0 flex items-center px-2 text-gray-700">
                      <svg
                        className="h-4 w-4 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Button
                  onClick={() => handleConfirmUser()}
                  title={action === "CREATE" ? "Save" : "Update"}
                  color="bg-blue-500"
                  icon="fa-solid fa-arrow-right"
                />
              </div>
            </form>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalUser;
