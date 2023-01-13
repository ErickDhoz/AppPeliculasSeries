import { Link } from "react-router-dom";
import img from '../assets/placeholder.png'


function Inicio() {
    return ( 
        
        <div className="flex items-center justify-center my-20">
                  
            <div className="bg-black w-40 mx-5 h-60 relative inline-block text-center rounded-lg">                
                <img src={img} alt='Series' className="w-60 h-auto absolute flex items-center justify-center top-12"/>
                <Link to="/series"><span className="text-white absolute font-bold text-2xl top-24 left-12">Series</span></Link>
            </div>
            
            <div className="bg-black w-40 mx-5 h-60 relative inline-block text-center rounded-lg">                
                <img src={img} alt='Peliculas' className="w-60 h-auto absolute flex items-center justify-center top-12"/>
                <Link to="/peliculas"><span className="text-white absolute font-bold text-2xl top-24 left-10">Peliculas</span></Link>
            </div>
            <div className="bg-black w-40 mx-5 h-60 relative inline-block text-center rounded-lg">                
                <img src={img} alt='movies' className="w-60 h-auto absolute flex items-center justify-center top-12"/>
                <Link to="/movies"><span className="text-white absolute font-bold text-2xl top-24 left-10">Movies</span></Link>
            </div>
            
            
        
        
        </div>
     );
}

export default Inicio;