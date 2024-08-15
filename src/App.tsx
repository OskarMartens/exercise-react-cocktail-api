import { useRef, useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { IDetailedDrink, IDrinkContext } from "./interfaces/interface";

function App() {

  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
