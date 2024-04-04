import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectFour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 hover animate-pulse">
        <ProjectsCard
          title=" MARABFOODS"
          des="Where Seller Source Only Quality Foods And Food Products To Customers!"
          src={projectOne}
        />
        <ProjectsCard
          title="ZIIBO MOVIE APP"
          des=" A World Where You Movies Comes To Live !"
          src={projectTwo}
        />
        <ProjectsCard
          title="Graphic Design"
          des="Where You Pictures Comes To Live!"
          src={projectThree}
        />
        <ProjectsCard
          title="AM AGENCY"
          des=" At AM AGENCY We Take Your Imagination To Another Level Of Possibilities!"
          src={projectFour}
        />
      
        
      </div>
    </section>
  );
}

export default Projects