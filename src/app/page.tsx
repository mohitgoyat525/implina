import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import ImpelinaBox from "@/components/ImpelinaBox";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpelinaBox />
      <HowItWork/>
    </>
  );
}
