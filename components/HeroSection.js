import React from "react";
import Image from "next/image";
import Logo from "@/public/images/profile.png";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto md:px-8 px-4 ">
      <div className="flex lg:flex-row flex-col  justify-between md:flex   place-items-center py-16">
        <div>
          <h1 className="text-[48px] tracking-[-0.96px] leading-[56px]">
            Hello I'm{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Vikas Mourya.
            </span>
          </h1>
          <h1 className="text-[48px] font-extrabold tracking-[-0.96px]">
            Full-stack{" "}
            <span className="textt text-[48px] font-extrabold text-white leading-[56px]">
              Developer
            </span>
          </h1>
          <h1 className="text-[48px] tracking-[-0.96px]">
            Based In{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px] ">
              India
            </span>
          </h1>
          <p className="w-full  lg:w-1/2">
            {" "}
            Full Stack Developer with over 20 years of extensive experience in
            crafting innovative and scalable web solutions. My expertise
          </p>
        </div>
        <div>
          <Image
            src={Logo}
            layout="responsive"
            alt="hello iam"
            className="images grayscale hover:grayscale-0"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex list-none gap-5 text-[20px]">
          <li className="border-black text-white bg-black  border-2 p-[16px] rounded-lg">
            <FaXTwitter />
          </li>
          <li className="border-black border-2 p-[16px] rounded-lg">
            <FaInstagram />
          </li>
          <li className="border-black border-2 p-[16px] rounded-lg">
            <FaLinkedinIn />
          </li>
        </div>
        <div>{/* <hr  width={ '50%'} /> */}</div>
      </div>
    </div>
  );
};

export default HeroSection;
