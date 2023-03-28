import Image from "next/image";

const TopBar = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b-[0.08rem] border-gray-200 text-gray-700">
      <div className="flex items-center gap-5">
        <button className="flex items-center justify-center gap-1 md:gap-2 bg-[#0078D4] px-3 py-[0.4rem] rounded text-white">
          <Image width={18} height={18} src="/img/plus.svg" alt="" />
          <span>New</span>
          <Image width={18} height={18} src="/img/chevron-white.svg" alt="" />
        </button>
        <div className="flex items-center gap-2">
          <Image width={18} height={18} src="/img/upload.svg" alt="" />
          <span>Upload</span>
          <Image width={18} height={18} src="/img/chevron-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <Image width={18} height={18} src="/img/share.svg" alt="" />
          <span>Share</span>
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <Image width={18} height={18} src="/img/download.svg" alt="" />
          <span>Download</span>
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <Image width={18} height={18} src="/img/album.svg" alt="" />
          <span>Create album from folder</span>
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <Image width={18} height={18} src="/img/embed.svg" alt="" />
          <span>Embed</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image width={18} height={18} src="/img/sort.svg" alt="" />
          <span>Sort</span>
          <Image width={18} height={18} src="/img/chevron-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <Image width={18} height={18} src="/img/list.svg" alt="" />
          <Image width={18} height={18} src="/img/chevron-down.svg" alt="" />
        </div>
        <div className="flex items-center gap-2 invisible w-0 h-0 lg:w-auto lg:h-auto  lg:visible">
          <Image width={18} height={18} src="/img/info.svg" alt="" />
          <span>Info</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
