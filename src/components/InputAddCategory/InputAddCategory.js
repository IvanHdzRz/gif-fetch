import React,{useState} from 'react'
import PropTypes from 'prop-types'

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
                placeholder='type a name of new category'
                value={inputValue}
                onChange={handleChange}
            />
        </form>
    )
}

InputAddCategory.propTypes = {
    onAddCategory:PropTypes.func.isRequired
}

export default InputAddCategory

