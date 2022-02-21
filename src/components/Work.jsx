import React from "react";
import blackFlag from "../img/logoBlackFlag.png";
import airBalloon from "../img/airBalloon.png";
import github from "../img/github.png";

const Work = () => {
  return (
    <div className="container mt-44 flex justify-between items-center px-8 md:px-14 lg:px-36 w-full">
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          Mi trabajo
        </h2>
        <p className="section-paragraph">
          He tenido la oportunidad de crear algunas páginas utilizando
          tecnologías tanto de frontend como de backend.
        </p>

        {/* <!-- Works--> */}
        <div className="space-y-12 my-16">
          <div className="w-full border border-nav p-16 xl:px-32 xl:py-20 xl:space-x-32 flex justify-center xl:justify-start flex-wrap xl:flex-nowrap">
            {/* <!-- App logo --> */}
            <div className="mb-6 w-full flex justify-center items-center lg:mb-0">
              <img src={blackFlag} alt="blackFlag" />
            </div>

            {/* <!-- App info --> */}
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 className="text-white text-3xl font-semibold">
                App "Black Flag"
              </h3>

              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="badge">Frontend</div>
                <div className="badge">Backend</div>
                <div className="badge">React</div>
                <div className="badge">Redux</div>
                <div className="badge">NodeJS</div>
                <div className="badge">Express</div>
                <div className="badge">Sequelize</div>
                <div className="badge">PostgreSQL</div>
              </div>

              <p className="text-secondary">
                Es una Single Page Application donde se muestra las banderas de
                todos los países e información de cada país utilizando la api
                externa restcountries. Con la opción de agregar actividades
                turísticas a cada país (nombre de actividad, dificultad,
                duración, temporada).
              </p>
              <div className="flex flex-wrap">
                <a
                  href="https://black-flag.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 max-w-max"
                >
                  <p>Ir al sitio</p>
                  <div>
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4375 11C14.4375 11.9117 14.0753 12.786 13.4307 13.4307C12.786 14.0753 11.9117 14.4375 11 14.4375C10.0883 14.4375 9.21398 14.0753 8.56932 13.4307C7.92466 12.786 7.5625 11.9117 7.5625 11C7.5625 10.0883 7.92466 9.21398 8.56932 8.56932C9.21398 7.92466 10.0883 7.5625 11 7.5625C11.9117 7.5625 12.786 7.92466 13.4307 8.56932C14.0753 9.21398 14.4375 10.0883 14.4375 11Z"
                        fill="white"
                      />
                      <path
                        d="M0 11C0 11 4.125 3.4375 11 3.4375C17.875 3.4375 22 11 22 11C22 11 17.875 18.5625 11 18.5625C4.125 18.5625 0 11 0 11ZM11 15.8125C12.2764 15.8125 13.5004 15.3055 14.403 14.403C15.3055 13.5004 15.8125 12.2764 15.8125 11C15.8125 9.72365 15.3055 8.49957 14.403 7.59705C13.5004 6.69453 12.2764 6.1875 11 6.1875C9.72365 6.1875 8.49957 6.69453 7.59705 7.59705C6.69453 8.49957 6.1875 9.72365 6.1875 11C6.1875 12.2764 6.69453 13.5004 7.59705 14.403C8.49957 15.3055 9.72365 15.8125 11 15.8125Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </a>
                <a
                  href="https://github.com/Peccosbill/Countries"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 max-w-max"
                >
                  <p>Repositorio</p>
                  <div>
                    <img src={github} alt="GitHub" className="w-6" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border border-nav p-16 xl:px-32 xl:py-20 xl:space-x-32 flex justify-center xl:justify-start flex-wrap xl:flex-nowrap">
            {/* <!-- App logo --> */}
            <div className="mb-6 lg:mb-0 flex items-center justify-center">
              <img src={airBalloon} alt="airBalloon" className="w-32" />
              <p className="font-expletus text-4xl ml-3 mobile:hidden">Air Balloon Wheater</p>
            </div>

            {/* <!-- App info --> */}
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
              <h3 className="text-white text-3xl font-semibold">
                App de Clima "Air Balloon Wheater"
              </h3>

              <div className="w-full lg:w-auto flex flex-wrap justify-center lg:justify-start gap-3 mt-6 mb-8">
                <div className="badge">Frontend</div>
                <div className="badge">React</div>
                <div className="badge">Redux</div>
              </div>

              <p className="text-secondary">
                Single Page Application donde se puede buscar por nombre de
                ciudad y donde se muestra el clima actual de ella con algunos
                datos extras.
              </p>
              <a
                href="https://github.com/Peccosbill/App-Clima"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3 max-w-max"
              >
                <p>Ir al repositorio</p>
                <div>
                <img src={github} alt="GitHub" className="w-6" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
