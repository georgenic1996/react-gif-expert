import type { GifImage } from "../components/types";

interface GiphyApiImage {
  map: any;
  id: string;
  title: string;
  images: {
    downsized_medium: {
      url: string;
    };
  };
}


export const getGifs=async(category:string):Promise<GifImage[]> =>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=fcceqEHf8ddWdLZloG0YQtsPIv2o9Cne&q=${category}&limit=10`;
    const resp=await fetch(url)
    const {data}:{data:GiphyApiImage}=await resp.json() 

    const gifs=data.map((img:GiphyApiImage) =>({
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url,
    }))

    return gifs;

  }