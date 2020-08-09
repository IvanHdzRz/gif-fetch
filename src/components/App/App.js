import React,{useState} from 'react'

import InputAddCategory from '../InputAddCategory/InputAddCategory'
import ImageDisplayer from '../ImageDisplayer/ImageDisplayer'
const App=()=> {
    
    const [categories,setCategories]=useState(['garden']);
    
    const handdleAddCategorie=(newCategorie)=>{
        setCategories([newCategorie,...categories]);
    }
    
    return (
        <div  className='App'>
            
            <InputAddCategory onAddCategory={handdleAddCategorie}/>    
            <hr />
            
            {categories.map(categorie=>
                <ImageDisplayer keyword={categorie} key={categorie}/>
            )}
        </div>
    )
}



export default App

