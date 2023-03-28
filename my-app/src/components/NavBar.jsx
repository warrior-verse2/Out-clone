import { VscSearch } from "react-icons/vsc";

const NavBar = () => {
  return (
    <nav>
      <div className="bg-[#0078D4] h-12 flex justify-between items-center">
        <div className="px-4 flex gap-4">
          <div className="cursor-pointer">
            <img src="./img/menu.svg" alt="" />
          </div>
          <span className="text-base">OneDrive</span>
        </div>

        <div className="flex items-center invisible h-0 w-0 lg:h-full lg:w-[25rem] lg:visible">
          <div className="bg-white pl-2 py-[0.42rem] rounded-l-lg">
            <img src="/img/search.svg" alt="" />
          </div>
          <input
            type="text"
            placeholder="Search everything"
            className="py-[0.39rem] px-4 rounded-r-lg bg-white focus:outline-none text-slate-800 w-[25rem]"
          />
        </div>

        <div className="flex items-center px-4 gap-6">
          <img className="cursor-pointer" src="/img/diamond.svg" alt="" />
          <img className="cursor-pointer" src="/img/setting.svg" alt="" />
          <img className="cursor-pointer" src="/img/question.svg" alt="" />
          <div className="rounded-full cursor-pointer ring-1 p-1 ring-white">
            <img src="/img/profile.svg" alt="" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
