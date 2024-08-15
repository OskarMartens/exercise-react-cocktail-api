export interface IDetailedDrinkList {
  drinks: IDetailedDrink[];
}

// prettier-ignore
export interface IDetailedDrink {
  id:               string        | null;
  drinkName:        string        | null;
  ingredients:      IIngredient[] | null;
  category:         string        | null;
  tags:             ITag[]        | null;
  videoUrl:         string        | null;
  alcoholic:        string        | null;
  glass:            string        | null;
  instructionsEN:   string        | null;
  instructionsES:   string        | null;
  instructionsDE:   string        | null;
  instructionsFR:   string        | null;
  instructionsIT:   string        | null;
  thumbnail:        string;
}

// prettier-ignore
export interface IIngredient {
  ingredient:   string | null;
  measurement:  string | null;
}

export interface IContent {}

export interface IAlcoholFilter {
  alcoholic: string | null;
}

export interface ITag {
  tag: string;
}
export interface ICategory {
  category: string;
}

export interface IGlass {
  glass: string;
}

export interface IDrinkContext {
  currentDrink: any;
}
