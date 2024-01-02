import React from "react";

const MyExperience = () => {
  return (
    <div className="text-white bg-black">
      <div className="max-w-screen-xl mx-auto md:px-8 px-4 py-20 text-white bg-black">
        <div>
          <h1 className="text-[48px] tracking-[-0.96px] leading-[70px] py-6 text-center ">
            My{" "}
            <span className="text-[48px] font-extrabold tracking-[-0.96px]">
              {" "}
              Experience
            </span>
          </h1>
        </div>
        <div className="">
          <div className="py-4 border p-5 rounded-lg m-4">
            <div className="flex justify-between py-2">
              <h1>
                Full stack developer - Digital aided school (Mumbai Maharashtra)
              </h1>
              <h4>April-2022-present</h4>
            </div>
            <div className="text-sm">
              Developed code following common security practices and development
              design patterns Developed program logic for new applications based
              on fresh coding or revamped logic from existing applications.
              Analyzed project requirements, translating specifications into
              functional application components. Fixed bugs to solve problems
              and improve products and technologies.
            </div>
          </div>
          <div className="py-4 border p-5 rounded-lg m-4">
            <div className="flex justify-between py-2">
              <h1>
                Frontend developer(Intern) - Digital aided school (Mumbai
                Maharashtra)
              </h1>
              <h4>Nov 2021 - April 2022</h4>
            </div>
            <div className="text-sm">
              Developed code following common security practices and development
              design patterns Developed program logic for new applications based
              on fresh coding or revamped logic from existing applications.
              Analyzed project requirements, translating specifications into
              functional application components. Fixed bugs to solve problems
              and improve products and technologies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
