import { Routes, Route, BrowserRouter, Link} from "react-router-dom";
import Inicio from "./Componet/Inicio";
import Movies from "./Componet/Movies";
import NavBar from "./Componet/NavBar";
import Peliculas from "./Componet/Peliculas";
import PieDePagina from "./Componet/PieDePagina";
import Series from "./Componet/Series";

function App() {  

  return (
  
      <div className="App h-screen">  
      
      <BrowserRouter> 
      <NavBar/>        
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="series" element={<Series/>}/>
            <Route path="peliculas" element={<Peliculas/>}/> 
            <Route path="movies" element={<Movies/>}/>
            <Route path="/*" element={<Peliculas/>}/>
          </Routes>          
       <PieDePagina/>                  
        </BrowserRouter>        
      </div>
    
    
  )
}

export default App;
