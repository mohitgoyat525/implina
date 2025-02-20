import Community from "@/components/Community";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import ImpelinaBox from "@/components/ImpelinaBox";
import KickBox from "@/components/KickBox";
import Stories from "@/components/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpelinaBox />
      <HowItWork />
      <KickBox />
      <Community/>
      <Stories/>
    </>
  );
}
