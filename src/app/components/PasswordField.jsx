"use client";
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const PasswordField = () => {
  const [passwords, setPasswords] = useState({
    password1: '',
    password2: '',
    password3: ''
  });
  const [valid, setValid] = useState({
    password1: false,
    password2: false,
    password3: false
  });

  useEffect(() => {
    // Check if all passwords are correct
    if (Object.values(valid).every(Boolean)) {
      // Trigger full-screen confetti
      const confettiInterval = setInterval(() => {
        confetti({
          particleCount: 200,
          spread: 100,
          origin: { x: Math.random(), y: Math.random() } // Confetti from random positions
        });
      }, 100);

      // Stop confetti after 2 seconds
      setTimeout(() => {
        clearInterval(confettiInterval);
      }, 2000);
    }
  }, [valid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });

    // Validate each password against specific values
    setValid({
      ...valid,
      password1: name === 'password1' ? value === '213421341' : valid.password1,
      password2: name === 'password2' ? value === '148753' : valid.password2,
      password3: name === 'password3' ? value === '51234' : valid.password3,
    });
  };

  return (
    <div>
      <hr className="my-4 border-2 border-gray-400 w-1/4 mx-auto" />
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12" id="puzzle">
        Puzzle for U ❣️
      </h2>
      <h2 className="text-center text-small font-bold text-gray-400 mt-4 mb-8 md:mb-12" id="puzzle">
       This is a small puzzle for you to solve. Hidden within the website are three codes for you to discover. Some may already be in the correct form, while others might need some  tinkering. It is up to you to figure it out. Good luck!
      </h2>

      <input
        type="password"
        name="password1"
        value={passwords.password1}
        onChange={handleChange}
        className="bg-[#18191E] border border-[#6e8cdf] placeholder-[#ADB7BE] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Enter Password 1"
        style={{ backgroundColor: valid.password1 ? 'lightgreen' : 'light-gray' }}
      />
      <br />
      <input
        type="password"
        name="password2"
        value={passwords.password2}
        onChange={handleChange}
        className="bg-[#18191E] border border-[#6e8cdf] placeholder-[#ADB7BE] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Enter Password 2"
        style={{ backgroundColor: valid.password2 ? 'lightgreen' : 'light-gray' }}
      />
      <br />
      <input
        type="password"
        name="password3"
        value={passwords.password3}
        onChange={handleChange}
        className="bg-[#18191E] border border-[#6e8cdf] placeholder-[#ADB7BE] text-gray-100 text-sm rounded-lg block w-full p-2.5"
        placeholder="Enter Password 3"
        style={{ backgroundColor: valid.password3 ? 'lightgreen' : 'light-gray' }}
      />
    </div>
  );
};

const tools = 'Chrome DevTools';
console.warn('%s is awesome.', tools);

export default PasswordField;
