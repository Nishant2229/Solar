import React from "react";
import profile from "./images/profile (1).png";
import notificationVendor from "./images/notificationVendor (1).png";
import product from "./images/product (1).png";
import userEng from "./images/userEng (1).png";
import person from "./images/person.png";
import Polygon from "./images/Polygon.png";

function Dashboard() {
  return (
    <div className="main flex min-w-min">
      <div className="sidebar h-screen s:break-words hidden md:block">
        <ul className="flex flex-col gap-y-5 pt-28 pl-6 ">
          <li className="flex items-center gap-x-2">
            <img src={profile} alt="" className="w-7" />
            Profile
          </li>
          <li className="flex items-center gap-x-2">
            <img src={notificationVendor} alt="" className="w-7" />
            Notification
          </li>
          <li className="flex items-center gap-x-2">
            <img src={product} alt="" className="w-7" />
            Product
          </li>
          <li className="flex items-center gap-x-2 break-words ">
            <img src={userEng} alt="" className="w-7" />
            User Engagement
          </li>
        </ul>
      </div>

      <div className="content w-full h-screen ">
        <div className="navbar bg-white h-[15%] s:h-[30%] md:h-[15%] flex justify-end items items-center gap-x-5 ">
          <img
            className="md:w-10 md:h-10 s:w-20 s:h-20  md:block"
            src={person}
            alt=""
          />
          <span className=" md:block s:text-2xl md:text-sm">Dhanajay Raj</span>
          <div className="bg-gray-400 w-8 h-8 rounded-full mr-14 md:block">
            <span className="ml-3 font-bold s:text-2xl md:text-sm">?</span>
          </div>
        </div>

        <div className="middle-content bg-blue-100">
          <div className="two-containers  flex s:flex-wrap md:flex-nowrap s:justify-center">
            <div className="three-container s:w-full md:w-auto s:ml-20 md:ml-auto gap-x-5 p-8">
              <div className="Your-profile-like bg-white w-[93%] s:mt-20 md:mt-auto">
                <div className="inner-content">
                  <div className="flex text-1xl gap-x-10 md:p-2 mt-2 s:p-7  font-semibold">
                    <p className="ml-6 s:text-6xl md:text-base">
                      Your Profile likes
                    </p>

                    <div>
                      <input
                        id="datepicker"
                        className="border-2 border-black rounded px-9 py-2 md:w-44 md:h-6 s:h-14 s:w-72 ml-4 s:text-4xl md:text-base"
                        type="text"
                        placeholder="Select a date"
                      />
                    </div>
                  </div>

                  <div className="flex s:flex-col md:flex-row bg-white">
                    <div
                      className="bg-blue-200 inline-block md:mt-7 ml-8 lg:ml-4 xl2:ml-14 md:ml-6 s:p-10 md:p-4 mb-7 
                                         s:w-[700px] s:h-[600px] md:w-[150px] md:h-auto s:ml-36 s:mt-20"
                    >
                      <p className="font-semibold -mt-2 s:text-[100px] md:text-base s:ml-10 md:ml-auto">
                        This Day
                      </p>
                      <p className="font-semibold md:text-[40px] s:text-[160px] s:ml-10 md:ml-auto">
                        4,053
                      </p>
                      <div className="flex">
                        <img
                          src={Polygon}
                          alt=""
                          className="md:w-3 md:h-3 md:mt-1.5 s:w-14 s:h-20 s:mt-9 s:ml-10 md:ml-0"
                        />
                        <p className="text-[#00CC76] font-semibold ml-1 s:text-[100px] md:text-base s:ml-5 md:ml-1">
                          5.40%
                        </p>
                      </div>
                    </div>
                    <div
                      className="bg-pink-100 inline-block mt-7 ml-10 lg:ml-7 xl2:ml-10 md:ml-5 p-5 mb-7
                                        s:w-[700px] s:h-[600px] md:w-auto md:h-auto s:ml-36 "
                    >
                      <p className="font-semibold -mt-2 s:text-[100px] md:text-base s:ml-10 md:ml-auto">
                        This Week
                      </p>
                      <p className="font-semibold md:text-[40px] s:text-[160px] s:ml-10 md:ml-auto">
                        22,053
                      </p>
                      <div className="flex">
                        <img
                          src={Polygon}
                          alt=""
                          className="md:w-3 md:h-3 md:mt-1.5 s:w-14 s:h-20 s:mt-9 s:ml-10 md:ml-0"
                        />
                        <p className="text-[#00CC76] font-semibold ml-1 s:text-[100px] md:text-base s:ml-5 md:ml-1">
                          5.40%
                        </p>
                      </div>
                    </div>

                    <div
                      className="bg-blue-100 inline-block mt-7 ml-10 lg:ml-7 xl2:ml-10 md:ml-5 p-5 mb-7
                                           s:w-[700px] s:h-[600px] md:w-auto md:h-auto s:ml-36 "
                    >
                      <p className="font-semibold -mt-2 s:text-[100px] md:text-base s:ml-10 md:ml-auto">
                        This Week
                      </p>
                      <p className="font-semibold md:text-[40px] s:text-[160px] s:ml-10 md:ml-auto">
                        52,053
                      </p>
                      <div className="flex">
                        <img
                          src={Polygon}
                          alt=""
                          className="md:w-3 md:h-3 md:mt-1.5 s:w-14 s:h-20 s:mt-9 s:ml-10 md:ml-0"
                        />
                        <p className="text-[#00CC76] font-semibold ml-1 s:text-[100px] md:text-base s:ml-5 md:ml-1">
                          5.40%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Notification-Likes flex s:flex-col md:flex-row pt-6 space-x-3">
                <div className="notification bg-white md:w-[50%] s:w-[982px] s:mt-20 md:mt-0 ">
                  <div className="flex md:p-3 s:p-12">
                    <p className="font-semibold md:text-2xl s:text-6xl">
                      Notification
                    </p>
                    <button
                      className="border-2 rounded border-[#8F99B1] text-[#8F99B1] md:px-2 md:ml-14
                                           s:ml-[210px] s:px-16 s:py-2 md:py-0 s:text-5xl md:text-base"
                    >
                      See Users
                    </button>
                  </div>

                  <div className="grid grid-cols-2 mt-14 ">
                    <div className="md:w-10 md:h-10 s:w-40 s:h-40 rounded-full overflow-hidden md:ml-5 s:ml-12">
                      <img
                        className="object-cover w-full h-full"
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="md:-ml-20 s:-ml-56 md:space-y-2 s:space-y-5 -mt-1">
                      <p className="text-[#233965] font-semibold s:text-4xl md:text-base">
                        Dhanajaysagar145@gmail.com
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-gray-300 dark:text-gray-500 "
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 mt-10">
                    <div className="md:w-10 md:h-10 s:w-40 s:h-40 rounded-full overflow-hidden md:ml-5 s:ml-12">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="md:-ml-20 s:-ml-56 space-y-2 -mt-1 ">
                      <p className="text-[#233965] font-semibold s:text-4xl md:text-base">
                        Dhanajaysagar145@gmail.com
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        I hope this message finds you well. I am writing to
                        kindly request your assistance
                      </p>
                      <div className="flex items-center space-x-1">
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300 s:mb-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300 s:mb-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300 s:mb-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-yellow-300 s:mb-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <svg
                          className="md:w-4 md:h-4 s:w-10 s:h-10 text-gray-300 dark:text-gray-500 s:mb-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 22 20"
                        >
                          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="likes bg-white md:w-[41%] s:w-[92%] p-3 s:mt-20 md:mt-0">
                  <div className="content md:ml-3 s:ml-10 s:mt-8 md:mt-auto">
                    <p className="md:text-2xl font-semibold s:text-6xl">
                      Likes
                    </p>

                    <p className="text-sm md:mt-5 s:mt-14 md:text-sm s:text-4xl">
                      Likes by users when they seen user profile card then he
                      doing liked
                    </p>

                    <div className="flex items-center md:mt-8 s:mt-14 s:-ml-10 md:ml-auto mb-4">
                      <svg
                        className="md:w-4 md:h-4 s:w-40 s:h-16 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="md:w-4 md:h-4 s:w-40 s:h-16 s:-ml-16 md:ml-0 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="md:w-4 md:h-4 s:w-40 s:h-16 s:-ml-16 md:ml-0 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="md:w-4 md:h-4 s:w-40 s:h-16 s:-ml-16 md:ml-0 text-yellow-300 me-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <svg
                        className="md:w-4 md:h-4 s:w-40 s:h-16 s:-ml-16 md:ml-0 text-gray-300 me-1 dark:text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                      <p className="md:ms-1 md:text-sm s:text-6xl font-medium s:-ml-3">
                        4
                      </p>
                      <p className="md:ms-1 md:text-sm s:text-6xl font-medium s:ml-4">
                        out of
                      </p>
                      <p className="md:ms-1 md:text-sm s:text-6xl font-medium s:ml-4">
                        5
                      </p>
                    </div>

                    <p className="md:text-sm s:text-5xl s:mt-14 md:mt-auto">
                      119 global likes
                    </p>

                    <div className="flex items-center md:mt-6 s:mt-14">
                      <a
                        href="#"
                        className="md:text-sm s:text-4xl s:-mt-3 md:mt-auto font-medium text-[#235688]"
                      >
                        5 star
                      </a>
                      <div className="w-2/4 md:h-5 s:h-12 mx-4 bg-[#D9D9D9] rounded-sm">
                        <div
                          className="md:h-5 s:h-12 bg-[#FFA41C] rounded-sm"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span className="md:text-sm s:text-4xl s:-mt-2 md:mt-auto font-medium text-[#235688]">
                        60%
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <a
                        href="#"
                        className="md:text-sm s:text-4xl s:-mt-3 md:mt-auto font-medium text-[#235688]"
                      >
                        4 star
                      </a>
                      <div className="w-2/4 md:h-5 s:h-12 mx-4 bg-[#D9D9D9] rounded-sm">
                        <div
                          className="md:h-5 s:h-12 bg-[#FFA41C] rounded-sm"
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                      <span className="md:text-sm s:text-4xl s:-mt-2 md:mt-auto font-medium text-[#235688]">
                        20%
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <a
                        href="#"
                        className="md:text-sm s:text-4xl s:-mt-3 md:mt-auto font-medium text-[#235688]"
                      >
                        3 star
                      </a>
                      <div className="w-2/4 md:h-5 s:h-12 mx-4 bg-[#D9D9D9] rounded-sm">
                        <div
                          className="md:h-5 s:h-12 bg-[#FFA41C] rounded-sm"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                      <span className="md:text-sm s:text-4xl s:-mt-2 md:mt-auto font-medium text-[#235688]">
                        70%
                      </span>
                    </div>
                    <div className="flex items-center mt-2">
                      <a
                        href="#"
                        className="md:text-sm s:text-4xl s:-mt-3 md:mt-auto font-medium text-[#235688]"
                      >
                        2 star
                      </a>
                      <div className="w-2/4 md:h-5 s:h-12 mx-4 bg-[#D9D9D9] rounded-sm">
                        <div
                          className="md:h-5 s:h-12 bg-[#FFA41C] rounded-sm"
                          style={{ width: "30%" }}
                        ></div>
                      </div>
                      <span className="md:text-sm s:text-4xl s:-mt-2 md:mt-auto font-medium text-[#235688]">
                        30%
                      </span>
                    </div>
                    <div className="flex items-center mt-2 s:mb-12 md:mb-auto">
                      <a
                        href="#"
                        className="md:text-sm s:text-4xl s:-mt-3 md:mt-auto font-medium text-[#235688]"
                      >
                        1 star
                      </a>
                      <div className="w-2/4 md:h-5 s:h-12 mx-4 bg-[#D9D9D9] rounded-sm">
                        <div
                          className="md:h-5 s:h-12 bg-[#FFA41C] rounded-sm"
                          style={{ width: "9%" }}
                        ></div>
                      </div>
                      <span className="md:text-sm s:text-4xl s:-mt-2 md:mt-auto font-medium text-[#235688]">
                        9%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Vendors bg-white md:w-[70%] s:w-[81%] md:mr-8 s:-mr-4 md:mt-10 s:mt-20 mb-8">
              <div className="content md:ml-1 s:ml-12">
                <div className="flex p-3 gap-x-20 ">
                  <p className="font-semibold md:text-2xl s:text-6xl  s:mt-14 md:mt-auto">
                    Vendors
                  </p>
                  <button
                    className="border-2 rounded border-[#8F99B1] text-[#8F99B1] md:px-2 md:ml-10 lg:ml-6 xl2:ml-40
                                            s:ml-[210px] s:px-16 s:py-2 md:py-0 s:text-5xl md:text-base s:mt-12 md:mt-auto"
                  >
                    See vendor
                  </button>
                </div>

                <div className="Images-active md:space-y-3 s:space-y-10 s:mb-14 md:mb-auto">
                  <div className="flex md:mt-5 s:mt-20 bg-blue-50 w-[92%] ml-3 md:p-2 s:p-10 xl2:p-4">
                    <div className="md:w-14 md:h-10 s:w-40 s:h-40 xl2:w-10 rounded-full overflow-hidden ml-2">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="ml-4 space-y-2 -mt-1">
                      <p className="text-[#395775] font-semibold s:text-4xl md:text-base">
                        Dhanajay Raj
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        615, Pukhraj Corporate, Navlakha Main Road
                      </p>
                    </div>

                    <div>
                      <p className="text-[#00CC76] -mt-1 s:text-4xl md:text-base">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 bg-blue-50 w-[92%] ml-3  md:p-2 s:p-10 ">
                    <div className="md:w-14 md:h-10 s:w-40 s:h-40 xl2:w-10 rounded-full overflow-hidden ml-2">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="ml-4 space-y-2 -mt-1">
                      <p className="text-[#395775] font-semibold s:text-4xl md:text-base">
                        Dhanajay Raj
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        615, Pukhraj Corporate, Navlakha Main Road
                      </p>
                    </div>

                    <div>
                      <p className="text-[#00CC76] -mt-1 s:text-4xl md:text-base">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 bg-blue-50 w-[92%] ml-3  md:p-2 s:p-10">
                    <div className="md:w-14 md:h-10 s:w-40 s:h-40 xl2:w-10 rounded-full overflow-hidden ml-2">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="ml-4 space-y-2 -mt-1">
                      <p className="text-[#395775] font-semibold s:text-4xl md:text-base">
                        Dhanajay Raj
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        615, Pukhraj Corporate, Navlakha Main Road
                      </p>
                    </div>

                    <div>
                      <p className="text-[#00CC76] -mt-1 s:text-4xl md:text-base">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 bg-blue-50 w-[92%] ml-3  md:p-2 s:p-10">
                    <div className="md:w-14 md:h-10 s:w-40 s:h-40 xl2:w-10 rounded-full overflow-hidden ml-2">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="ml-4 space-y-2 -mt-1">
                      <p className="text-[#395775] font-semibold s:text-4xl md:text-base">
                        Dhanajay Raj
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        615, Pukhraj Corporate, Navlakha Main Road
                      </p>
                    </div>

                    <div>
                      <p className="text-[#00CC76] -mt-1 s:text-4xl md:text-base">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 bg-blue-50 w-[92%] ml-3 md:p-2 s:p-10">
                    <div className="md:w-14 md:h-10 s:w-40 s:h-40 xl2:w-10 rounded-full overflow-hidden ml-2">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="ml-4 space-y-2 -mt-1">
                      <p className="text-[#395775] font-semibold s:text-4xl md:text-base">
                        Dhanajay Raj
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        615, Pukhraj Corporate, Navlakha Main Road
                      </p>
                    </div>

                    <div>
                      <p className="text-[#00CC76] -mt-1 s:text-4xl md:text-base">
                        Active
                      </p>
                    </div>
                  </div>

                  <div className="flex mt-3 bg-blue-50 w-[92%] ml-3  md:p-2 s:p-10">
                    <div className="md:w-14 md:h-10 s:w-40 s:h-40 xl2:w-10 rounded-full overflow-hidden ml-2">
                      <img
                        className="object-cover w-full h-full "
                        src={person}
                        alt=""
                      />
                    </div>

                    <div className="ml-4 space-y-2 -mt-1">
                      <p className="text-[#395775] font-semibold s:text-4xl md:text-base">
                        Dhanajay Raj
                      </p>
                      <p className="md:text-sm s:text-3xl">
                        615, Pukhraj Corporate, Navlakha Main Road
                      </p>
                    </div>

                    <div>
                      <p className="text-[#00CC76] -mt-1 s:text-4xl md:text-base">
                        Active
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
