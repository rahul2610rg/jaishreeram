import React from "react";
import Image from "next/image";

import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

function Card({ image, name, about, instagram, twitter, linkedin }) {
  return (
    <div id="card" className="flex flex-col self-center  p-10 content-center text-center rounded-lg shadow-lg border-2 border-gray-300 bg-white/30 backdrop-blur-sm ">
      <style jsx>{`
      #card{
        flex: 1 0 300px;
        max-width: 450px;
        overflow: hidden;

      }
      `}</style>
      <div className="">
        <Image
          src={image}
          alt="Picture of the author"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div>
        <h2 className="text-3xl font-medium mt-5 text-slate-100">{name}</h2>
        <h3 className="text-xl py-5 font-300 text-slate-200 text-ellipsis overflow-hidden">
          {about}
        </h3>
      </div>
      <div className="mx-auto flex text-4xl gap-6 text-gray-100 py-3">
        <a href={instagram} target="_blank" rel="noreferrer">
          <AiFillInstagram className="cursor-pointer hover:text-white hover:scale-125" />
        </a>
        <a href={twitter} target="_blank" rel="noreferrer">
          <AiFillTwitterCircle className="cursor-pointer hover:text-white hover:scale-125" />
        </a>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <AiFillLinkedin className="cursor-pointer hover:text-white hover:scale-125" />
        </a>
      </div>
    </div>
  );
}

export default Card;
