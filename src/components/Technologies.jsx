import React from "react";
import html from "../img/html.png";
import css from "../img/css.png";
import javascript from "../img/javascript.png";
import typescript from "../img/typescript.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import node from "../img/node.png";
import express from "../img/express.png";
import sequelize from "../img/sequelize.png";
import tailwind from "../img/tailwind.png";
import postgresql from "../img/postgresql.svg.png";
import git from "../img/git.png";
import insomnia from "../img/insomnia.png";
import jest from "../img/jest.png";
import heroku from "../img/heroku.png";

const Technologies = () => {
  return (
    <div className="container mt-44 mx-auto flex justify-between items-center px-4 lg:px-8 md:px-14 w-full">
      <section className="w-full">
        <h2 id="tech" className="secondary-title">
          Tecnologías
        </h2>
        <p className="section-paragraph">
          Estos son los lenguages y librerías que he estado aprendiendo e
          implementando en mis proyectos
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={html} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              HTML5
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={css} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              CSS3
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={javascript} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              JavaScript
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={typescript} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              TypeScript
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={react} alt="react" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              ReactJS
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={redux} alt="redux" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Redux
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={tailwind} alt="tailwind" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Tailwind
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={node} alt="node" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              NodeJS
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={express} alt="express" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              ExpressJS
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={sequelize} alt="sequelize" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Sequelize
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={postgresql} alt="postgresql" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              PostgreSQL
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={jest} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Jest
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={git} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Git
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={insomnia} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Insomnia
            </span>
          </div>
          <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
            <img src={heroku} alt="jslogo" className="w-24 h-20" />
            <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
              Heroku
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
