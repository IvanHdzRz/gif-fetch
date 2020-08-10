import React,{useState,useEffect} from 'react'
import ImageItem from '../ImageItem/ImageItem';
import Styles from './ImageDisplayer.module.css'
import useFetchImages from '../../Hooks/useFetchImages';


function ImageDisplayer({keyword}) {
    
    const {isLoading,images}=useFetchImages(keyword)    
   
    return (
        <div className={Styles.ImageDisplayer}>
            <h2 className={Styles.seccionTitle}>
                {keyword}
            </h2>
            {isLoading&&<p>Cargando</p>}
            <div className={Styles.imageItems}>
                {images.map(imageData=>{
                    return (
                        <ImageItem {...imageData} key={imageData.id}/>
                    )
                })}
            </div>         
        </div>
    )
}


export default ImageDisplayer
