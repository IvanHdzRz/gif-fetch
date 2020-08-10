const getImages=async (keyword)=>{
    const apiKey='XnQiIsihPLVZ303SDHFUyYUTZIrJa5Ln';
    const limit=8
    const responce= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(keyword)}&limit=${limit}`)
    const {data}=await responce.json();
    
    const images=data.map(image=>{
        return {
            id:image.id,
            title:image.title,
            url:image.images.downsized.url
        }
    })
    
    return images
}
export default getImages