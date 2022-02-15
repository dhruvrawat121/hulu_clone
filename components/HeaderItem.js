import React from "react";

export default function HeaderItem({ Icon, title }) {
  return (
    <div className=" flex flex-col w-12 cursor-pointer items-center group sm: w-12 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-wideset ">
        {title}
      </p>
    </div>
  );
}
