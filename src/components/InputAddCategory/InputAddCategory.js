import React,{useState} from 'react'
import PropTypes from 'prop-types'
import Styles from './InputAddCategorie.module.css'

function InputAddCategory({onAddCategory}) {
    
    const [inputValue, setinputValue] = useState('')
    
    const handleChange=(e)=>{
        const inputText=e.target.value;
        setinputValue(inputText);
    }
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        onAddCategory(inputValue);
        setinputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                id='#newCat' 
                placeholder='search images'
                value={inputValue}
                onChange={handleChange}
                autoComplete="off"
                className={Styles.searchBar}
            />
        </form>
    )
}

InputAddCategory.propTypes = {
    onAddCategory:PropTypes.func.isRequired
}

export default InputAddCategory

