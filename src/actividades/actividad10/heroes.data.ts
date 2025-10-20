export interface IHero {
  id: number;
  name: string;
  owner: OwnerType;
}

export type OwnerType = "DC" | "Marvel" | "Disney";

export enum Owner {
  DC = "DC",
  MARVEL = "Marvel",
  DISNEY = "Disney",
}

export const heroes: IHero[] = [
  {
    id: 1,
    name: "Bataman",
    owner: Owner.DC,
  },
  {
    id: 2,
    name: "Spiderman",
    owner: Owner.DISNEY,
  },
  {
    id: 3,
    name: "Flash",
    owner: Owner.DC,
  },
  {
    id: 4,
    name: "Superman",
    owner: Owner.DC,
  },
  {
    id: 5,
    name: "Wolverine",
    owner: Owner.MARVEL,
  },
  {
    id: 6,
    name: "Ironman",
    owner: Owner.MARVEL,
  },
];
