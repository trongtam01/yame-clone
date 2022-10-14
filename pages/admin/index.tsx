import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { UserContextType } from "../../typings";

const AdminHome = () => {
  const router = useRouter();

  const { user, logoutContext } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    if (user && user.isAuthenticated === false) {
      router.push("/");
    }
  }, []);

  return <div>AdminHome</div>;
};

export default AdminHome;
