import { useEffect, useState } from "react";

function Movies() {

    const[photos, setPhotos]=useState([]);

    useEffect(()=>{
        getPhotos().then(setPhotos);
    },[])
    
    const getPhotos =async()=>{
        
        const url=`https://jsonplaceholder.typicode.com/photos?_limit=12`;
        const resp=await fetch(url);
        const data=await resp.json();
        console.log(data);
        return data;
        
    }

        
        
    
        return ( 
        <div className=" grid grid-rows-4 grid-flow-col gap-4 items-center justify-center">
            {photos.map(pel=>(
                <div className=" border-solid border-2 border-indigo-600 text-center w-52 rounded-xl justify-center p-5">
                    <h2>{pel.title}</h2>
                    <img src={pel.url} alt={pel.url} className="w-24 h-24 relative bg-center"/>
                </div>
                
            ))}
               
        </div>
     );
}

export default Movies;