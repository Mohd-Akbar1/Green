"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const newPlants = [
  {
    id: 1,
    title: "Peperomia Plants",
    desc: "Moist but Well Drained",
    image: "/image2.png",
    amount: "$26,378",
  },
  {
    id: 2,
    title: "Fiddle leaf Fig",
    desc: "medium moisture well drained",
    image: "/image2.png",
    amount: "$67,129",
  },
  {
    id: 3,
    title: "calathea orbifolia",
    desc: "Moist but well drained",
    image: "/image2.png",
    amount: "$91,378",
  },
];

const Feature = () => {
  return (
    <div className="w-full  flex flex-col gap-2 mb-50">
      <div className="flex flex-col md:flex-row">
        <div className="text-black border-1 bg-white border-gray-300 flex-2 p-2 m-2 rounded-md shadow-md">
          <p className="text-3xl font-bold">Plants for the People</p>
          <p className="pt-2 font-light text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            quibusdam necessitatibus ut fugit voluptatibus ea ipsum, molestias,
            impedit, voluptatum repellat enim odio sed harum nostrum tenetur
            deleniti veniam doloribus ab?
          </p>
        </div>
        <div className="border-1 bg-white flex flex-3 p-2 m-2 border-gray-300 shadow-md  rounded-md">
          <Image
            src="/image2.png"
            width={200}
            height={100}
            className="rounded-md"
          />
          <p className="p-2 font-light text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            corrupti vitae perspiciatis earum nam, reprehenderit placeat
            laudantium debitis, quas pariatur sequi neque ab molestiae sunt
            autem cupiditate cumque minima! Alias.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full border-0 rounded-full  mt-15">
        <div className="md:flex md:gap-2 hidden">
          <button className="bg-black text-white border-1 rounded-full p-2 font-semibold">
            Outdoor Plants
          </button>
          <button className="border-1 rounded-full px-4 font-semibold">
            Indoor Plants
          </button>
          <button className="border-1 rounded-full px-4 font-semibold">
            Plotted Plants
          </button>
          <button className="border-1 rounded-full px-4 font-semibold">
            Flower Plants
          </button>
        </div>
        <div className="w-full mx-2  md:w-auto">
          <button className="w-full border-1 rounded-full p-2 font-semibold">
            See All
          </button>
        </div>
      </div>

      {/* search section */}
      <div className="grid md:grid-cols-10 md:grid-rows-1 gap-2 m-1 text-white mb-20 ">
        <div className="image-Bg md:col-span-4 col-span-3 min-h-[20vh] rounded-md  shadow-md">
          <p className="text-2xl font-bold text-white text-center p-4">
            Pet friendly plants
          </p>
          <p className="py-6 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            error eum vitae maxime hic quas quaerat maiores dolores accusamus
            animi quasi ab eveniet illo quod molestiae, veritatis velit vel
            officia.
          </p>

          <hr />
          <button className="text-white bg-white/10 p-2 rounded-md backdrop-blur-[2px] m-2 cursor-pointer">
            see more.
          </button>
        </div>
        <div className="image-Bg col-span-3 rounded-md">
          <p className="text-2xl font-bold text-white text-center p-4">
            Orchids
          </p>

          <p className="py-3 text-center p-3">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            error eum vitae maxime hic quas quaerat l officia.Lorem ipsum, dolor
            sit amet consectetur adipisicing elit.
          </p>

          <hr />
          <button className="text-white bg-white/10 p-2 rounded-md backdrop-blur-[2px] m-2 cursor-pointer">
            see more.
          </button>
        </div>
        <div className="image-Bg col-span-3 rounded-md ">
          <p className="text-2xl font-bold text-white text-center p-4">
            Succulents
          </p>

          <p className="py-3 text-center p-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            error eum vitae maxime hic quas quaerat Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. vel officia.
          </p>

          <hr />
          <button className="text-white bg-white/10 p-2 rounded-md backdrop-blur-[2px] m-2 cursor-pointer">
            see more.
          </button>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-between gap-2 mx-5 my-10 w-[100%]">
        <p className="text-7xl font-extrabold">New Plants</p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
          aspernatur commodi deserunt asperiores! Error, dolorum dignissimos
          impedit optio ex consequatur dolorem itaque omnis, nesciunt quas
          illum, est dolores architecto similique.
        </p>
      </div>

      {/* plants cards */}
      <div className=" w-full lg:w-[80vw] mx-auto grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-2">
        {newPlants.map((item) => (
          <div className="m-2 border-1 border-gray-300 rounded-xl p-2 ">
            <img
              src="/image2.png"
              alt=""
              className="rounded-md h-60 w-[100%] object-fit"
            />
            <div className="flex items-center justify-between">
              <div>
                <p className="p-2 font-semibold">{item.title}</p>
                <p className="px-2">{item.desc}</p>
                <p className="px-2">{item.amount}</p>
              </div>
              <button className="bg-black text-white border-1 rounded-full p-2 cursor-pointer hover:scale-110">
                <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
