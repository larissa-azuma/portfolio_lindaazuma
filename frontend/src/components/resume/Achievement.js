import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Company Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Goethe Institute."
            subTitle="German language A1."
            result="Success"
            des="The globally active cultural institute of the Federal Republic of Germany,German courses, intercultural encounters, information about Germany!"
          />
          <ResumeCard
            title="Cake Tekniks."
            subTitle="Baking and Sweet Confectioneries."
            result="Success"
            des="We are the best Training institute for Cake design, Floral decor, Sugar craft, Pastries and Catering. We also handle Catering and Event management!"
          />
          <ResumeCard
            title="Moreton Bay Regional Council Entrepreneurship & Innovation:."
            subTitle="Web Development Job Simulation on Forage - February 2024."
            result="Success"
            des="Created a sitemap and userflow using a diagram creation tool.
            Used HTML & CSS to create a landing page.!"
          />
        </div>
      </div>  
    </motion.div>
  );
};

export default Achievement;
