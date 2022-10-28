import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { UserContextType } from "../../typings";
import SideNavbar from "../../components/admin/SideNavbar";

const AdminHome = () => {
  const router = useRouter();

  const { user } = useContext(UserContext) as UserContextType;

  useEffect(() => {
    if (user && user.isAuthenticated === false) {
      router.push("/");
    }
  }, []);

  return (
    <div className="relative min-h-screen md:flex">
      <SideNavbar />
      <div className="w-full p-10">Welcome to Admin</div>
    </div>
  );
};

export default AdminHome;
