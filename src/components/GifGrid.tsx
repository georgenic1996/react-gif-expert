import { GifItem} from './GifItem';
import { useFetchGifs } from "../hooks/useFetchGifs";
import type { GifImage } from './types';


interface GifGridProps {
  category: string;
}

export const GifGrid = ({category}:GifGridProps) => {

  const{images,isLoading}=useFetchGifs(category);
  console.log({isLoading})


  return (
    <>
        <h3>{category}</h3>
              { 
                isLoading &&(<h2>Cargando...</h2>)
              }
        <div className='card-grid'>
          {
            images.map(( image:GifImage) => (
              <GifItem 
              key={image.id}
              {...image}
              />
            ))
          }
        </div>   
    </>
  )
}
