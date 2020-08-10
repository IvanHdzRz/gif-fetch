import {useState, useEffect} from 'react'
import getImages from '../Helpers/getImages'


const useFetchImages=(category)=> {
        const [state, setstate] = useState({
            isLoading:true,
            images:[],
        })

        useEffect(()=>{
            getImages(category)
                .then(data=>{
                    setstate({
                        isLoading:false,
                        images:data,
                    })
                })
        },[category])

        return state;
}


export default useFetchImages

