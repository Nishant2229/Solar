import React, { Fragment, useEffect, useState } from "react";
import SecondPage from "../SecondPage/Second";
import FirstPage from "../FirstPage/FirstPage";
import ThirdPage from "../ThirdPage/ThirdPage";
import FourthPage from "../FourthPage/FourthPage";
import FifthPage from "../FifthPage/FifthPage";
import SixthPage from "../SixthPage/SixthPage";
import SeventhPage from "../SeventhPage/SeventhPage";

const ContentRouter = () => {
  const [selectedPage, setSelectedPage] = useState(1);

  console.log(selectedPage);
  const handlePageSelect = (pageNumber) => {
    setSelectedPage((prevSelectedPage) => {
      if (prevSelectedPage !== pageNumber) {
        return pageNumber;
      }
      return prevSelectedPage;
    });
  };

  useEffect(() => {
    console.log(`Selected Page Changed to ${selectedPage}`);
  }, [selectedPage]);

  return (
    <Fragment>
      <div className="space-y-5 font-semibold text-sm text-white mt-[120px] cursor-pointer ">
        <div className="sidebar xl2:w-[400px] bg-[#235688] justify-center space-y-3 pl- top-0 pt-14 h-[100%] w-[350px] bg-fixed fixed text-left">
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 1 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(1)}
          >
            All About Solar Power
          </p>
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 2 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(2)}
          >
            Solar Panel Installation
          </p>
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 3 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(3)}
          >
            Exploring Different Types of Solar Panels
          </p>
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 4 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(4)}
          >
            Calculating the Budget for Solar Installation
          </p>
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 5 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(5)}
          >
            A Guide to Finding the Right Solar Installer
          </p>
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 6 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(6)}
          >
            Steps to Get Started with Solar Energy
          </p>
          <p
            className={`hover:text-slate-300 ${
              selectedPage === 7 ? "text-slate-300" : ""
            }`}
            onClick={() => handlePageSelect(7)}
          >
            In Which Category Do You Belong to?
          </p>
        </div>
      </div>
      {selectedPage === 1 && <FirstPage />}
      {selectedPage === 2 && <SecondPage />}
      {selectedPage === 3 && <ThirdPage />}
      {selectedPage === 4 && <FourthPage />}
      {selectedPage === 5 && <FifthPage />}
      {selectedPage === 6 && <SixthPage />}
      {selectedPage === 7 && <SeventhPage />}
    </Fragment>
  );
};

export default ContentRouter;
