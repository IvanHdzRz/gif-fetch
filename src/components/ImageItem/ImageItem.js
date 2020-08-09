import React from 'react'
import Styles from './ImageItem.module.css'

const ImageItem=({id,title,url}) =>{
    return (
        <div className={Styles.imageItem} key={id}> 
            <img src={url}alt={title} />
            <h3>{title}</h3>
        </div>
    )
}



export default ImageItem

