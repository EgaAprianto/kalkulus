import React from "react";
import { Link } from "react-router-dom";
import Input from "../image/Input.png"

const Hsection = () => {


    return (
        <section class="mb-44 bg-blue-900 dark:bg-gray-900">
        <div class="grid max-w-screen-xl h-4/6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">Selamat Datang di Perhitungan Perkalian Silang(Cross Product) Dua Vektor</h1>
                <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Crspro. Akan Membantumu Menghitung Perkalian Silang(Cross Product) Dua Vektor dengan mudah dan cepat! </p>
            </div>
        <Link to="/CrossProduct">

        <img class="max-w-md" src={Input}/>
        
        </Link>
              
        </div>
    </section>
    )
  }

export default Hsection