import React from "react";
import Input from "../image/Input.png";
import diskette from "../image/diskette.png";
import reset from "../image/reset.png";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
    localStorage.removeItem("hasiljumlahI");
    localStorage.removeItem("hasiljumlahJ");
    localStorage.removeItem("hasiljumlahK");

    localStorage.removeItem("i1");
    localStorage.removeItem("j1");
    localStorage.removeItem("k1");

    localStorage.removeItem("i2");
    localStorage.removeItem("j2");
    localStorage.removeItem("k2");

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
        hasil += hasiljumlahI + "i ";
      }
      if (hasiljumlahJ !== 0) {
        hasil += hasiljumlahJ + "j ";
      }
      if (hasiljumlahK !== 0) {
        hasil += hasiljumlahK + "k";
      }
      return hasil;
    }
  }

  return (
    <>
      <section class="mb-44 bg-blue-900 dark:bg-gray-900">
        <div class="grid max-w-screen-xl h-4/6 px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mx-auto text-center lg:text-left place-self-center lg:col-span-7">
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
            <img
              class="lg:max-w-md sm:max-w-md mx-auto"
              src={Input}
              alt="Input"
            />
          </div>
        </div>
      </section>
      <div
        ref={bottomRef}
        class="relative mb-16 bg-blue-900 md:h-[400px] h-[1000px]"
      >
        <div className="sm:gap-10 flex flex-wrap items-stretch text-center mt-10 justify-center mb-6 py-2 m-auto bg-blue-900 relative overflow-x-auto">
        <Link to="/"
              type="button"
              class="mt-14 text-blue-900 bg-blue-200 hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              1
            </Link>
            <Link to="/simpan2"
              type="button"
              class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              2
            </Link>
            <Link to="/simpan3"
              type="button"
              class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              3
            </Link>
            <Link to="/simpan4"
              type="button"
              class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              4
            </Link>
            <Link to="/simpan5"
              type="button"
              class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              5
            </Link>
            <Link to="/simpan6"
              type="button"
              class="mt-14 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              6
            </Link>
        </div>
        <div class="flex justify-center mx-auto m-auto">
          <div className="absolute flex flex-wrap top-40 ">
            <div class="lg:mt-0 lg:col-span-5 lg:flex lg:max-w-md sm:max-w-sm mx-auto">
              <div class="md:max-w-[384px] h-[350px] p-6 bg-white border border-gray-200 md:rounded-tl-lg md:rounded-bl-lg shadow">
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
            <div class="lg:mt-0 lg:col-span-5 lg:flex lg:max-w-md sm:max-w-md mx-auto">
              <div class="md:max-w-[384px] h-[350px] bg-white border border-gray-200 md:rounded-tr-lg md:rounded-br-lg shadow">
                <div>
                  <h5 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Jawaban
                  </h5>
                </div>
                <div className="border m-4 relative rounded-lg shadow h-[257px]">
                  <p className=" text-[8px] absolute bg-blue-700 p-[2px] rounded left-[4px] top-[2px] mt-1 font-semibold text-white dark:text-white">
                    Rumus
                  </p>
                  <div className="border shadow rounded mt-4 mx-2 h-[30px]">
                    <p className=" text-xs text-center mt-1 font-medium text-gray-900 dark:text-white">
                      (j1 x k2) + (k1 x i2) + (i1 x j2) - (i1 x k2) - (k1 x j2)
                      - (j1 x i2)
                    </p>
                  </div>

                  <div className="mt-4">
                    {hasiljumlahI || hasiljumlahJ || hasiljumlahK !== null ? (
                      <div className="border shadow relative rounded mt-4 mx-2 h-[30px]">
                        <p className="text-[8px] absolute bg-blue-700 p-[2px] rounded left-[-4px] top-[-12px] mt-1 font-semibold text-white dark:text-white">
                          Tahap 1
                        </p>
                        <p className="text-xs text-center mt-1 font-medium text-gray-900 dark:text-white">
                          ({j1} x {k2}) + ({k1} x {i2}) + ({i1} x {j2}) - ({i1}{" "}
                          x {k2}) - ({k1} x {j2}) - ({j1} x {i2})
                        </p>
                      </div>
                    ) : null}

                    {hasiljumlahI || hasiljumlahJ || hasiljumlahK !== null ? (
                      <div className="border mb-[40px] shadow relative rounded mt-4 mx-2 h-[30px]">
                        <p className="text-[8px] absolute bg-blue-700 p-[2px] rounded left-[-4px] top-[-12px] mt-1 font-semibold text-white dark:text-white">
                          Tahap 2
                        </p>

                        <div className="text-xs text-center mt-1 font-medium text-gray-900 dark:text-white">
                          <p className="">
                            {j1 * k2}i + {k1 * i2}j + {i1 * j2}k - {j1 * i2}k -{" "}
                            {k1 * j2}i - {i1 * k2}j
                          </p>
                        </div>
                      </div>
                    ) : null}
                  </div>
                  <div className="sm:gap-2 items-stretch mb-6 relative overflow-x-auto justify-center flex">
                    {hasiljumlahI || hasiljumlahJ || hasiljumlahK !== null ? (
                      <div className="font-medium text-green-500 bg-white border-b-2 w-[120px] border-black max-w-lg p-2 text-center">
                        {handleHasil(hasiljumlahI, hasiljumlahJ, hasiljumlahK)}
                      </div>
                    ) : null}
                  </div>
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
