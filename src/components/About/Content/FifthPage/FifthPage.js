import React from "react";
import firstImage from "./Images/firstImage (1).png";
import secondImage from "./Images/secondImage (1).png";
import firstLogo from "./Images/firstImage (1).png";
import secondLogo from "./Images/secondLogo (1).png";

function FifthPage() {
  return (
    <div className="max-w-[1440px] min-w-[1200px] -mt-32 container flex">
      <div className="container ml-[380px] xl2:ml-[430px] s:max-w-[800px]">
        <div className=" content xl2:max-w-[980px]">
          <p className="font-semibold text-4xl pt-5 pl-4 ">
            A Guide to Finding the Right Solar Installer
          </p>

          <div className="flex flex-row pt-16">
            <div className="flex justify-center mt-[-25px] ml-12">
              <img
                className="items xl2:max-w-[800px] lg:max-w-[680px] md:max-w-[680px] sm:max-w-[680px]
                        m:max-w-[670px] s:max-w-[670px]"
                src={firstImage}
                alt=""
              ></img>
            </div>
          </div>

          <div className="pl-4 pt-16 ">
            <p className="font-semibold text-2xl">
              Qualities to Look for in a Solar Installer
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Experience:</p>
            <p>
              Look for installers with a proven track record and extensive
              experience in the solar industry.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Reputation:</p>
            <p>
              Check customer reviews and testimonials to gauge the installer's
              reputation for quality work and customer satisfaction.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Expertise:</p>
            <p>
              Ensure the installer has the necessary technical expertise to
              handle your specific solar project.
            </p>
          </div>

          <div className="flex flex-row mt-8">
            <div className="ml-28">
              <img src={firstLogo} className="w-[100px]" alt="" />
            </div>

            <div className="max-w-[400px] mt-12 ml-[-40px]">
              <img src={secondImage} alt="" />
            </div>

            <div className="mt-[280px] ml-[-37px]">
              <img src={secondLogo} alt="" className="w-[100px]" />
            </div>
          </div>

          <div className="pl-4 pt-20">
            <p className="font-semibold text-2xl">
              Evaluating Solar Installer Quotes and Proposals:
            </p>
          </div>

          <div className="pl-4 pt-7">
            <p className="font-semibold">Compare multiple quotes:</p>
            <p>
              Obtain quotes from multiple installers to compare prices, system
              components, and installation services.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Consider the whole package:</p>
            <p>
              Look beyond the initial cost and assess the value provided,
              including equipment quality and installation expertise.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">
              Pay attention to system performance estimates:
            </p>
            <p>
              Evaluate the estimated energy production and payback period
              mentioned in the proposals.
            </p>
          </div>

          <div className="pl-4 pt-16">
            <p className="font-semibold text-2xl">
              Checking Credentials and Certifications of Solar Installers:
            </p>
          </div>

          <div className="pl-4 pt-7">
            <p className="font-semibold">NABCEP Certification:</p>
            <p>
              The North American Board of Certified Energy Practitioners
              (NABCEP) certification demonstrates the installer's competence in
              solar installation.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">State licenses and certifications:</p>
            <p>
              Ensure that the installer holds the necessary licenses and
              certifications required by your state or local authorities.
            </p>
          </div>

          <div className="pl-4 pt-5">
            <p className="font-semibold">Industry affiliations:</p>
            <p>
              Look for affiliations with reputable industry organizations, such
              as the Solar Energy Industries Association (SEIA) or regional
              solar associations.
            </p>
          </div>

          <div className="pl-4 pt-7">
            <p className="pb-10">
              Picking the correct solar vendor is essential for a prosperous
              solar installation. By taking into account these aspects, posing
              the appropriate inquiries, and verifying credentials, you can
              arrive at an educated conclusion and trust in the proficiency and
              dependability of your selected solar installer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FifthPage;
