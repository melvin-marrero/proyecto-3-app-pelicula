import Peliculas from "./componentes/pelicula";
import "../src/estilosCss/containerPelicula.css"
import Carrusel from "./componentes/carrusel";
import Footer from "./componentes/footer";
import DataProvider from "./componentes/dataConten/dataConten";
import Formulario from "./componentes/formulario";
import Contenedor_De_Reproduccion from "./componentes/contenedor_De_Reproduccion";
import { Suspense } from "react";



function App() {
  return (
    <>
    <DataProvider>
      <Carrusel />
      <a href="/"><h1><u><i>trailer oficial, las mejores peliculas</i></u></h1></a>
      <Formulario />
      <Suspense fallback={<div>siiii...</div>}>
      <Contenedor_De_Reproduccion />
      </Suspense>
      <div className="container-pelicula">
         <Peliculas />
      </div>
      
      <Footer />
      </DataProvider>
    </>
  );
}

export default App;