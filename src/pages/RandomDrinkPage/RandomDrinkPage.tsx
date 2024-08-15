import React, { useEffect, useState } from "react";
import { useConvertDetailedDrink } from "../../hooks/useConvertData";
import useFetchData from "../../hooks/useFetchData";
import { IDetailedDrink, IDrinkContext } from "../../interfaces/interface";
import { IDetailedDrinkResponse } from "../../interfaces/ResponseInterfaces";
import LargeDrinkCard from "../../components/LargeDrinkCard/LargeDrinkCard";
import { useOutletContext } from "react-router-dom";

import './RandomDrinkPage.css';

export default function RandomDrinkPage() {
  const { data, isLoading, error, refresh } = useFetchData("random.php");

  const detailedDrink: IDetailedDrinkResponse | undefined = data?.drinks[0];

  const drink: IDetailedDrink | undefined =
    useConvertDetailedDrink(detailedDrink);

  return (
    <main className="random-drink-page-main">
      <LargeDrinkCard drink={drink} refresh={refresh} />
    </main>
  );
}
