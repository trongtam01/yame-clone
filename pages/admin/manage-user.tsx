import React, { useEffect, useState } from "react";
import SideNavbar from "../../components/admin/SideNavbar";
import ButtonM from "../../components/Button";
import ReactPaginate from "react-paginate";
import { deleteUser, fetchAllUser } from "../../services/userServices";
import { ChangeEvent, User } from "../../typings";
import { CaretLeft, CaretRight } from "phosphor-react";
import ModalUser from "../../components/admin/user/ModalUser";
import { toast } from "react-toastify";
import ModalDeleteUser from "../../components/admin/user/ModalDeleteUser";
import { debounce } from "lodash";
import _ from "lodash";

const ManageUser = () => {
  // paginate
  const [listUsers, setListUser] = useState([]);
  const [curentPage, setCurentPage] = useState(1);
  const [curentLimit, setCurentLimit] = useState(3);
  const [totalPages, setTotalPages] = useState(0);

  //Model Delete
  const [isShowModelDelete, setIsShowModelDelete] = useState(false);
  const [dataModal, setDataModel] = useState({});

  //Model UPDATE
  const [isShowModalUser, setIsShowModalUser] = useState(false);
  const [actionModalUser, setActionModalUser] = useState("CREATE");

  const [dataModalUser, setDataModelUser] = useState({});

  const [sortBy, setSortBy] = useState("asc");
  const [sortField, setSortField] = useState("id");

  useEffect(() => {
    fetchUsers();
  }, [curentPage]);

  const fetchUsers = async () => {
    let response = await fetchAllUser(curentPage, curentLimit);
    if (response && response.EC === 0) {
      setTotalPages(response.DT.toltolPage);
      setListUser(response.DT.users);
    }
  };

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    setCurentPage(event.selected + 1);
  };

  const handleDeleteUser = async (user: User) => {
    setDataModel(user);
    setIsShowModelDelete(true);
  };

  const handleCloseDelete = () => {
    setIsShowModelDelete(false);
    setDataModel({});
  };

  const confirmDeleteUser = async () => {
    let respones = await deleteUser(dataModal);
    if (respones && respones.EC === 0) {
      toast.success(respones.EM);
      await fetchUsers();
      setIsShowModelDelete(false);
    } else {
      toast.error(respones.EM);
    }
  };

  const onHideModalUser = async () => {
    setIsShowModalUser(false);
    setDataModelUser({});
    await fetchUsers();
  };

  const handleEditUser = (user: User) => {
    setActionModalUser("UPDATE");
    setDataModelUser(user);
    setIsShowModalUser(true);
  };

  const handleRefresh = async () => {
    await fetchUsers();
  };

  const handleSearch = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    let term = e.target.value;
    if (term) {
      let cloneListUsers = _.cloneDeep(listUsers);
      cloneListUsers = cloneListUsers.filter((item: User) =>
        item.email?.includes(term)
      );
      setListUser(cloneListUsers);
    } else {
      fetchUsers();
    }
  }, 300);

  const handleSort = (sortBy: 'asc' | 'desc', sortField: string) => {
    setSortBy(sortBy);
    setSortField(sortField);
    let cloneListUsers = _.cloneDeep(listUsers);
    cloneListUsers = _.orderBy(cloneListUsers, [sortField], [sortBy]);
    setListUser(cloneListUsers);
  };

  return (
    <div className="relative min-h-screen md:flex">
      <SideNavbar />
      <div className="w-full p-10">
        <div className="text-center text-4xl font-semibold">
          <h1>MANEGER USER</h1>
        </div>
        <div className="mt-20 flex items-center justify-between">
          <div>
            <div className="flex justify-center">
              <div className="mb-3 xl:w-96">
                <input
                  onChange={(e) => handleSearch(e)}
                  type="text"
                  className="form-control m-0 block w-80 rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div>
              <ButtonM
                onClick={() => handleRefresh()}
                icon="fa-solid fa-arrows-rotate"
                color="bg-pink-600"
              />
            </div>
            <div>
              <ButtonM icon="fa-solid fa-file-excel" color="bg-green-600" />
            </div>
            <div>
              <ButtonM
                onClick={() => {
                  setIsShowModalUser(true);
                  setActionModalUser("CREATE");
                }}
                icon="fa-solid fa-plus"
                color="bg-blue-600"
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="border-b">
                      <tr>
                        <th
                          scope="col"
                          className=" px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          <span className="mr-1">ID</span>
                          <span className="">
                            <i
                              className="fa-solid fa-arrow-down cursor-pointer"
                              onClick={() => handleSort("desc", "id")}
                            ></i>
                            <i
                              className="fa-solid fa-arrow-up cursor-pointer"
                              onClick={() => handleSort("asc", "id")}
                            ></i>
                          </span>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          <span className="mr-1">Email</span>
                          <span className="">
                            <i
                              className="fa-solid fa-arrow-down cursor-pointer"
                              onClick={() => handleSort("desc", "email")}
                            ></i>
                            <i
                              className="fa-solid fa-arrow-up cursor-pointer"
                              onClick={() => handleSort("asc", "email")}
                            ></i>
                          </span>
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Username
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          GroupID
                        </th>
                        <th
                          scope="col"
                          className=" px-6 py-4 text-left text-sm font-medium text-gray-900"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {listUsers && listUsers.length > 0 ? (
                        <>
                          {listUsers.map((items: User, index) => {
                            return (
                              <tr key={items.id} className="border-b">
                                <th className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-900">
                                  {(curentPage - 1) * curentLimit + index + 1}
                                </th>
                                <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-900">
                                  {items.id}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900">
                                  {items.email}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900">
                                  {items.username}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900">
                                  <td>{items.Group ? items.Group.name : ""}</td>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-left text-sm font-light text-gray-900">
                                  <div className="flex items-center justify-start gap-3">
                                    <div>
                                      <ButtonM
                                        onClick={() => handleEditUser(items)}
                                        icon="fa-solid fa-pen-to-square"
                                        color="bg-yellow-600"
                                      />
                                    </div>
                                    <div>
                                      <ButtonM
                                        onClick={() => handleDeleteUser(items)}
                                        icon="fa-solid fa-trash"
                                        color="bg-red-600"
                                      />
                                    </div>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}{" "}
                        </>
                      ) : (
                        <>
                          <tr>
                            <td>Not Found Users</td>
                          </tr>
                        </>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[55%] right-[45%] bottom-10">
        {totalPages > 0 && (
          <div className="flex items-center justify-center">
            <ReactPaginate
              nextLabel={
                <>
                  <CaretRight size={28} />
                </>
              }
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPages}
              previousLabel={
                <>
                  <CaretLeft size={28} />
                </>
              }
              pageClassName="pagePagiante"
              pageLinkClassName="page-link"
              previousClassName="prenextPaginate"
              previousLinkClassName="page-link"
              nextClassName="prenextPaginate"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="flex gap-3 items-center justify-center"
              activeClassName="activePaginate"
              // renderOnZeroPageCount={null}
            />
          </div>
        )}
      </div>
      <ModalDeleteUser
        dataModal={dataModal}
        isShowModelDelete={isShowModelDelete}
        handleCloseDelete={handleCloseDelete}
        confirmDeleteUser={confirmDeleteUser}
      />
      <ModalUser
        dataModalUser={dataModalUser}
        action={actionModalUser}
        onHide={onHideModalUser}
        show={isShowModalUser}
      />
    </div>
  );
};

export default ManageUser;
