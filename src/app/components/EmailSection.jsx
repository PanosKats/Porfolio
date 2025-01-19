"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";


const EmailSection = () => {
 
    
  

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am always looking for new opportunities, my inbox is always
          open. Whether you have a question, you want to say hi or maybe just the answer to the puzzle just sent an e-mail, I will
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/PanosKats">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/panagiotis-katsakioris/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          

        </div>
      </div>
      <div>
      <h5 className="text-xl  font-bold text-white my-2">
          My E-mail
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          katsakiorispanagiotis@gmail.com

        </p>
      </div>
    </section>
  );
};

export default EmailSection;
