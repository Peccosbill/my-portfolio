import React from "react";
import krypt from "../img/krypt.png";
import humblefood from "../img/humblefood.png";
import blackFlag from "../img/logoBlackFlag.png";
import airBalloon from "../img/airBalloon.png";
import github from "../img/github.png";

const Work = () => {
  return (
    <div className="container mt-44 mx-auto flex justify-between items-center px-4 lg:px-8 md:px-14 w-full">
      <section className="w-full">
        <h2 id="work" className="secondary-title">
          Mi trabajo
        </h2>
        <p className="section-paragraph">
          He tenido la oportunidad de crear algunas páginas utilizando
          tecnologías tanto de frontend como de backend.
        </p>

        {/* <!-- Works--> */}
        <div className="space-y-16 my-16">
          <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
            {/* <!-- App info --> */}
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
              {/* <!-- App logo --> */}
              <div className="mb-6 flex items-center justify-center">
                <img src={krypt} alt="blackFlag" className="rounded-md" />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <div className="w-full lg:w-auto flex flex-wrap justify-center gap-3 mt-6 mb-8">
                  <div className="badge">Frontend</div>
                  <div className="badge">Backend</div>
                  <div className="badge">React</div>
                  <div className="badge">Tailwind</div>
                  <div className="badge">NodeJS</div>
                  <div className="badge">Web3</div>
                  <div className="badge">Solidity</div>
                  <div className="badge">Hardhat</div>
                </div>

                <p className="text-secondary">
                  Es una Aplicación Desentralizada cuya utilidad es poder
                  conectar una wallet de Metamask y poder transferir ethers en
                  una Blockchain de prueba llamada Hardhat. Luego queda un
                  registro en la misma página de todas las transferencias
                  hechas. Está desarrollada con JavaScript, React, Solidity y
                  Tailwind. Blockchain de prueba Hardhat.
                </p>
                <div className="flex flex-col md:flex-row justify-center">
                  <a
                    href="https://krypt-eth.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
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
                    href="https://github.com/Peccosbill/krypto-DApp-solidity"
                    target="_blank"
                    rel="noreferrer"
                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                  >
                    <p>Repositorio</p>
                    <div>
                      <img src={github} alt="GitHub" className="w-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
            {/* <!-- App info --> */}
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
              {/* <!-- App logo --> */}
              <div className="mb-6 flex items-center justify-center">
                <img src={humblefood} alt="blackFlag" className="rounded-md" />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
                <h3 className="text-white text-3xl font-semibold">
                  E-commerce
                </h3>

                <div className="w-full lg:w-auto flex flex-wrap justify-center gap-3 mt-6 mb-8">
                  <div className="badge">Frontend</div>
                  <div className="badge">Backend</div>
                  <div className="badge">React</div>
                  <div className="badge">Redux</div>
                  <div className="badge">TypeScript</div>
                  <div className="badge">Tailwind</div>
                  <div className="badge">Material UI</div>
                  <div className="badge">Axios</div>
                  <div className="badge">NodeJS</div>
                  <div className="badge">Express</div>
                  <div className="badge">Prisma</div>
                  <div className="badge">MongoDB</div>
                </div>

                <p className="text-secondary">
                  Desarrollo de un E-Commerce enfocado a los rubros que realizan
                  ventas de alimentos de todo tipo. La idea detrás del proyecto
                  fue realizar un plataforma interactiva que permita beneficiar
                  a las personas que deseen comprar alimentos al mejor precio
                  como también los usuarios que tengan un negocio de comidas
                  (Supermercados, almacenes, bares, restaurantes, etc. ) y
                  quieran vender sus productos por medio de la pagina.
                </p>
                <div className="flex flex-col md:flex-row justify-center">
                  <a
                    href="https://humblefood.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
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
                    href="https://github.com/Peccosbill/Humblefood-Front-End"
                    target="_blank"
                    rel="noreferrer"
                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                  >
                    <p>Repositorio</p>
                    <div>
                      <img src={github} alt="GitHub" className="w-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
            {/* <!-- App info --> */}
            <div className="flex flex-wrap justify-center text-center lg:text-left lg:block">
              {/* <!-- App logo --> */}
              <div className="mb-6 flex items-center justify-center">
                <img src={blackFlag} alt="blackFlag" />
              </div>
              <div className="flex flex-col justify-center items-center text-center">
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
                  Es una Single Page Application donde se muestra las banderas
                  de todos los países e información de cada país utilizando la
                  api externa restcountries. Con la opción de agregar
                  actividades turísticas a cada país (nombre de actividad,
                  dificultad, duración, temporada).
                </p>
                <div className="flex flex-col md:flex-row justify-center">
                  <a
                    href="https://black-flag.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
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
                    className="md:m-2 px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
                  >
                    <p>Repositorio</p>
                    <div>
                      <img src={github} alt="GitHub" className="w-6" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border border-nav p-6 xl:px-32 xl:py-20 flex justify-center flex-col">
            {/* <!-- App logo --> */}
            <div className="mb-6 flex items-center justify-center">
              <img src={airBalloon} alt="airBalloon" className="w-32" />
            </div>

            {/* <!-- App info --> */}
            <div className="flex flex-col justify-center items-center text-center">
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
                className="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center justify-center space-x-3 w-56"
              >
                <p>Ir al repositorio</p>
                <div>
                  <img src={github} alt="GitHub" className="w-6" />
                </div>
              </a>
              {/* <Carousel /> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
