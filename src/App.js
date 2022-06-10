import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Work from "./components/Work";
import HireMe from "./components/HireMe";
import Technologies from "./components/Technologies";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  function updateList() {
    const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
      return (
        Math.abs(a.getBoundingClientRect().top) -
        Math.abs(b.getBoundingClientRect().top)
      );
    });

    document
      .querySelectorAll(".selected-circle")
      .forEach((c) => c.classList.remove("selected-circle"));

    document
      .querySelectorAll(".nav-dot")
      [
        [...document.querySelectorAll("h1, h2")].indexOf(titles[0])
      ].classList.add("selected-circle");
  }

  window.addEventListener("scroll", () => {
    updateList();
  });

  function lockScreen(orientation) {
    let de = document.documentElement
    if (de.requestFullscreen) { de.requestFullscreen() }
    else if (de.mozRequesFullScreen) { de.mozRequestFullScreen() }
    else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen() }
    else if (de.msRequestFullscreen) { de.msRequestFullscreen() }
    
    window.screen.orientation.lock(orientation)
  }
  lockScreen('portrait')

  return (
    <div
      pages={4}
      className="bg-body h-full w-screen text-white font-poppins pb-12"
    >
      <Nav />
      <Header />
      <Work />
      <Technologies />
      <HireMe />
    </div>
  );
}

export default App;
