import React from "react";
import orangelogo from "../FirstPage/Images/Orangelogo.png";
import bluelogo from "../FirstPage/Images/Bluelogo.png";
import Spanel from "./Images/Spanel.png";
import Rangle from "./Images/Rangle.png";
import Rmaterial from "./Images/Rmaterial.png";
import Rage from "./Images/Rage.png";
import Rpitch from "./Images/Rpitch.png";
import Rshade from "./Images/Rshade.png";
import Solpanel from "./Images/Solpanel.png";

function SecondPage() {
  return (
    <div className="max-w-[1440px] min-w-[1200px] -mt-32 container flex">
      <div className="container ml-[370px] xl2:ml-[430px] s:max-w-[800px] mb-24">
        <div className="content xl2:max-w-[980px] s:max-w-[800px]">
          <p className="font-semibold text-4xl pt-5 pl-4">
            Solar Panel Installation
          </p>

          <div className="pl-4 pt-5">
            <p className="font-semibold">
              Roof Types Suitable for Solar Panel Installation
            </p>
            <p>
              Discover the best roofs for installing solar panels, such as
              pitched roofs, flat roofs, and metal roofs. Gain insights into the
              factors to consider when choosing roof materials and their
              compatibility with solar panel mounting.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-2xl">
              How to decide which Roof Type is Suitable for Solar Panel
              Installation?
            </p>
          </div>

          <div className="flex flex-row pt-16 justify-center">
            <div className="w-[100px] ml-4 mt-[10px]">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="justify-center mt-14 ml-[-50px]">
              <img className="max-w-[700px] items-center" src={Spanel} alt="" />
            </div>

            <div className="w-[100px] mt-[415px] ml-[-35px]">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Roof Orientation and Angle:</p>
            <ul className="list-disc ml-9">
              <li>
                South-facing roofs generally receive the most sunlight
                throughout the day and are considered ideal for solar panel
                installation.
              </li>
              <li>
                East and west-facing roofs can also be suitable, although they
                may produce slightly less energy compared to south-facing roofs.
              </li>
              <li>
                North-facing roofs are generally less desirable due to limited
                sunlight exposure.
              </li>
            </ul>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={Rangle} alt="" />
            </div>

            <div className="mt-[280px] ml-[-37px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Roof Material:</p>
            <ul className="list-disc ml-9">
              <li>
                Different roofing materials have varying degrees of suitability
                for solar panel installation.
              </li>
              <li>
                Asphalt shingles, metal roofs, and concrete tiles are commonly
                used and can easily accommodate solar panels.
              </li>
              <li>
                Clay or slate tiles may require additional precautions during
                installation to ensure proper sealing and stability.
              </li>
            </ul>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={Rmaterial} alt="" />
            </div>

            <div className="mt-[280px] ml-[-37px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Roof Age and Condition:</p>
            <ul className="list-disc ml-9">
              <li>
                Consider the age and condition of your roof before installing
                solar panels.
              </li>
              <li>
                If your roof is nearing the end of its lifespan, it may be
                advisable to replace it before installing solar panels to avoid
                future complications.
              </li>
            </ul>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={Rage} alt="" />
            </div>

            <div className="mt-[280px] ml-[-37px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Roof Shape and Pitch:</p>
            <ul className="list-disc ml-9">
              <li>
                The shape and pitch of your roof can impact solar panel
                installation.
              </li>
              <li>
                A roof with a simple, unobstructed shape and a moderate pitch is
                generally easier to work with.
              </li>

              <li>
                Steeply pitched roofs may require additional mounting equipment
                and careful installation techniques.
              </li>
            </ul>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={Rpitch} alt="" />
            </div>

            <div className="mt-[280px] ml-[-37px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Shade and Obstructions:</p>
            <ul className="list-disc ml-9">
              <li>
                Assess the amount of shade your roof receives throughout the
                day.
              </li>
              <li>
                Trees, neighboring buildings, or other obstructions can
                significantly reduce solar panel efficiency.
              </li>

              <li>
                Ideally, the roof should have minimal shading to maximize
                sunlight exposure.
              </li>
            </ul>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={Rshade} alt="" />
            </div>

            <div className="mt-[230px] ml-[-39px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Structural Integrity:</p>
            <ul className="list-disc ml-9">
              <li>
                Ensure that your roof has sufficient structural integrity to
                support the weight of solar panels.
              </li>
              <li>
                Consult with a structural engineer or a qualified solar
                installer to assess the load-bearing capacity of your roof.
              </li>

              <p>
                Remember, it is essential to consult with a professional solar
                installer who can evaluate your specific roof type and provide
                customized recommendations. They will consider factors such as
                roof orientation, material, condition, and other site-specific
                variables to determine the most suitable approach for installing
                solar panels on your roof.
              </p>
            </ul>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={Solpanel} alt="" />
            </div>

            <div className="mt-[230px] ml-[-39px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
