import sample from '../data/sample.json';
import Card from './Card';
function Peliculas() {  
    
 return ( 
        
        <div className='grid grid-cols-4 gap-4 mt-6 ml-6 '>
            
            {sample.entries.map(pel=>(
                
                <Card 
                key={pel.id}
                titulo={pel.title}
                descripcion={pel.description}
                programType={pel.programType}  
                imagen={pel.images['Poster Art'].url} 
                releaseYear= {pel.releaseYear}            
                
                />
                
            ))}
            






        </div>
     );
}

export default Peliculas;