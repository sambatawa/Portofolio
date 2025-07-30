import Image from "next/image";
import bg from "../../public/bg2.png";
import Navbar from "@/components/Navbar";
import NavButton from "@/components/NavButton";
import ThreeScene from "@/components/model";


export default function Home() {
  return (
    <>
      <div className="flex w-screen h-screen flex-col relative bg-black">
        <Image src={bg} alt="Background" fill className="object-cover w-full h-full absolute inset-0 z-0" />
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <NavButton />
          <ThreeScene />
        </div>       
      </div>
    </>

    
  );
}
