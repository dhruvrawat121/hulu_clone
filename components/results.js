import React from "react";
import Thumbnail from "../components/thumbnail";
import { motion } from "framer-motion";

export default function Results({ results }) {
  return (
    <motion.div
      className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center 2xl:rounded-sm"
    >
      
        {results.map((result) => (
          <Thumbnail key={result.id} result={result} />
        ))}
      
    </motion.div>
  );
}
