import React, { useContext } from "react";
import { IDrinkContext } from "../interfaces/interface";
import { DrinkContext } from "../context/DrinkProvider";

export default function useDrinkLogic(): IDrinkContext {
  return useContext(DrinkContext);
}
