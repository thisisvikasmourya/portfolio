import React from "react";
import pro1 from "../public/images/imagepro.png";
import Image from "next/image";
const MyProject = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-screen-xl mx-auto md:px-8 px-4 py-20">
        <div>
          <h1 className="text-[48px] tracking-[-0.96px] leading-[70px] py-1 text-center ">
            My{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Projects
            </span>
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  justify-between md:flex   place-items-center py-5">
          <div className="w-full  lg:w-1/3">
            <Image
              src={pro1}
              layout="responsive"
              alt="hello iam"
              className="images grayscale hover:grayscale-0"
            />
          </div>
          <div className="w-full  lg:w-1/2">
            <p className="text-xl font-bold">01</p>
            <p className="py-3 text-xl font-bold">
              {" "}
              Crypto Screener Application{" "}
            </p>
            <p className="py-3">
              {" "}
              Beyond the code, I'm active on Instagram, where I share tech
              insights and embrace the "build in public" philosophy. You can
              also find me exploring the startup landscape on Indie Hacker.
              Connect with me on Instagram for tech-related discussions or check
              out my GitHub to explore my projects hands-on. Let's collaborate
              and bring exceptional digital experiences to life!
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  justify-between md:flex   place-items-center py-5">
          <div className="w-full  lg:w-1/2">
            <p className="text-xl font-bold">02</p>
            <p className="py-3 text-xl font-bold">
              {" "}
              Crypto Application{" "}
            </p>
            <p className="py-3">
              {" "}
              Beyond the code, I'm active on Instagram, where I share tech
              insights and embrace the "build in public" philosophy. You can
              also find me exploring the startup landscape on Indie Hacker.
              Connect with me on Instagram for tech-related discussions or check
              out my GitHub to explore my projects hands-on. Let's collaborate
              and bring exceptional digital experiences to life!
            </p>
          </div>
          <div className="w-full  lg:w-1/3">
            <Image
              src={pro1}
              layout="responsive"
              alt="hello iam"
              className="images grayscale hover:grayscale-0"
            />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4  justify-between md:flex   place-items-center py-5">
          <div className="w-full  lg:w-1/3">
            <Image
              src={pro1}
              layout="responsive"
              alt="hello iam"
              className="images grayscale hover:grayscale-0"
            />
          </div>
          <div className="w-full  lg:w-1/2">
            <p className="text-xl font-bold">03</p>
            <p className="py-3 text-xl font-bold">
              {" "}
              Crypto Screener Application{" "}
            </p>
            <p className="py-3">
              {" "}
              Beyond the code, I'm active on Instagram, where I share tech
              insights and embrace the "build in public" philosophy. You can
              also find me exploring the startup landscape on Indie Hacker.
              Connect with me on Instagram for tech-related discussions or check
              out my GitHub to explore my projects hands-on. Let's collaborate
              and bring exceptional digital experiences to life!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
