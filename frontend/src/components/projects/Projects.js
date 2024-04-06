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
          title="VISIT MY PORTFOLIO AND SEND ME YOUR FEEDBACKS"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 hover animate-pulse">
        <ProjectsCard
          title=" MARABFOODS"
          des="An Agroproduct website where seller source only quality foods and food products to customers!"
          src={projectOne}
          githubUrl="https://github.com/iamatinad/marabfoods"
        />
        <ProjectsCard
          title="ZIIBO MOVIE APP"
          des=" A movie app where you can watch all your favourite tv show in the world and more"
          src={projectTwo}
          githubUrl="https://github.com/iamatinad/ziibo-main"
        />
        <ProjectsCard
          title="Photo Editor"
          des="I bring life and happiness to every image I work on !"
          src={projectThree}
        />
        <ProjectsCard
          title="AM AGENCY"
          des=" At AM AGENCY we take your imagination to another level of possibilities!"
          src={projectFour}
          githubUrl='https://github.com/iamatinad/portfolio-website-arab'

        />
      <ProjectsCard
          title="RECIPE APP"
          des= 'A place where everyone can cook'
          githubUrl='https://github.com/larissa-azuma/recipe-app'
        />
        <ProjectsCard
          title="TODO APP"
          des=" A TODO app that helps you plan and organise your beautiful life!"
          src={projectSix}
          githubUrl='https://github.com/larissa-azuma/recipe-app'
        />


      </div>
    </section>
  );
}

export default Projects