import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
const Thumbnail = ({ result }) => {
  const Base_URL = "https://image.tmdb.org/t/p/original";
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="p-2 m-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 "
    >
      <Image
        layout="responsive"
        src={`${Base_URL}${result.backdrop_path}`}
        width={1080}
        height={720}
        className="rounded-sm"
      />
      <div>
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duratiion-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>
      </div>
      <p className="flex items-center opacity-0 group-hover:opacity-100">
        {result.media_type && `${result.media_type}`}
        {result.release_date || result.first_air_date}
        <ThumbUpIcon className="h-5 mx-5" />
        {result.vote_count}
      </p>
    </motion.div>
  );
};
export default Thumbnail;
