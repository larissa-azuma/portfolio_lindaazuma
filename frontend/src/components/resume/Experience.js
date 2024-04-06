import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
        <ResumeCard
            title="Sales Representative"
            subTitle="Adom Motors - (2021 - 2024)"
            result="GH"
            des="Adom Motors is your one stop shop for all your cars quality and affordable spareparts with a touch of class."
          />
          <ResumeCard
            title="Customer Service Representative "
            subTitle="GCB Bank PLC - (2018 - 2019)"
            result="GH"
            des="GCB Bank PLC is Africa's most welcoming bank, offering accessible financial support wherever it's needed through helpful service and expert solutions."
          />
           <ResumeCard
            title="Secretary,Teller,Customer Service Officer(INTERN)"
            subTitle="Midland & Savings and Loans  (2015-2016)"
            result="GH"
            des="A Bank serving customers with a purpose."
          />"
        
      </div> 
      </div>
    </motion.div>
  );
};

export default Experience;
