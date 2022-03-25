import type { NextPage } from "next";
import React from "react";
import FadeIn from "react-fade-in";
const Home: NextPage = () => {
  return (
    <FadeIn className="flex flex-col justify-center items-center h-screen bg-purple-600/50 backdrop-blur-md select-none space-y-1">
      <h1 className="text-purple-300 drop-shadow-xl font-bold text-7xl">
        Next.JS
      </h1>
      <p className="text-purple-200 drop-shadow-md text-xl mx-2">
        Simple NextJS & Tailwind template aims to make it easier for you to task
        to build your web projects.
      </p>
      <a
        href="https://github.com/amineohn/next-template"
        rel="noreffer noopener"
        target="_blank"
      >
        <button className="w-60 h-14 bg-purple-200/40 hover:bg-purple-200/30 transition duration-300 backdrop-blur-lg rounded-lg shadow-2xl shadow-purple-400">
          <div className="flex justify-center items-center">
            <p className="text-purple-50 text-center text-xl">Get Started</p>
          </div>
        </button>
      </a>
    </FadeIn>
  );
};

export default Home;
