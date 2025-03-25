"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Machine Learning App for Predicting Student Grades",
    description: "This app builds a machine learning model designed to predict a student's final grade based on various input features.",
    image: "/images/projects/ML_app.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/PanosKats/Machine-Learning-App-for-Predicting-Student-Grades",
    previewUrl: "https://gradesprediction.streamlit.app/",
  },
 
  {
    id: 2,
    title: "Optimizing Ensemble Learning",
    description: "This is a part of my undergraduate thesis that aimed to explore and optimize ensemble learning techniques to determine the most effective ensemble algorithm for a given dataset.",
    image: "/images/projects/Ensemble_Learning_Results.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "https://github.com/PanosKats/Optimizing-Ensemble-Learning",
    previewUrl: "/",
    
  },
 
  {
    id: 3,
    title: "Forecasting Sticker Sales",
    description: "This is the starter code for the Season 5, episode 1 playground Series kaggle competition where i finished 48/2722.",
    image: "/images/projects/p1.png",
    tag: ["All", "Machine Learning"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
       <hr className="my-4 border-2 border-gray-400 w-1/4 mx-auto" />
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Data Science"
          isSelected={tag === "Data Science"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Machine Learning"
          isSelected={tag === "Machine Learning"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
     
      
    </section>
    
  );
 
};

export default ProjectsSection;
