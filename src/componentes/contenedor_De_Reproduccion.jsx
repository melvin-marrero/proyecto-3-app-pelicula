import { URL_Image } from "./URL_pelicula"
import { useContext } from "react"
import { dataContent } from "./dataConten/dataConten"
import YouTube from "react-youtube"
import "../estilosCss/contenedorReproduccion.css"

export default function Contenedor_De_Reproduccion() {
    const image_Path=URL_Image
    const {movie,playing,trailer,setPlaying}=useContext(dataContent)
  return (
    <>
      <main>
        {movie? (
        <div className="viwtrailer" style={{backgroundImage:`Url("${image_Path}/${movie.backdrop_path}")`}}>
         {playing?(
          <>
          <YouTube 
          videoId={trailer.key}
          className="reproductor container"
          containerClassname={"youtube-container amru"}
          opts={{
            width: "100%",
            height: "100%",
            playerVars:{
              autoplay:1,
              controls:0,
              cc_load_policy:0,
              fs:0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            }
          }}/>
          <button onClick={()=>setPlaying(false)} className="btn-cerrar">
            cerrar
          </button>
          </>  
         ):(
            <div className="container">
                <div>
                    {trailer? (
                        <button onClick={()=>setPlaying(true)} className="btn-repro">
                          Reprodcucir
                        </button>
                    ):("no hay trailer disponibles")}
                    <h1 className="title"><u>{movie.title}</u></h1>
                    <p>{movie.overview}</p>
                </div>
            </div>
         )}
        </div>):"no hay resultado para su busqueda"
        }
      </main>
    </>
  )
}
