import React from 'react';
import { Link } from 'react-router'; // ✅ Correct import
import cool from "../../assets/banner/converted.jpg";
import rescue from "../../assets/banner/converted.jpg";
import pizza from "../../assets/banner/converted.jpg";
import mobile from "../../assets/banner/converted.jpg";
import football from "../../assets/banner/converted.jpg";
import panda from "../../assets/banner/converted.jpg";
import rideShare from "../../assets/banner/converted.jpg";

const AllProjects = () => {
  return (
    <div>
      <div className="bg-gray-900 w-full h-52">
        <h1 className="text-2xl text-white pt-12">Projects</h1>
      </div>

      {/* First section */}
      <section className="py-24 px-4 lg:px-16">
        <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-16">

            {/* Card 1 */}
            <div className="relative group h-52 flex flex-col rounded-xl bg-[#F97316] bg-clip-border text-gray-700 shadow-md">
              <Link to="https://cool-media-client.vercel.app/home" className="block">
                <div className="h-50">
                  <div className="absolute -top-5 lg:top-[-10%] left-[5%] z-40 group-hover:top-[-60%] group-hover:opacity-[0.9] duration-300 w-[90%] h-52 bg-gray-700 rounded-xl justify-items-center align-middle">
                    <img
                      src={cool}
                      className="w-72 h-44 mt-4 m-auto"
                      alt="Cool Media"
                      title="Cool Media"
                      loading="lazy"
                      width="200"
                      height="200"
                    />
                  </div>
                </div>
                <div className="p-6 mt-14 z-40 w-full">
                  <a
                    href="https://cool-media-client.vercel.app/home"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                  >
                    Live site
                  </a>
                  <a
                    href="https://github.com/zamanmonirbu/cool-media-client"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                  >
                    Frontend code
                  </a>
                  <a
                    href="https://github.com/zamanmonirbu/cool-media-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                  >
                    Backend code
                  </a>
                  <a
                    href="https://github.com/zamanmonirbu/cool-media-socket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 inline-block text-tg text-center w-full text-xl font-sans font-semibold leading-snug tracking-normal antialiased hover:text-red-500"
                  >
                    Socket code
                  </a>
                </div>
              </Link>
            </div>

            {/* More cards ... (same changes: class → className, Link import fix) */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
