import { IDetailedDrink, IIngredient, ITag } from "../interfaces/interface";
import {
  IDetailedDrinkResponse,
  IDrinkReponseList,
} from "../interfaces/ResponseInterfaces";

export function useConvertDrinkList(
  rawDrinkList: IDrinkReponseList | undefined
): (IDetailedDrink | undefined)[] {
  if (!rawDrinkList || !rawDrinkList.drinks) {
    return [];
  }

  let listToReturn: (IDetailedDrink | undefined)[] = [];
  const rawListLength = rawDrinkList.drinks.length;

  for (let index = 0; index < rawListLength; index++) {
    let drink: IDetailedDrink | undefined = useConvertDetailedDrink(
      rawDrinkList.drinks[index]
    );
    listToReturn.push(drink);
  }

  return listToReturn;
}

function useConvertTags(drink: IDetailedDrinkResponse): ITag[] | null {
  let tags: ITag[] = [];

  const rawTags = drink.strTags;
  let stringTags: string[] | undefined = rawTags?.split(",");

  if (stringTags) {
    for (const tag of stringTags) {
      tags.push({ tag: tag.trim() });
    }

    return tags;
  } else return null;
}

export function useConvertDetailedDrink(
  object: IDetailedDrinkResponse | undefined
): IDetailedDrink | undefined {
  if (!object) return undefined;

  // prettier-ignore
  const drink: IDetailedDrink = {
    id:             object!.idDrink,
    drinkName:      object!.strDrink,
    ingredients:    mapIngredientAndMeasurement(object),
    category:       object!.strCategory,
    tags:           useConvertTags(object!),
    videoUrl:       object!.strVideo,
    alcoholic:      object!.strAlcoholic,
    glass:          object!.strGlass,
    instructionsEN: object!.strInstructions,
    instructionsES: object!.strInstructionsES,
    instructionsDE: object!.strInstructionsDE,
    instructionsFR: object!.strInstructionsFR,
    instructionsIT: object!.strInstructionsIT,
    thumbnail:      object!.strDrinkThumb!,
  };

  return drink;
}

function mapIngredientAndMeasurement(drinkData: any): IIngredient[] {
  let ingredients: IIngredient[] = [];

  if (!drinkData) return ingredients;

  for (let index = 1; index <= 15; index++) {
    const ingredient = drinkData![`strIngredient${index}`];
    const measurement = drinkData![`strMeasure${index}`];

    if (ingredient || measurement) {
      ingredients.push({ ingredient, measurement });
    }
  }
  return ingredients;
}

export function getListOfTags(tagData: string) {
  const tags = tagData.split(",");
  console.log(tags);
}
