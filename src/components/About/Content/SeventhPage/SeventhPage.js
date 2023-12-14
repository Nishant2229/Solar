import React from "react";

const SeventhPage = () => {
  return (
    <div className="max-w-[1440px] min-w-[1200px] -mt-32 container flex">
      <div className="space-y-5 font-semibold text-sm text-white mt-[120px] cursor-pointer ">
        <div className="sidebar xl2:w-[400px] bg-[#235688] justify-center space-y-3 pl-9 top-0 pt-14 h-[100%] w-[350px] bg-fixed fixed">
          <p className="hover:text-slate-300">All About Solar Power</p>
          <p className="hover:text-slate-300">Solar Panel Installation</p>
          <p className="hover:text-slate-300">
            Exploring Different Types of Solar Panels{" "}
          </p>
          <p className="hover:text-slate-300">
            Calculating the Budget for Solar Installation
          </p>
          <p className="hover:text-slate-300">
            A Guide to Finding the Right Solar Installer{" "}
          </p>
          <p className="hover:text-slate-300">
            Steps to Get Started with Solar Energy
          </p>
          <p className="hover:text-slate-300">
            In Which Category Dom You Belong to?
          </p>
        </div>
      </div>

      <div
        className="container xl2:ml-[420px] ml-[350px] xl2:max-w-[1000px]
                       md:max-w-[830px] s:max-w-[830px]"
      >
        <div className="content">
          <div className="font-semibold text-3xl pt-5 pl-4">
            <p>In Which Category Do You Belong to?</p>
          </div>

          <div className="pl-4 pt-16">
            <p>
              Have you ever pondered the ways in which various sectors in Indore
              contribute to its energy consumption? From thriving industries to
              comfortable residences, each sector plays a distinct role in
              shaping the city's energy landscape. Let's delve deeper into how
              industries, residents, commercial establishments, government
              facilities, institutional buildings, and the social sector differ
              in their energy usage patterns.
            </p>
          </div>

          <div className="pl-4 pt-16 text-lg">
            <p className="font-semibold">Residential Sector:</p>

            <p>
              <span className="font-semibold">Usage:</span>On average,
              households in Indore typically use approximately 2,000 to 2,500
              kilowatt-hours (kWh) of electricity each year.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Energy Mix:</span> The primary
              source of energy is mainly derived from electricity provided by
              the grid, although there is a growing inclination towards
              utilizing solar energy as a means to decrease utility costs.
            </p>

            <p className="pt-6">
              Many people become interested in alternative sources such as solar
              power due to their concerns about rising electricity bills.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-lg">Commercial Sector:</p>

            <p>
              <span className="font-semibold">Usage:</span> Commercial
              establishments, including shops and offices, typically consume
              3,000-5,000 kWh of electricity per year.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Energy Mix:</span> Primarily
              reliant on grid electricity, but some businesses are exploring
              solar options to reduce operating costs.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Challenges:</span> Balancing
              energy needs with operational costs, especially for small and
              medium-sized enterprises.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-lg">Industrial Sector:</p>

            <p>
              <span className="font-semibold">Usage:</span> Industries located
              in Indore may have significant energy needs, with yearly usage
              varying from 50,000 kWh to several hundred thousand kWh.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Energy Mix:</span> In various
              industries, grid electricity is a crucial source of power, but
              there are also some sectors that are embracing renewable energy
              options in order to achieve their sustainability targets.
            </p>

            <p className="pt-6">
              Industries face two major challenges: guaranteeing a continuous
              power supply and effectively managing energy expenses.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-lg">Government Sector:</p>

            <p>
              <span className="font-semibold">Usage:</span> Government buildings
              and offices typically use between 10,000 and 20,000 kilowatt-hours
              (kWh) of electricity each year.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Energy Mix:</span> Most of the
              energy mix is dependent on electricity from the grid, although
              certain government facilities are starting to embrace
              energy-efficient technologies.
            </p>

            <p className="pt-6">
              One of the challenges faced is finding a balance between limited
              budget resources and the requirement to update infrastructure in
              order to improve energy efficiency.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-lg">Institutional Sector:</p>

            <p>
              <span className="font-semibold">Usage:</span> Educational
              institutions and healthcare facilities have a wide range of energy
              requirements, varying from 5,000 to 15,000 kWh annually.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Energy Mix:</span> Many
              institutions typically rely on the grid for their energy needs,
              but there is a growing trend of incorporating solar panels as a
              means to achieve long-term cost savings.
            </p>

            <p className="pt-6">
              One of the challenges we face is finding a way to meet our energy
              needs while still prioritizing education and healthcare services.
              It's crucial that we find a solution that doesn't compromise these
              essential sectors.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-lg"> Social Sector:</p>

            <p>
              <span className="font-semibold">Usage:</span> Social sector
              organizations, such as non-governmental organizations (NGOs) and
              community centers, tend to have lower energy usage, with an
              average annual consumption of 1,000-2,000 kWh.
            </p>

            <p className="pt-6">
              <span className="font-semibold">Energy Mix:</span> Many
              individuals often depend on grid electricity as their main source
              of energy due to limited resources. However, there is a growing
              interest in exploring sustainable alternatives.
            </p>

            <p className="pt-6 pb-10">
              Challenges arise when we aim to reduce energy expenses in order to
              allocate additional resources towards social initiatives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeventhPage;
