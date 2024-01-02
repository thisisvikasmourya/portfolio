import { useState } from "react";
import { HiOutlineDownload } from "react-icons/hi";
import { AiFillAppstore } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { PiEyeClosed } from "react-icons/pi";

export default function Navbar() {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "About Me", path: "javascript:void(0)" },
    { title: "Skills", path: "javascript:void(0)" },
    { title: "Project", path: "javascript:void(0)" },
    { title: "Contact Me", path: "javascript:void(0)" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0 md:static py-2">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a
            href="javascript:void(0)"
            className="font-bold text-[20px]  flex place-items-center gap-1"
          >
            #thisisvikasmourya
          </a>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? (
                <p className="text-[20px] font-extrabold">#1</p>
              ) : (
                <p className="text-[20px] font-extrabold">#0</p>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className="text-black font-semibold tracking-[-0.4px] text-[20px]	 hover:text-indigo-600"
                >
                  <a href={item.path}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <a
            href="javascript:void(0)"
            className="py-3 px-6 text-white font-semibold  bg-black rounded-[4px] shadow"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
