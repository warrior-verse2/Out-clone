import NavBar from "@/components/NavBar";
import Body from "@/components/Body";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/fOneDrive.svg" />
        <title>Microsoft OneDrive</title>
      </Head>
      <div className="bg-white h-screen text-sm flex flex-col">
        <NavBar />
        <Body />
      </div>
    </>
  );
}
