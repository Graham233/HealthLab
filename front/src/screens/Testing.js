import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Testing(){
    const {id} = useParams()
    useEffect(()=>{
        if(id){
            console.log(`The ID is : ${id}`)
        }
    }, [id])
    return(
        <div className='testClass'>"This is a test"</div>
    ); 
}