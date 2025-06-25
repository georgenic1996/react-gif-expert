import { useState } from 'react';

interface AddCategoryProps {
   onNewCategory: (newCategory: string) => void;
}

export const AddCategory:React.FC<AddCategoryProps>= ({onNewCategory}) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange=({target}:React.ChangeEvent<HTMLInputElement>)=>{
        setinputValue(target.value);
    }

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) =>{
      const textClear=inputValue.trim().toLowerCase()
      event.preventDefault()
      if(textClear.length<=1)return;

      
      // setCategories(categories =>[inputValue,...categories]);
      onNewCategory(textClear)
      setinputValue('');   
    }

  return (
    <>

    <form onSubmit={onSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={onInputChange}
            />
    </form>


    </>
  )
}
