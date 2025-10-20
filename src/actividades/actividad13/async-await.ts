import type { GiphyRandomResponse } from "../../data/giphy.response.ts";

const API_KEY = "RlZYdn4Vl8uzDWUvTMdGfkMCOzlpWSsg";

const createImageInsideDOM = (url: string) => {
  const imgElemet = document.createElement("img");
  imgElemet.src = url;
  document.body.append(imgElemet);
};

const getRandomGiftUrl = async (): Promise<string> => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
  );

  const { data }: GiphyRandomResponse = await response.json();

  return data.images.original.url;
};

getRandomGiftUrl().then(createImageInsideDOM);
