"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Blog 1",
    description: "Blog 1 description",
    image: "/images/projects/logo.png",
    tag: ["All", "Theory"],
    gitUrl: "/",
    previewUrl: "/",
  },
 
  {
    id: 2,
    title: "Blog 2",
    description: "Blog 2 description",
    image: "/images/projects/logo.png",
    tag: ["All", "Projects"],
    gitUrl: "/",
    previewUrl: "/",
  },
  
  {
    id: 3,
    title: "Blog 3",
    description: "Blog 3 description",
    image: "/images/projects/logo.png",
    tag: ["All", "Theory"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const BlogSection = () => {
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
    <section id="blog">
      <hr className="my-4 border-2 border-gray-400 w-1/4 mx-auto" />
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Blog
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Theory"
          isSelected={tag === "Theory"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Projects"
          isSelected={tag === "Projects"}
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
<><strong>Foo</strong> </>

};

export default BlogSection;
