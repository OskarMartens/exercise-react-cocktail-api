import { useEffect } from "react";
import { useParams } from "react-router";
import useFetchData from "../../hooks/useFetchData";
import { useConvertDetailedDrink } from "../../hooks/useConvertData";
import DetailedDrinkCard from "../../components/DetailedDrinkCard/DetailedDrinkCard";
import { IDetailedDrink } from "../../interfaces/interface";

import "./InfoPage.css";

export default function InfoPage() {
  const id = useParams();
  const { data, isLoading, error, refresh } = useFetchData("lookup.php?i=" + id.id);

  useEffect(() => {
    refresh;
  }, [id]);

  const detailedDrink : IDetailedDrink | undefined = useConvertDetailedDrink(data?.drinks[0]);
  console.log(detailedDrink);
  console.log(typeof detailedDrink);

  return (
    <main className="infopage-main">
      <DetailedDrinkCard drink={detailedDrink} />
    </main>
  );
}
