import { useState } from "react";

const SideNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(1);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div
      className={`${isSidebarOpen ? "" : "hidden"} md:flex md:flex-shrink-0 `}
    >
      <div className="px-2 py-6 h-[49rem] w-[14rem] border-r-[0.08rem] border-gray-200 text-gray-700 flex flex-col justify-between">
        <div className="flex flex-col gap-5">
          <div className="text-gray-900 px-2">EMC 2023</div>
          <div
            onClick={() => handleClick(1)}
            className={
              selected === 1
                ? "flex items-center gap-2 border-l-2 border-[#0078D4] px-2"
                : "flex items-center gap-2 px-2"
            }
          >
            <img src="/img/folder.svg" alt="" />
            <div className="cursor-pointer">My files</div>
          </div>
          <div
            onClick={() => handleClick(2)}
            className={
              selected === 2
                ? "flex items-center gap-2 border-l-2 border-[#0078D4] px-2"
                : "flex items-center gap-2 px-2"
            }
          >
            <img src="/img/recent.svg" alt="" />
            <div className="cursor-pointer">Recent</div>
          </div>
          <div
            onClick={() => handleClick(3)}
            className={
              selected === 3
                ? "flex items-center gap-2 border-l-2 border-[#0078D4] px-2"
                : "flex items-center gap-2 px-2"
            }
          >
            <img src="/img/photo.svg" alt="" />
            <div className="cursor-pointer">Photos</div>
          </div>
          <div
            onClick={() => handleClick(4)}
            className={
              selected === 4
                ? "flex items-center gap-2 border-l-2 border-[#0078D4] px-2"
                : "flex items-center gap-2 px-2"
            }
          >
            <img src="/img/shared.svg" alt="" />
            <div className="cursor-pointer">Shared</div>
          </div>
          <div
            onClick={() => handleClick(5)}
            className={
              selected === 5
                ? "flex items-center gap-2 border-l-2 border-[#0078D4] px-2"
                : "flex items-center gap-2 px-2"
            }
          >
            <img src="/img/recycle.svg" alt="" />
            <div className="cursor-pointer">Recycle bin</div>
          </div>
        </div>
        <div className="px-2 flex flex-col gap-1 py-4">
          <span className="text-xs ">
            Get more storage for all your files and photos.
          </span>
          <a
            href="https://www.microsoft.com/en-us/microsoft-365/onedrive/compare-onedrive-plans?activetab=tab%3aprimaryr1"
            target="_blank"
          >
            <span className="text-xs underline text-[#0078D4]">
              learn more about storage plans
            </span>
          </a>

          <button className=" py-2 px-4 shadow-md  ring-1 ring-gray-200 rounded-sm my-4">
            <a
              className="flex items-center gap-2 justify-center"
              href="https://www.microsoft.com/en-us/microsoft-365/onedrive/compare-onedrive-plans?activetab=tab%3aprimaryr1"
              target="_blank"
            >
              <img src="./img/diamond2.svg" alt="" />
              Buy storage
            </a>
          </button>

          <a
            href="https://www.microsoft.com/en-us/microsoft-365/onedrive/download"
            target="_blank"
          >
            <span className="text-xs text-[#0078D4]">
              Get the OneDrive Apps
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
