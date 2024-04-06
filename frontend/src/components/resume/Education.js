import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2012 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
        <ResumeCard
            title="Web Trainee"
            subTitle="MEST Africa (2024 - present)"
             des="MEST is an Africa-wide technology entrepreneur training program, internal seed fund, and network of hubs offering incubation for technology startups in Africa.
             "
          /> 
          <ResumeCard
            title="Bachelor of Science in Admin(Banking & Finance)"
            subTitle="University of Ghana (2014 - 2019)"
             des="he University of Ghana Business School (UGBS) is a premier business school in the sub-region focused on developing world-class human resources and capabilities to meet national development needs and global challenges, through quality teaching, learning, research and knowledge dissemination." 
          />
          <ResumeCard
            title="German Course"
            subTitle="Geothe Institute (2022)"
            des="The globally active cultural institute of the Federal Republic of Germany which teaches German courses, intercultural encounters and provides information about Germany."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Preset Pacesetters (2012 - 2014)"
           des="We are a community partner and an active corporate citizen of The Republic of Ghana. Our mission is to offer exemplary scholarly instruction based on a robust academic curriculum."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education