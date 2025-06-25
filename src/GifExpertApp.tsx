import { useState } from "react"
import { AddCategory ,GifGrid} from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['tbate']);
    
    const onAddCategory=(newCategory:string)=>{

        if(categories.includes(newCategory))return;
       setCategories([newCategory,...categories]);

    //    setCategories([...categories,'valorant'])
    }


    return (
    
    <>
        <h1>GifExpertApp</h1>

       < AddCategory 
            onNewCategory={ onAddCategory}
    //    setCategories={setCategories}
       
       /> 
        {/* <button onClick={onAddCategory}>agregar</button> */}
      
        {   
            categories.map((category) => (
                    <GifGrid 
                    key={category}
                    category={category}
                    />
            ))
        }
     
    </>
  )
}
