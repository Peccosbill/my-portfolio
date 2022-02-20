import React from "react";

const Nav = () => {
  return (
    <div className="py-6 container flex justify-between items-center mx-auto px-8 md:px14 lg:px-24 w-full">
      <div className="text-lg font-bold">Jonathan.montini</div>
      <div className="hidden md:flex space-x-12 items-center">
        <a href="!#" className="text-selected-text">
          Inicio
        </a>
        <a href="#work">Mi trabajo</a>
        <a href="#tech">Tecnologías</a>
        <a href="#hire">
          <button className="px-6 py-2 bg-theme font-bold">Contactame</button>
        </a>
      </div>

      <div className="md:hidden">
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Nav;
