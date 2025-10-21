import "./App.css";

import icedCoffee from "./images/iced-coffee.png";

function App() {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${icedCoffee})` }}
        className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      >
        <div className="flex flex-col items-center justify-center">
          <h1
            className="text-7xl text-white
           font-[quattro]"
          >
            Cafe
          </h1>
          <h2 className="text-2xl text-white font-[alice]">in Perth</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
