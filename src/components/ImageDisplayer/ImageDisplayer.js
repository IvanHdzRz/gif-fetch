import React,{useState,useEffect} from 'react'

function ImageDisplayer({keyword}) {
    
    const [images, setimages] = useState([])
    const getImages=async ()=>{
        const apiKey='XnQiIsihPLVZ303SDHFUyYUTZIrJa5Ln';
        const limit=10
        const responce= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}`)
        const {data}=await responce.json();
        const images=data.map(image=>{
            return {
                title:image.title,
                url:image.images.downsized.url
            }
        })
        setimages(images);
    }
    useEffect(() => {
        getImages();
    },[])

    return (
        <div className='imageDisplayer'>
            <h2>{keyword}</h2>
            {images.map(({title,url},i)=>{
                return (
                    <div key={i}>
                        <h2 >{title}</h2>
                        <img alt={title} src={url} loading='lazy'/>
                    </div>
                )
            })}         
        </div>
    )
}


export default ImageDisplayer
