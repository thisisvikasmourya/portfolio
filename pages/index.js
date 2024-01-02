import Image from "next/image";
import { Inter } from "next/font/google";
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import MySkills from "@/components/MySkills";
import MyExperience from "@/components/MyExperience";
import MyProject from "@/components/MyProject";
import MyTestimonials from "@/components/MyTestimonials";
import MyContact from "@/components/MyContact";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MySkills />
      <MyExperience />
      <AboutMe />
      <MyProject />
      <MyTestimonials />
      <MyContact />
    </main>
  );
}
