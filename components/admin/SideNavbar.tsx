import {
  List,
  SignOut,
  HouseSimple,
  User,
} from "phosphor-react";
import Link from "next/link";
import { useRef } from "react";

export default function SideNavbar() {
  const sideBarRef = useRef<HTMLDivElement>(null);

  function toogleSideBar() {
    sideBarRef.current!.classList.toggle("-translate-x-full");
  }

  return (
    <div className="z-50 max-h-screen text-white md:sticky md:top-0">
      {/* MOBILE SIDEBAR */}
      <div className="sticky top-0 z-30 flex items-center justify-between bg-black p-2 md:hidden">
        <a className="dark:text-dw block font-extrabold text-white ">Admin</a>
        <button
          className="block rounded focus:bg-black"
          onClick={toogleSideBar}
        >
          <List size={32} />
        </button>
      </div>
      {/* MAIN SIDEBAR */}
      <div
        ref={sideBarRef}
        className="child:transition-all absolute inset-y-0 left-0 z-50  flex w-56 -translate-x-full transform flex-col
        space-y-10 bg-black px-5 py-7 transition duration-200 ease-in-out md:relative md:top-0 md:max-h-screen md:min-h-screen md:translate-x-0"
      >
        <a href="#" className="h-8 w-8 text-3xl font-extrabold">
          Admin
        </a>

        <nav className="flex grow flex-col space-y-3">
          <Link href="/admin" passHref>
            <a className="linkAdmin">
              <HouseSimple size={20} />
              <p>Home</p>
            </a>
          </Link>

          <Link href="/admin/manage-user">
            <div className="linkAdmin">
              <User size={20} />
              <p>Manage User</p>
            </div>
          </Link>
        </nav>

        <button
          color="error"
          className="my-8 flex w-full flex-row  items-center space-x-2 rounded py-2.5 transition duration-200 hover:bg-red-500 hover:text-white"
        >
          <SignOut className=" mx-2" size={20} />
          <Link href="/">Home Dashboard</Link>
        </button>
      </div>
    </div>
  );
}
