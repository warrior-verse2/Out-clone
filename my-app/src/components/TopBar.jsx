const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b-[0.08rem] border-gray-200 text-gray-700">
      <div className="flex items-center gap-5">
        <button className="flex items-center justify-center gap-1 md:gap-2 bg-[#0078D4] px-3 py-[0.4rem] rounded text-white">
          <img src="./img/plus.svg" alt="" />
          <span>New</span>
          <img src="./img/chevron-white.svg" alt="" />
        </button>
        <div className="flex items-center gap-2">
          <img src="./img/upload.svg" alt="" />
          <span>Upload</span>
          <img src="./img/chevron-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <img src="./img/share.svg" alt="" />
          <span>Share</span>
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <img src="./img/download.svg" alt="" />
          <span>Download</span>
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <img src="./img/album.svg" alt="" />
          <span>Create album from folder</span>
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <img src="./img/embed.svg" alt="" />
          <span>Embed</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="./img/sort.svg" alt="" />
          <span>Sort</span>
          <img src="./img/chevron-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <img src="./img/list.svg" alt="" />
          <img src="./img/chevron-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <img src="./img/info.svg" alt="" />
          <span>Info</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
