import { Link } from "react-router-dom";

function NavBar() {
    return ( 
        <>
        <nav className="p-2 bg-sky-600 shadow-slate-400" >                    
            
            <ul className="flex space-x-11 items-center justify-center">              
            
            
            <Link to="/"><p className="text-white font-bold text-2xl">Demo Streamins</p></Link>
            
            
              <li className="text-white font-bold text-1xl mx-5"><a className="cursor-pointer">login</a></li>
              <li className="text-white font-bold text-1xl bg-slate-900 px-3 py-1 rounded-lg"><a className="cursor-pointer">Start your free trial </a></li>  
            </ul>        
        </nav>
        <div className="p-2 bg-black shadow-black">
            <h2 className="text-white font-bold flex items-start ml-20">Popular title</h2>
        </div>

        </>

     );
}

export default NavBar;