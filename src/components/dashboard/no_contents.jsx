import React from "react";
import { motion } from "framer-motion";
import { Frown } from "lucide-react";
import { SideGraidentButton } from "../buttons/stylish_buttons";

const NothingToSeeHere = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gradient-to-br from-gray-50 to-gray-100">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-6 bg-white rounded-full">
          <Frown size={64} className="text-gray-400" />
        </div>
        <h1 className="text-2xl font-bold text-gray-700 mt-6">Nothing to See Here</h1>
        <p className="text-gray-500 mt-2 text-center">
          Oops! It looks like there’s nothing to display right now.
        </p>
        <div className="mt-4">
        <SideGraidentButton buttonName="Create Post"/>
        </div>
      </motion.div>
    </div>
  );
};

export default NothingToSeeHere;
