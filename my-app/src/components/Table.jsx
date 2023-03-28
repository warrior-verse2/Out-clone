import { useState } from "react";
import PopUpModal from "../components/PopupModal";

const Table = ({ error, openModal }) => {
  const [modalIsOpen, setModalIsOpen] = useState(openModal || false);

  function handleOpenModal() {
    setModalIsOpen(true);
  }

  function handleCloseModal() {
    setModalIsOpen(false);
  }
  return (
    <div className="flex-1 p-8 mt-8 text-gray-500 text-base">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-1">
          <span>My Files</span>
          <img src="./img/chevron-right.svg" alt="" />
          <span>Shared Files</span>
          <img src="./img/chevron-right.svg" alt="" />
          <span>Member Files</span>
        </div>
        <div class="overflow-hidden rounded-lg shadow-lg ring-[0.05rem] ring-gray-300">
          <table class="table-fixed w-full">
            <thead className="text-sm text-gray-700 font-normal text-start">
              <tr className="cursor-pointer ">
                <th class="w-1/3 p-3 border-b border-gray-300 font-medium text-start lg:pl-16 hover:bg-gray-200">
                  <div className="flex items-center gap-2">
                    <img src="./img/file.svg" alt="" />
                    <div className="flex items-center gap-4">
                      <span>Name</span>
                      <img src="./img/chevron-down" alt="" />
                    </div>
                  </div>
                </th>
                <th class="w-1/3 p-3 border-b border-gray-300 font-medium text-start lg:pl-16 hover:bg-gray-200">
                  <div className="flex items-center gap-2">
                    <span>Modified</span>
                    <img src="./img/down-arrow.svg" alt="" />
                    <img
                      src="./img/chevron-down.svg"
                      alt=""
                      className="w-0 invisible md:visible md:w-auto"
                    />
                  </div>
                </th>
                <th class="w-1/3 p-3 border-b border-gray-300 font-medium text-start lg:pl-16 hover:bg-gray-200">
                  <div className="flex items-center gap-2">
                    <span>File size</span>
                    <img src="./img/chevron-down.svg" alt="" />
                  </div>
                </th>
                <th class="md:w-1/3 md:p-3 border-b border-gray-300 lg:pl-16 w-0 h-0 invisible md:visible md:hover:bg-gray-200">
                  <div className="flex items-center gap-4">
                    <span>Sharing</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody
              className="text-[0.8rem]"
              id="main"
              onClick={handleOpenModal}
            >
              <tr className="cursor-pointer hover:bg-gray-200">
                <td class="w-1/3 p-3 border-b border-gray-300 lg:pl-16">
                  <div className="flex items-center gap-4">
                    <img src="./img/folder-brown.svg" alt="" />
                    <span>EMC 2023 Highlights</span>
                  </div>
                </td>
                <td class="w-1/3 p-3 border-b border-gray-300 lg:pl-16">
                  30/03/2023
                </td>
                <td class="w-1/3 p-3 border-b border-gray-300 lg:pl-16">
                  4.8MB
                </td>
                <td class="md:w-1/3 md:p-3 border-b border-gray-300 lg:pl-16 w-0 invisible md:visible">
                  Private
                </td>
              </tr>
              <tr className="cursor-pointer hover:bg-gray-200">
                <td class="w-1/3 p-3 border-b border-gray-300 lg:pl-16">
                  <div className="flex items-center gap-4">
                    <img src="./img/pdf.svg" alt="" />
                    <span>EMC 2023 Visitor Request</span>
                  </div>
                </td>
                <td class="w-1/3 p-3 border-b border-gray-300 lg:pl-16">
                  30/03/2023
                </td>
                <td class="w-1/3 p-3 border-b border-gray-300 lg:pl-16">
                  4.8MB
                </td>
                <td class="md:w-1/3 md:p-3 border-b border-gray-300 lg:pl-16 w-0 invisible md:visible">
                  Private
                </td>
              </tr>
              <PopUpModal
                error={error}
                isOpen={modalIsOpen}
                handleClose={handleCloseModal}
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
