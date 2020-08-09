import React,{useState,useEffect} from 'react'
import ImageItem from '../ImageItem/ImageItem';
import Styles from './ImageDisplayer.module.css'
function ImageDisplayer({keyword}) {
    
    const [images, setimages] = useState([])
    const getImages=async ()=>{
        const apiKey='XnQiIsihPLVZ303SDHFUyYUTZIrJa5Ln';
        const limit=8
        const responce= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}`)
        const {data}=await responce.json();
        
        const images=data.map(image=>{
            return {
                id:image.id,
                title:image.title,
                url:image.images.downsized.url
            }
        })
        console.log(images);
        setimages(images);
    }

    useEffect(() => {
        getImages();
    },[])

    return (
        <div className={Styles.ImageDisplayer}>
            <h2 className={Styles.seccionTitle}>
                {keyword}
            </h2>
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
