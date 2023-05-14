import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="mb-44 mt-80 bg-blue-900 dark:bg-gray-900">
    <div class="max-w-screen-xl h-4/6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="mr-auto place-self-center text-center lg:col-span-7">
            <h1 class="max-w-full mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              Website ini dibuat oleh 
            </h1>
            <div className="flex flex-wrap justify-center">

            <h1 className="max-w-full mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">Ega Aprianto 227006018 &</h1>
            
            <h1 className="ml-[5px] max-w-full mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">Salma 227006028</h1> 
            </div>
            <p class="max-w-full mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
              Website ini dibuat untuk memenuhi tugas UAS Mata Kuliah Kalkulus II
            </p>
          </div>         
    </div>
</div>
  )
}

export default About