import React,{useState} from 'react'
import PropTypes from 'prop-types'
import InputAddCategory from '../InputAddCategory/InputAddCategory'
const App=()=> {
    const apiKey='XnQiIsihPLVZ303SDHFUyYUTZIrJa5Ln';
    const [categories,setCategories]=useState(['cosa1','cosa2']);
    
    const handdleAddCategorie=(newCategorie)=>{
        setCategories([newCategorie,...categories]);
    }
    
    return (
        <div  className='App'>
            
            <InputAddCategory onAddCategory={handdleAddCategorie}/>    
            <hr />
            <div className='categories'>
                <h2>categories</h2>
                <ul>
                    {categories.map(cat=>{
                        return (
                            <li key={cat}>
                                {cat}
                            </li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

App.propTypes = {

}

export default App

