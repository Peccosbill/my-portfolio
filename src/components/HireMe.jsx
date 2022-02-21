import React from "react";
import whatsapp from "../img/whatsapp.png";
import email from "../img/email.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";

const HireMe = () => {
  return (
    <div className="container mt-44 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-36 w-full">
      <div className="w-full">
        <h2 id="hire" className="secondary-title">
          Contactame
        </h2>
        <p className="section-paragraph">
          No dude en ponerse en contacto conmigo en cualquier momento, a través
          de cualquier método a continuación.
        </p>

        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-24">
          <div className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Nombre
              </label>
              <input className="w-full border border-input-border bg-input px-4 py-4" />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                Mensaje
              </label>
              <textarea
                type="email"
                className="w-full border border-input-border bg-input px-4 py-4 h-56 resize-none"
              ></textarea>
            </div>
            <button className="px-6 py-2 bg-theme text-white font-bold">
              Enviar!
            </button>
          </div>

          {/* <!-- Socials --> */}
          <div className="mt-32 flex items-center space-x-6">
            {/* <!-- Mail --> */}
            <a
              href="mailto:jonathanMontini95@icloud.com"
              className="text-secondary underline mt-3 block"
            >
              <img
                src={email}
                alt="Email"
                className="mb-2 w-10 h-10 lg:w-14 lg:h-14"
              />
            </a>
            {/* <!-- Whatsapp --> */}
            <a
              href="https://api.whatsapp.com/send?phone=+5493827430579"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={whatsapp}
                alt="whatsapp"
                className="w-8 h-8 lg:w-12 lg:h-12"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
              />
            </a>
            {/* <!-- LinkedIn --> */}
            <a
              href="https://www.linkedin.com/in/jonathan-montini/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-9 h-9 lg:w-12 lg:h-12"
              />
            </a>
            {/* <!-- GitHub --> */}
            <a
              href="https://github.com/Peccosbill"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={github}
                alt="github"
                className="w-10 h-10 lg:w-14 lg:h-14"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireMe;
