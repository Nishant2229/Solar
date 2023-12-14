import orangelogo from "./Images/Orangelogo.png";
import bluelogo from "./Images/Bluelogo.png";
import Home from "./Images/Home.png";
import Msme from "./Images/Msme.png";
import Building from "./Images/Building.png";
import Public from "./Images/Public.png";
import Factory from "./Images/Factory.png";
import Positive from "./Images/Positive.png";

export default function FirstPage() {
  return (
    <div className="max-w-[1440px] min-w-[1200px] -mt-32 container flex">
      <div className="container  ml-[370px] xl2:ml-[430px] s:max-w-[800px] mb-24  ">
        <div className="content xl2:max-w-[980px] s:max-w-[800px] ">
          <p className="font-semibold text-4xl pt-5 pl-4">
            All About Solar Power
          </p>
          <p className="pl-4 pt-6 ">
            Solar energy is a type of clean energy that comes from the sun. It
            is renewable and abundant, which means there is plenty of it
            available. Using solar energy has a lot of advantages, such as
            helping the environment, saving money, and giving us independence in
            terms of energy.
          </p>
          <p className="pl-4 pt-6 text-xl font-semibold ">
            Why Choose Solar Power?
          </p>

          <div className="flex flex-row pt-16 justify-center">
            <div className=" w-[100px]  ml-4  mt-[10px] ">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center mt-14 ml-[-50px] ">
              <img className="max-w-[700px] items-center" src={Home} alt="" />
            </div>

            <div className=" w-[100px] mt-[415px] ml-[-35px]">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Clean and Renewable: </p>
            <p>
              Solar energy is a clean and renewable source, which helps reduce
              our reliance on fossil fuels and decrease greenhouse gas
              emissions. This not only benefits the environment but also
              promotes a cleaner and healthier world.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Cost Savings: </p>
            <p>
              Using solar energy can lead to significant cost savings on
              electricity bills in the long run. This makes it a wise investment
              for both individuals and businesses, as it not only reduces
              expenses but also contributes to a sustainable future.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Energy Independence: </p>
            <p>
              With solar energy, users can achieve energy independence by
              generating their own electricity. This reduces dependence on the
              grid and allows individuals and businesses to have more control
              over their energy consumption, giving them the freedom to make
              sustainable choices.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Low Maintenance: </p>
            <p>
              Solar panels are low maintenance and have a long lifespan,
              providing a reliable and hassle-free energy solution. This means
              that once installed, they require minimal upkeep, allowing users
              to enjoy the benefits of solar energy without any additional
              stress or effort.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Incentives and Rebates </p>
            <p>
              Moreover, there are incentives, tax credits, and rebates offered
              by governments and utilities to encourage the adoption of solar
              energy. These financial incentives make solar energy even more
              attractive, both economically and environmentally, making it a
              smart financial investment for anyone considering going solar.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <div className=" pb-6 text-xl font-semibold ">
              Understanding the Basics of Solar Power
            </div>
            <p>
              Photovoltaic (PV) technology enables solar panels to convert
              sunlight into electricity by utilizing special semiconductor
              materials. On the other hand, solar thermal systems utilize the
              heat from the sun to produce hot water or generate steam for a
              wide range of applications.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Who Benefits from Solar Energy?</p>
          </div>

          <div className="flex flex-row pt-16 justify-center">
            <div className=" w-[100px]  ml-4  mt-[10px] ">
              <img src={orangelogo} className="" alt="" />
            </div>

            <div className="  justify-center mt-14 ml-[-50px] ">
              <img className="max-w-[700px] items-center" src={Msme} alt="" />
            </div>

            <div className=" w-[100px] mt-[355px] ml-[-35px]">
              <img src={bluelogo} className="" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Cost Savings: </p>
            <p>
              Solar energy helps MSMEs reduce their operational expenses by
              lowering electricity bills.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Energy Security: </p>
            <p>
              MSMEs can become self-sufficient in terms of energy supply and
              reduce the impact of power outages.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Enhanced Reputation: </p>
            <p>
              Embracing solar energy showcases a commitment to sustainability
              and can attract environmentally conscious customers.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[290px] mt-12 ml-[-40px] ">
              <img src={Building} alt="" />
            </div>

            <div className="mt-[310px] ml-[-40px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold text-2xl">Enterprises:</p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Sustainability Goals:</p>
            <p>
              Solar energy enables enterprises to meet sustainability targets,
              reduce carbon footprints, and align with green initiatives.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Financial Benefits:</p>
            <p>
              Lower energy costs contribute to increased profitability and a
              positive return on investment.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Energy Resilience: </p>
            <p>
              Solar power provides a reliable energy source, reducing
              vulnerability to grid disruptions and price fluctuations.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[290px] mt-12 ml-[-40px]">
              <img src={Public} alt="" />
            </div>

            <div className="mt-[350px] ml-[-40px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold text-2xl">Citizens:</p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Reduced Electricity Bills: </p>
            <p>
              Installing solar panels helps citizens save money on their monthly
              electricity bills.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Energy Independence: </p>
            <p>
              Citizens can become more self-reliant by generating their own
              clean energy and reducing reliance on the grid.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Environmental Impact:</p>
            <p>
              Using solar energy helps individuals reduce their carbon footprint
              and contribute to a cleaner environment.
            </p>
          </div>

          <div className="flex flex-row mt-8 justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[290px] mt-12 ml-[-40px]">
              <img src={Factory} alt="" />
            </div>

            <div className="mt-[280px] ml-[-40px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold text-2xl">Industry:</p>
          </div>

          <div className="pl-4 pt-24">
            <p className="font-semibold">Sustainable Manufacturing: </p>
            <p>
              Solar energy enables industries to power their manufacturing
              processes with clean energy, reducing environmental impact.
            </p>
          </div>

          <div className="pl-4 pt-24">
            <p className="font-semibold">Energy Efficiency: </p>
            <p>
              Implementing solar technologies can enhance energy efficiency in
              industrial operations, leading to cost savings.
            </p>
          </div>

          <div className="pl-4 pt-24">
            <p className="font-semibold">Regulatory Compliance: </p>
            <p>
              Adopting solar energy helps industries comply with environmental
              regulations and demonstrate corporate social responsibility.
            </p>
          </div>

          <div className="flex flex-row mt-8  justify-center">
            <div className="ml-28">
              <img src={orangelogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[290px] mt-12 ml-[-40px] ">
              <img src={Positive} alt="" />
            </div>

            <div className="mt-[280px] ml-[-40px]">
              <img src={bluelogo} className="w-[100px]" alt="" />
            </div>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold text-2xl">
              Is Solar Energy a Worthwhile Investment?
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Long-term Cost Savings: </p>
            <p>
              Solar power offers a steady and foreseeable supply of electricity,
              lessening dependence on fluctuating energy costs.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Environmental Stewardship: </p>
            <p>
              Investing in solar power allows both individuals and businesses to
              play a part in creating a more sustainable and
              environmentally-friendly future.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Energy Independence: </p>
            <p>
              Solar installations offer energy self-sufficiency and protection
              against rising energy costs and power outages.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Financial Incentives: </p>
            <p>
              Government incentives, tax credits, and net metering programs can
              significantly offset the initial investment in solar.
            </p>
          </div>

          <div className="pl-4 pt-10">
            <p className="font-semibold">Future-Proofing: </p>
            <p>
              Investing in solar energy ensures resilience in the face of
              potential energy supply challenges and evolving energy landscapes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
