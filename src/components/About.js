import React from "react";


const About = () => {
  return (
    <div class="mb-44 mt-80 bg-blue-900 dark:bg-gray-900">
    <div class="max-w-screen-xl h-4/6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-10 lg:grid-cols-12">
    <div class="relative place-self-center justify-center flex lg:col-span-7">
      <div className="absolute bg-blue-800 shadow-xl px-4 pt-2 top-[-60px] rounded-lg">
            <h1 class="max-w-full text-center font-semibold leading-none tracking-tight text-3xl mb-4 text-white">
              Cross Product
            </h1>
      </div>
            <div className="flex flex-wrap justify-center">
            <h1 className="max-w-[1000px] mb-8 font-semibold text-justify md:text-md xl:text-md text-white">
            Cross product, juga dikenal sebagai perkalian silang, adalah operasi matematika antara dua vektor yang menghasilkan vektor baru 
            yang tegak lurus terhadap kedua vektor asal. Dalam matematika, cross product digunakan untuk mempelajari hubungan antara 
            vektor-vektor dalam ruang tiga dimensi.
            Dalam grafika komputer, cross product digunakan untuk menghitung pencahayaan dan penampakan permukaan objek tiga dimensi. 
            Cross product juga diterapkan dalam bidang-bidang seperti ilmu material, robotika, dan pemodelan pergerakan benda.
            Dengan memahami cross product, kita dapat mempelajari sifat-sifatnya yang penting, seperti sifat distributif, antikomutatif, 
            dan asosiatif, yang memungkinkan kita melakukan perhitungan yang lebih kompleks dan memahami hubungan antara vektor-vektor 
            dalam ruang tiga dimensi. Dengan demikian, cross product merupakan konsep yang fundamental dan penting dalam matematika 
            dan memiliki berbagai aplikasi yang relevan dalam ilmu dan teknologi modern.
            </h1> 
            </div>
            <h1 className="max-w-full mb-8 font-extrabold leading-none tracking-tight md:text-xl xl:text-xl text-white">
            </h1> 
          </div>         
    </div>
</div>
  )
}

export default About