import NavBar from "@/components/NavBar";
import Body from "@/components/Body";

export default function Home() {
  return (
    <div className="bg-white h-screen text-sm flex flex-col">
      <NavBar />
      <Body />
    </div>
  );
}
