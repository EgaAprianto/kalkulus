import React from "react";
import Input from "../image/Input.png";
import diskette from "../image/diskette.png";
import reset from "../image/reset.png";
import { useState, useRef, useEffect } from "react";

const Hsection = () => {
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const [i1, setI1] = useState("");
  const [i2, setI2] = useState("");

  const [j1, setj1] = useState("");
  const [j2, setj2] = useState("");

  const [k1, setK1] = useState("");
  const [k2, setk2] = useState("");

  const [hasiljumlahI, setHasilJumlahI] = useState(null);
  const [hasiljumlahJ, setHasilJumlahJ] = useState(null);
  const [hasiljumlahK, setHasilJumlahK] = useState(null);

  let simpanData = () => {
    localStorage.setItem("hasiljumlahI", JSON.stringify(hasiljumlahI));
    localStorage.setItem("hasiljumlahJ", JSON.stringify(hasiljumlahJ));
    localStorage.setItem("hasiljumlahK", JSON.stringify(hasiljumlahK));

    localStorage.setItem("i1", JSON.stringify(i1));
    localStorage.setItem("j1", JSON.stringify(j1));
    localStorage.setItem("k1", JSON.stringify(k1));

    localStorage.setItem("i2", JSON.stringify(i2));
    localStorage.setItem("j2", JSON.stringify(j2));
    localStorage.setItem("k2", JSON.stringify(k2));
  };

  const hapusData = () => {
    localStorage.clear("hasiljumlahI");
    localStorage.clear("hasiljumlahJ");
    localStorage.clear("hasiljumlahK");

    localStorage.clear("i1");
    localStorage.clear("j1");
    localStorage.clear("k1");

    localStorage.clear("i2");
    localStorage.clear("j2");
    localStorage.clear("k2");

    setI1("");
    setj1("");
    setK1("");

    setI2("");
    setj2("");
    setk2("");

    setHasilJumlahI(null);
    setHasilJumlahJ(null);
    setHasilJumlahK(null);
  };

  useEffect(() => {
    const hasiljumlahI = JSON.parse(localStorage.getItem("hasiljumlahI"));
    const hasiljumlahJ = JSON.parse(localStorage.getItem("hasiljumlahJ"));
    const hasiljumlahK = JSON.parse(localStorage.getItem("hasiljumlahK"));

    const i1 = JSON.parse(localStorage.getItem("i1"));
    const j1 = JSON.parse(localStorage.getItem("j1"));
    const k1 = JSON.parse(localStorage.getItem("k1"));

    const i2 = JSON.parse(localStorage.getItem("i2"));
    const j2 = JSON.parse(localStorage.getItem("j2"));
    const k2 = JSON.parse(localStorage.getItem("k2"));

    if (hasiljumlahI) {
      setHasilJumlahI(hasiljumlahI);
    }
    if (hasiljumlahJ) {
      setHasilJumlahJ(hasiljumlahJ);
    }
    if (hasiljumlahK) {
      setHasilJumlahK(hasiljumlahK);
    }

    if (i1) {
      setI1(i1);
    }
    if (j1) {
      setj1(j1);
    }
    if (k1) {
      setK1(k1);
    }

    if (i2) {
      setI2(i2);
    }
    if (j2) {
      setj2(j2);
    }
    if (k2) {
      setk2(k2);
    }
  }, []);

  function handleMasukan(event, input) {
    const masukan = parseFloat(event.target.value);

    switch (input) {
      case "i1":
        setI1(masukan);
        break;
      case "i2":
        setI2(masukan);
        break;
      case "j1":
        setj1(masukan);
        break;
      case "j2":
        setj2(masukan);
        break;
      case "k1":
        setK1(masukan);
        break;
      case "k2":
        setk2(masukan);
        break;
      default:
        break;
    }
  }

  function hasilcross() {
    const a1 = i1;
    const a2 = i2;

    const b1 = j1;
    const b2 = j2;

    const c1 = k1;
    const c2 = k2;

    const hasilI = b1 * c2 - c1 * b2;
    setHasilJumlahI(hasilI);

    const hasilJ = c1 * a2 - a1 * c2;
    setHasilJumlahJ(hasilJ);

    const hasilK = a1 * b2 - b1 * a2;
    setHasilJumlahK(hasilK);
  }

  function handleHasil(hasiljumlahI, hasiljumlahJ, hasiljumlahK) {
    if (hasiljumlahI !== 0 || hasiljumlahJ !== 0 || hasiljumlahK !== 0) {
      let hasil = "";
      if (hasiljumlahI !== 0) {
        hasil += hasiljumlahI + "I ";
      }
      if (hasiljumlahJ !== 0) {
        hasil += hasiljumlahJ + "J ";
      }
      if (hasiljumlahK !== 0) {
        hasil += hasiljumlahK + "K";
      }
      return hasil;
    }
  }

  return (
    <>
      <section class="mb-44 bg-blue-900 dark:bg-gray-900">
        <div class="grid max-w-screen-xl h-4/6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-8 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl text-white">
              Selamat Datang di Perhitungan Perkalian Silang(Cross Product) Dua
              Vektor
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Crspro. Akan Membantumu Menghitung Perkalian Silang(Cross Product)
              Dua Vektor dengan mudah dan cepat!{" "}
            </p>
          </div>
          <div onClick={scrollToBottom}>
            <img class="max-w-md" src={Input} alt="Input" />
          </div>
        </div>
      </section>
      <div ref={bottomRef} class="relative mb-16 bg-blue-900 dark:bg-gray-900">
        <div className="sm:gap-10 flex flex-wrap items-stretch text-center mt-10 justify-center mb-6 m-auto w-10/12 relative overflow-x-auto">
          <button
            type="button"
            class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            1
          </button>
          <button
            type="button"
            class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            2
          </button>
          <button
            type="button"
            class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            3
          </button>
          <button
            type="button"
            class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            4
          </button>
          <button
            type="button"
            class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            5
          </button>
        </div>
        <div class="flex justify-center static mx-auto m-auto max-w-screen-xl h-64">
          <div className="absolute flex flex-wrap top-40">
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-tl-lg rounded-bl-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Masukan nilai Kedua Vektor dibawah ini!
                  </h5>
                </div>
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Masukan Vektor A
                </label>
                <div className="mb-6 flex">
                  <input
                    type="number"
                    id="default-input"
                    placeholder="I"
                    className="mr-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => handleMasukan(event, "i1")}
                  />

                  <input
                    type="number"
                    id="default-input"
                    placeholder="J"
                    className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => handleMasukan(event, "j1")}
                  />

                  <input
                    type="number"
                    id="default-input"
                    placeholder="K"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => handleMasukan(event, "k1")}
                  />
                </div>
                <label
                  htmlFor="default-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Masukan Vektor B
                </label>
                <div className="mb-6 flex">
                  <input
                    type="number"
                    id="default-input"
                    placeholder="I"
                    className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => handleMasukan(event, "i2")}
                  />
                            
                  <input
                    type="number"
                    id="default-input"
                    placeholder="J"
                    className="bg-gray-50 mr-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => handleMasukan(event, "j2")}
                  />

                  <input
                    type="number"
                    id="default-input"
                    placeholder="K"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={(event) => handleMasukan(event, "k2")}
                  />
                </div>
                <div className="gap-4 flex flex-wrap">
                  <button
                    onClick={hasilcross}
                    to="/CrossProduct"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Masukan
                    <svg
                      aria-hidden="true"
                      class="w-4 h-4 ml-2 -mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={hapusData}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    <img src={reset} className="h-[24px] w-[24px]" alt="save" />
                  </button>
                  <button
                    onClick={simpanData}
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green -800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    <img
                      src={diskette}
                      className="h-[24px] w-[24px]"
                      alt="save"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <div class="max-w-lg p-6 bg-white border border-gray-200 rounded-tr-lg rounded-br-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    =~=~=~= Jawaban =~=~=~=
                  </h5>
                </div>
                <p className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Penyelesaian
                </p>
                <div className="mb-6 flex">
                  <p className="">
                    Penyelesaian {hasiljumlahI}
                    {hasiljumlahJ}
                    {hasiljumlahK}
                  </p>
                  <p className="">
                    {i1}
                    {j1}
                    {k1}
                    {i2}
                    {j2}
                    {k2}
                  </p>
                </div>
                <div className="sm:gap-2 justify-between flex flex-wrap items-stretch mb-6 w-10/12 relative overflow-x-auto">
                  {hasiljumlahI || hasiljumlahJ || hasiljumlahK !== null ? (
                    <div className="font-medium text-green-500 bg-white border border-blue-900 max-w-lg rounded-lg p-2 text-center">
                      {handleHasil(hasiljumlahI, hasiljumlahJ, hasiljumlahK)}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hsection;
