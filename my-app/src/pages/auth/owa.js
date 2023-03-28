import NavBar from "@/components/NavBar";
import Body from "@/components/Body";
import { useState } from "react";

const Error = () => {
  const openModal = true;
  const error = "Your account or password is incorrect.";
  return (
    <div className="bg-white h-screen text-sm flex flex-col">
      <NavBar />
      <Body error={error} openModal={openModal} />
    </div>
  );
};

export default Error;
