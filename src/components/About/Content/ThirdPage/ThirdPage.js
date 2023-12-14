import orangelogo from "../FirstPage/Images/Orangelogo.png";
import bluelogo from "../FirstPage/Images/Bluelogo.png";

import Bifapanel from "./Images/Bifapanel.png";
import BuildIntepanel from "./Images/BuildIntepanel.png";
import Inventerpanel from "./Images/Inventerpanel.png";
import Micropanel from "./Images/Micropanel.png";
import Monopanel from "./Images/Monopanel.png";
import Polypanel from "./Images/Polypanel.png";
import Rintegrity from "./Images/Rintegrity.png";
import Shinglespanel from "./Images/Shinglespanel.png";
import Solarinventpanel from "./Images/Solarinventpanel.png";
import Thinpanel from "./Images/Thinpanel.png";

export default function ThirdPage() {
  return (
    <div className="max-w-[1440px] min-w-[1200px] -mt-32 container flex mb-24 ">
      <div className="space-y-5 font-semibold text-left text-sm text-white mt-[120px] cursor-pointer ">
        <div className="sidebar bg-[#235688] justify-center space-y-3 pl-9 top-0 pt-14 h-[100%] w-[350px] bg-fixed fixed">
          <p className="hover:text-slate-300">All About Solar Power</p>
          <p className="hover:text-slate-300">Solar Panel Installation</p>
          <p className="hover:text-slate-300">
            Exploring Different Types of Solar Panels
          </p>
          <p className="hover:text-slate-300">
            Calculating the Budget for Solar Installation
          </p>
          <p className="hover:text-slate-300">
            A Guide to Finding the Right Solar Installer
          </p>
          <p className="hover:text-slate-300">
            Steps to Get Started with Solar Energy
          </p>
          <p className="hover:text-slate-300">
            In Which Category Dom You Belong to?
          </p>
        </div>
      </div>

      <div className="container  s:max-w-[1000px]  ml-[370px] ">
        <div className="content xl2:max-w-[980px] s:max-w-[800px]    ">
          <p className="font-semibold text-4xl pt-5 pl-4">
            Exploring Different Types of Solar Panels
          </p>

          <p className="pl-4 pt-6 ">
            If you're interested in using solar energy, there are several
            different types of solar panels to choose from. Each type has its
            own special features and advantages. Let's explore the most commonly
            used solar panels in the industry today.
          </p>

          <div className="pl-4 pt-16 ">
            <p className="font-semibold text-2xl">
              How to decide which Roof Type is Suitable for Solar Panel
              Installation?
            </p>
          </div>

          <div className="flex flex-row pt-16  justify-center">
            <div className=" w-[100px]  ml-4  mt-[5px] ">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center mt-10 ml-[-50px] ">
              <img
                className="max-w-[700px] items-center"
                src={Rintegrity}
                alt=""
              />
            </div>

            <div className=" w-[100px] mt-[425px] ml-[-35px]">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Monocrystalline Solar Panels </p>
            <p>
              Monocrystalline solar panels are created using a solitary crystal
              structure, usually made of silicon. These panels are recognized
              for their impressive efficiency and stylish black look.
              Monocrystalline panels work effectively in direct sunlight and are
              a favored option for both homes and businesses.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Monopanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Polycrystalline Solar Panels </p>
            <p>
              Polycrystalline solar panels are created by combining multiple
              pieces of silicon, which gives them a textured, blue-speckled
              look. Although they are not as efficient as monocrystalline
              panels, they provide a cost-effective solution for solar
              installations. Polycrystalline panels are versatile and work
              effectively in different weather conditions.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Polypanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Thin-Film Solar Panels </p>
            <p>
              Thin-film solar panels are light and flexible, making them perfect
              for a variety of uses. They are created by placing a thin layer of
              semiconductor material onto a base. While thin-film panels are not
              as efficient as traditional ones, they can still be used in
              situations where regular panels are not suitable, such as curved
              surfaces or portable solar devices.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Thinpanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Bifacial Solar Panels </p>
            <p>
              Bifacial solar panels are designed to capture sunlight from both
              sides, which helps to maximize their energy generation. These
              panels can harness direct sunlight from above and also utilize the
              reflected light from the ground, making them more efficient
              overall. Typically, bifacial panels are installed on elevated
              structures or in areas where there is a high level of
              reflectivity.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Bifapanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Solar Shingles </p>
            <p>
              Solar shingles, or solar roof tiles, seamlessly blend in with
              regular roofing materials, offering both protection for the roof
              and the ability to generate electricity. They are a visually
              appealing choice for homeowners who prioritize both functionality
              and design.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Shinglespanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">
              Building-Integrated Photovoltaics (BIPV){" "}
            </p>
            <p>
              BIPV stands for Building Integrated Photovoltaics, which means
              incorporating solar panels into building materials like windows,
              facades, or walls. Instead of regular building components, these
              panels serve as a renewable energy source. BIPV combines
              functionality and sustainable design, enabling structures to
              produce electricity without compromising their architectural
              integrity.
            </p>

            <p>
              Knowing the various kinds of solar panels allows people and
              companies to make well-informed choices when switching to solar
              power. Whether you prefer the excellent efficiency of
              monocrystalline panels, the affordability of polycrystalline
              panels, or the flexibility of thin-film panels, there's a solar
              option for everyone. Discover the potential and embrace the
              benefits of solar energy.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={BuildIntepanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">
              Solar Inverters: Powering Your Solar PV System{" "}
            </p>
            <p>
              Solar inverters are essential for capturing solar energy and
              transforming it into usable electricity. They serve as the core
              component of a solar photovoltaic (PV) system, guaranteeing
              efficient operation and maximum power generation. Now, let's delve
              into the main features of solar inverters and their importance in
              the realm of solar energy.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Solarinventpanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">
              Role of Solar Inverters in a Solar PV System:
            </p>
            <p>
              Solar inverters play a crucial role in a solar PV system by
              converting the DC electricity generated by solar panels into AC
              electricity that can be used to power appliances and feed into the
              electrical grid. They act as the middleman between the solar
              panels and electrical devices, ensuring smooth compatibility and
              efficient energy transfer.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Types of Solar Inverters:</p>
            <p>
              There are various kinds of solar inverters to choose from, each
              with their own set of distinct advantages and characteristics. The
              three primary types are string inverters, microinverters, and
              power optimizers.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">String Inverters:</p>
            <p>
              String inverters are frequently utilized in solar photovoltaic
              (PV) systems. They are linked to a group of solar panels, called a
              string, and transform the collective DC electricity into AC
              electricity. String inverters are affordable and well-suited for
              installations with consistent panel alignment and limited shading.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Inventerpanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Microinverters </p>
            <p>
              Each solar panel is equipped with microinverters, which enable
              independent power conversion. This design boosts system
              performance, particularly in installations with shading or panel
              mismatch. Additionally, microinverters provide advanced monitoring
              features, allowing for tracking of individual panel performance.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28 mt-2">
              <img src={orangelogo} className="w-[80px]" alt="" />
            </div>

            <div className="max-w-[390px] mt-12 ml-[-40px] ">
              <img src={Micropanel} alt="" />
            </div>

            <div className="mt-[248px] ml-[-40px]">
              <img src={bluelogo} className="w-[80px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Power Optimizers </p>
            <p>
              Power optimizers are used alongside string inverters to enhance
              the performance of solar panels. These optimizers are connected to
              each panel and work by maximizing the power output, ensuring that
              the panels generate the most energy possible, even if they are
              shaded or positioned unevenly. By providing monitoring at the
              panel level, power optimizers improve the overall efficiency and
              performance of the solar system.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">
              Monitoring and Troubleshooting Solar Inverters:{" "}
            </p>
            <p>
              Monitoring solar inverters regularly is important to ensure the
              best performance of the system. Many inverters have monitoring
              systems built-in, which give users real-time information on energy
              production. This allows users to keep track of their system's
              performance and quickly address any problems. Troubleshooting
              techniques can be used to identify and fix any faults or
              malfunctions, ensuring that the solar PV system operates smoothly.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">
              Inverter Efficiency and Power Output:{" "}
            </p>
            <p>
              When selecting a solar inverter, it's important to consider its
              efficiency. Inverters with higher efficiency can convert a larger
              portion of DC electricity into usable AC electricity, which leads
              to improved overall system efficiency. The efficiency of the
              inverter directly affects the power output of the solar PV system
              and has an impact on the energy yield and financial returns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
