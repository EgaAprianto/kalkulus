import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div class="mb-44 mt-80 bg-blue-900 dark:bg-gray-900">
    <div class="max-w-screen-xl h-4/6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
    <div class="place-self-center text-center lg:col-span-7">
            <h1 class="max-w-full font-extrabold leading-none tracking-tight text-xl text-white">
              Website ini dibuat oleh :
            </h1>
            <div className="flex flex-wrap justify-center">

            <h1 className="max-w-full mb-8 font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
              Ega Aprianto 227006018
            </h1>
            <h1 className="mx-[5px] max-w-full mb-8 font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
              &
            </h1>
            <h1 className="max-w-full mb-8 font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
            Salma Nur Fithriyah 227006022
            </h1> 
            <h1 className="max-w-[1000px] mb-8 font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
            Website ini dibuat untuk mempermudah dalam penyelesaian perkalian silang dua vektor dan web ini bisa digunakan oleh siapa saja. Website ini dibuat untuk memenuhi salah satu tugas besar dari mata kuliah kalkulus II yang diampu oleh :
            </h1> 
            </div>
            <h1 className="max-w-full mb-8 font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
            Euis Nur Fitriani Dewi, S.T., M.Kom
            </h1> 
          </div>         
    </div>
</div>
  )
}

export default About