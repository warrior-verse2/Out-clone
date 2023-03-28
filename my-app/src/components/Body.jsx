import { useState } from "react";
import SideNav from "./SideNav";
import Table from "./Table";
import TopBar from "./TopBar";

const Body = ({ isOpen, error, openModal }) => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selected, setSelected] = useState(1);

  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <div className="flex ">
      <SideNav />
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopBar />
        <Table isOpen={isOpen} error={error} openModal={openModal} />
      </div>
    </div>
  );
};

export default Body;
