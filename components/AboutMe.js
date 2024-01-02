import React from "react";
import Image from "next/image";
import About from "@/public/images/aboutme.jpg";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-8 px-4 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  justify-between md:flex   place-items-center py-16">
        <div className="w-full  lg:w-1/2">
          <Image
            src={About}
            layout="responsive"
            alt="hello iam"
            className="images grayscale hover:grayscale-0"
          />
        </div>
        <div className="w-full  lg:w-1/2">
          <h1 className="text-[48px] tracking-[-0.96px] leading-[70px] py-6 ">
            About{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Me
            </span>
          </h1>
          <p>
            {" "}
            I am Vikas Mourya, a dedicated full-stack developer in my
            mid-twenties, specializing in React.js and Node.js. Starting my web
            development journey in 2021, I have evolved over the years,
            embracing challenges and learning the latest technologies.
          </p>
          <p className="py-3">
            {" "}
            Now, with a few years of experience, I am deeply immersed in
            crafting cutting-edge web applications using modern tech stacks such
            as Next.js, TypeScript, Nestjs, Tailwindcss, and Supabase. My focus
            is on seamlessly blending technical expertise with visual finesse,
            ensuring optimal user experiences through pixel-perfect design and
            high-performance code.
          </p>
          <p className="py-3">
            {" "}
            Beyond the code, I'm active on Instagram, where I share tech
            insights and embrace the "build in public" philosophy. You can also
            find me exploring the startup landscape on Indie Hacker. Connect
            with me on Instagram for tech-related discussions or check out my
            GitHub to explore my projects hands-on. Let's collaborate and bring
            exceptional digital experiences to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
