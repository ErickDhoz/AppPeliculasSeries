
function Card({ titulo, descripcion, programType, imagen, releaseYear}) {
    return ( 
      <div className="border-solid border-2 rounded-2xl">
      <div>
        <div className="w-72 h-94 border">
          <div className="w-40 h-auto  mt-2">
          <center><img src={ imagen } alt=''className="h-full w-full object-cover object-center lg:h-full lg:w-full m-auto block"/></center>   
          </div>
        </div>
          <div className="w-76 h-auto border-solid text-justify items-center p-5">
            <h2 className="text-center font-bold text-lg">{titulo}</h2>
          <span aria-hidden="true" className="inset-0 text-justify">{descripcion}</span>
          <p className="mt-1 text-sm text-gray-500">Año: {releaseYear} Tipo: {programType}</p>  
         </div>   
               

        </div>
        </div>
     );
}

export default Card;