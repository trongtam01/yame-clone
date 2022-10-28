import { Box, Modal } from "@mui/material";
import React from "react";
import { User } from "../../../typings";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  height: "max-content",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "5px",
};

interface Props {
  dataModal: User;
  isShowModelDelete: boolean;
  handleCloseDelete: () => void;
  confirmDeleteUser: () => void;
}

const ModalDeleteUser = ({
  dataModal,
  isShowModelDelete,
  handleCloseDelete,
  confirmDeleteUser,
}: Props) => {
  return (
    <Modal
      open={isShowModelDelete}
      onClose={handleCloseDelete}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative h-full w-full max-w-md md:h-auto">
            <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <button
                onClick={() => handleCloseDelete()}
                type="button"
                className="absolute top-3 right-2.5 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="popup-modal"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure delete this user: {dataModal.username} ?
                </h3>
                <button
                  onClick={() => confirmDeleteUser()}
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="mr-2 inline-flex items-center rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-red-300 hover:bg-red-800 dark:focus:ring-red-800"
                >
                  Yes, I'm sure
                </button>
                <button
                  onClick={() => handleCloseDelete()}
                  data-modal-toggle="popup-modal"
                  type="button"
                  className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-gray-600 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalDeleteUser;
