import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectFour,projectFive,projectSix} from "../../assets/index";
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
          githubUrl="https://github.com/iamatinad/marabfoods"
        />
        <ProjectsCard
          title="ZIIBO MOVIE APP"
          des=" A World Where You Movies Comes To Live !"
          src={projectTwo}
          githubUrl="https://github.com/iamatinad/ziibo-main"
        />
        <ProjectsCard
          title="Photo Editor"
          des="Where You Pictures Comes To Live!"
          src={projectThree}
        />
        <ProjectsCard
          title="AM AGENCY"
          des=" At AM AGENCY We Take Your Imagination To Another Level Of Possibilities!"
          src={projectFour}
          githubUrl='https://github.com/iamatinad/portfolio-website-arab'

        />
      <ProjectsCard
          title="RECIPE APP"
          des=" A Place Where Everyone Can Cook!"
          src={projectFive}
          githubUrl='https://github.com/larissa-azuma/recipe-app'
        />
        <ProjectsCard
          title="TODO APP"
          des=" A TODO app to that helps you plan and organise your beautiful life!"
          src={projectSix}
          githubUrl='https://github.com/larissa-azuma/recipe-app'
        />


      </div>
    </section>
  );
}

export default Projects