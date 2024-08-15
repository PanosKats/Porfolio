"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";







const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (

      

      
        
      <div id="img-wrapper">
      <div><img src="../images/python.png" alt="logo" width={100} height={100} /></div>
      <div><img src="../images/sql.png" alt="logo" width={100} height={100} /></div>
      <div><img src="../images/spark.png" alt="logo" width={100} height={100} /></div>
      <div><img src="../images/pandas.png" alt="logo" width={100} height={100} /></div>
      <div><img src="../images/scit.png" alt="logo" width={100} height={100} /></div>
      <div><img src="../images/git.png" alt="logo" width={75} height={75} /></div>
      </div>
      
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        
        <li>University of Thessaly, Computer Science And Telecommunications</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Azure Fundamentals </li>
        <li>Google Cloud Certification: Machine Learning Engineer</li>
        <li>100100010100010001</li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Data scientist with a passion for solving complex problems. I have experience
            working with al kinds of data big or small. I have used Python, Pandas, Scikit learn, Pyspark , SQL, Git and many other technologies.
            I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to solve problems and create applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
