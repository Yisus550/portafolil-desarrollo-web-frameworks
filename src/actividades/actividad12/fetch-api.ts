import type { GiphyRandomResponse } from "../../data/giphy.response.ts";

const API_KEY = "RlZYdn4Vl8uzDWUvTMdGfkMCOzlpWSsg";

const myRequest = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`,
);

const createImageInsideDOM = (url: string) => {
  const imgElemet = document.createElement("img");
  imgElemet.src = url;
  document.body.append(imgElemet);
};

myRequest
  .then((response) => response.json())
  .then(({ data }: GiphyRandomResponse) => {
    const imgUrl = data.images.original.url;
    createImageInsideDOM(imgUrl);
  })
  .catch((error) => console.error(error));
