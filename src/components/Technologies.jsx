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
import python from "../img/python.png";
import solidity from "../img/solidity.png";
import scrum from "../img/scrum.png";
import selenium from "../img/selenium.png";
import vercel from "../img/vercel.svg";

const Technologies = () => {
  const technologies = [
    { name: "HTML5", image: html },
    { name: "CSS3", image: css },
    { name: "TailwindCSS", image: tailwind },
    { name: "JavaScript", image: javascript },
    { name: "TypeScript", image: typescript },
    { name: "ReactJS", image: react },
    { name: "Redux", image: redux },
    { name: "NodeJS", image: node },
    { name: "ExpressJS", image: express },
    { name: "Sequelize", image: sequelize },
    { name: "PostgreSQL", image: postgresql },
    { name: "Insomnia", image: insomnia },
    { name: "Jest", image: jest },
    { name: "Solidity", image: solidity },
    { name: "Python", image: python },
    { name: "Selenium", image: selenium },
    { name: "Git", image: git },
    { name: "Heroku", image: heroku },
    { name: "Vercel", image: vercel },
    { name: "Scrum", image: scrum },
  ];

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
          {technologies.map((tech) => (
            <div className="m-3 p-6 w-32 h-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border nav-dot">
              <img src={tech.image} alt="jslogo" className="w-24 h-20" />
              <span className="bg-black px-2 py-1 rounded-md ml-10 opacity-0">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Technologies;
