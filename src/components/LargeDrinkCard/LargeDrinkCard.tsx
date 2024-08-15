import { IDetailedDrink } from "../../interfaces/interface";
import { Link } from "react-router-dom";

import "./LargeDrinkCard.css";

interface LargeDrinkCardProps {
  drink: IDetailedDrink | undefined;
  refresh: () => void;
}

export default function LargeDrinkCard({ drink, refresh }: LargeDrinkCardProps) {
  return (
    <main className="large-drink-card-main">
      <div>
        <img src={drink?.thumbnail} alt="" className="drink-image" />
      </div>
      <h2>{drink?.drinkName}</h2>
      <Link to={`/cocktail-info/${drink?.id}`}>Read more</Link>
      <button onClick={refresh}>Not your taste? Click here to generate an new random drink</button>
    </main>
  );
}
