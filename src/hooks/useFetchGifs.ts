import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import type { GifImage } from '../components/types';


export const useFetchGifs = (category:string) => {
  const [images, setImages] = useState<GifImage[]>([]);
  const [isLoading,setIsLoading]=useState(true)

  const getImages=async () =>{

    const newImages=await  getGifs(category);
    setImages(newImages);
    setIsLoading(false)

  }
  useEffect( () => {
    getImages();

  },[])
    return {
        images,
        isLoading
    }
}
