import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="relative">
      <div
        className="flex overflow-x-scroll
                    scrollbar-hide 
                    space-x-1
                    sm:space-x-4 text-2xl"
      >
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            onClick={() => router.push(`/?genre=${key}`)}
            className="last px-10 cursor-pointer 
            transition duratiion-100 
            transform hover:scale-125 
            hover:text-white 
            active:text-red-500"
            key={key}
          >
            {title}
          </h2>
        ))}
      </div>
      <div
        className="absolute top-0 right-0 
                bg-gradient-to-l from-[#06202A] h-10 w-1/12"
      />
    </nav>
  );
}
