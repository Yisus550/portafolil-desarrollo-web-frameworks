import { type IHero, Owner, heroes } from "./heroes.data.ts";

export const getHeroById = (id: IHero["id"]): IHero => {
  const hero = heroes.find((hero) => hero.id === id);
  if (!hero) throw new Error("Heroe no encontrado.");

  return hero;
};

export const getHerosByOwner = (owner: IHero["owner"]): IHero[] => {
  const heros = heroes.filter((hero) => hero.owner === owner);
  if (!heros) throw new Error("Propietario no existe.");

  return heros;
};
