import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src="/background.jpg" alt="Background" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
    </div>
  );
}
