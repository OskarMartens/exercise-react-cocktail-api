import React, { ReactElement } from "react";
import { IDetailedDrink, IIngredient } from "../../interfaces/interface";

import "./DetaliedDrinkCard.css";

interface IDetailedDrinkCardProps {
  drink: IDetailedDrink | undefined;
}

export default function DetailedDrinkCard({ drink }: IDetailedDrinkCardProps): ReactElement {
  console.log(drink);

  const ingredients: IIngredient[] | null | undefined = drink?.ingredients;

  const tagsToRender = drink?.tags ? (
    <div className="tags">
      Tags:
      {drink?.tags.map((t) => (
        <p key={t.tag} className="tags-info">
          {t.tag},
        </p>
      ))}
    </div>
  ) : null;

  return (
    <main className="detailed-main">
      <section className="basic-section">
        <h3>{drink?.drinkName}</h3>
        {tagsToRender}
        Category: {drink?.category}
        <br />
        Glass: {drink?.glass}
        <br />
        <br />
        Ingredients:
        {ingredients?.map((i) => (
          <div key={i.ingredient} className="ingredients">
            <p>{i.ingredient}</p>
            <p>{i.measurement}</p>
          </div>
        ))}
      </section>

      <section>
        <img src={drink?.thumbnail} alt="" className="image-section" />
      </section>
      <section className="instructions-section">{drink?.instructionsEN}</section>
    </main>
  );
}
