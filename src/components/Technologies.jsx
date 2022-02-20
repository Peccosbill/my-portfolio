import React from "react";
import javascript from "../img/javascript.png";
import react from "../img/react.png";
import redux from "../img/redux.png";
import node from "../img/node.png";
import express from "../img/express.png";
import sequelize from "../img/sequelize.png";
import tailwind from "../img/tailwind.png";
import postgresql from "../img/postgresql.svg.png";

const Technologies = () => {
  return (
    <div className="container mt-44 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-36 w-full">
      <section className="w-full">
        <h2 id="tech" className="secondary-title">
          Tecnologías
        </h2>
        <p className="section-paragraph">Estos son los lenguages y librerías que he estado aprendiendo e implementando en mis proyectos</p>
        <div className="flex flex-wrap">
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={javascript}
              alt="jslogo"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={react}
              alt="react"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border ">
            <img
              src={redux}
              alt="redux"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={tailwind}
              alt="tailwind"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={node}
              alt="node"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={express}
              alt="express"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={sequelize}
              alt="sequelize"
              className="w-24 h-20"
            />
          </div>
          <div className="m-3 p-6 w-32 shadow-md shadow-black bg-badge rounded-full transform duration-100 hover:scale-105 hover:bg-input-border">
            <img
              src={postgresql}
              alt="postgresql"
              className="w-24 h-20"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologies;
