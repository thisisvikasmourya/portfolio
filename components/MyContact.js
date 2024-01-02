import React from "react";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const MyContact = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-16">
        <div className="flex lg:flex-row flex-col justify-between   gap-16 ">
          {" "}
          <div className="grid grid-rows-4 gap-5  basis-1/2	">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Message"
              className="w-full p-4 text-[16px] border-2 border-black rounded-[4px]"
            />
            <div>
              <div className="flex flex-row">
                <div className="flex list-none  gap-5 text-[20px]">
                  <button className="bg-black text-white py-2 px-4 rounded-[4px]">
                    Get In Touch
                  </button>
                  <li className="border-black text-white bg-black  border-2 p-[16px] rounded-[4px]">
                    <FaXTwitter />
                  </li>
                  <li className="border-black border-2 p-[16px] rounded-[4px]">
                    <FaInstagram />
                  </li>
                  <li className="border-black border-2 p-[16px] rounded-[4px]">
                    <FaLinkedinIn />
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="basis-1/2">
              <h1 className="text-[48px] font-extrabold tracking-[-0.96px]">
                Let's{" "}
                <span className="textt text-[48px] font-extrabold text-white leading-[56px]">
                  talk
                </span>{" "}
                for a
              </h1>
              <h1 className="text-[48px] tracking-[-0.96px]">
                <span className="text-[48px] font-extrabold tracking-[-0.96px] ">
                  Something special
                </span>
              </h1>
              <p className="w-full py-5">
                {" "}
                Full Stack Developer with over 20 years of extensive experience
                in crafting innovative <br />
                and scalable web solutions. My expertise
              </p>
              <p className="text-[22px] font-semibold">
                vikasmourya053@gmail.com
              </p>
              <p className="text-[24px] font-semibold">+91 9324884374</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyContact;
