import {
  createContext,
  ReactElement,
  ReactNode,
  useRef,
  useState,
} from "react";
import { IDetailedDrink, IDrinkContext } from "../interfaces/interface";

interface IDrinkProviderProps {
  children: ReactNode;
}

export const DrinkContext = createContext<IDrinkContext>({} as IDrinkContext);

export function DrinkProvider({ children }: IDrinkProviderProps): ReactElement {
  const currentDrink = useRef();

  const values: IDrinkContext = {
    currentDrink,
  };

  return (
    <DrinkContext.Provider value={values}>{children}</DrinkContext.Provider>
  );
}
