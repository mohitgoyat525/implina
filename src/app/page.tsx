import Community from "@/components/Community";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import HowItWork from "@/components/HowItWork";
import ImpelinaBox from "@/components/ImpelinaBox";
import KickBox from "@/components/KickBox";
import Stories from "@/components/Stories";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ImpelinaBox />
      <HowItWork />
      <KickBox />
      <Community/>
      <Stories />
      <Faq />
      <Footer/>
    </>
  );
}
