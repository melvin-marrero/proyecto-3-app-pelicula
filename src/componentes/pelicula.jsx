
import { useEffect } from "react"
import { URL_Image } from "./URL_pelicula"
import { useContext } from "react"
import { dataContent } from "./dataConten/dataConten"


export default function Pelicula() {
  const { fechMovies,movies,seletMovie,}=useContext(dataContent)
  const URL_Img=URL_Image
   
  useEffect(()=>{
    fechMovies();
  },[]);
  return movies.map((movie)=>{
    return (
      <div className="movie" key={movie.id} onClick={()=>seletMovie(movie)}>
        <img src={`${URL_Img + movie.poster_path}`} alt='img-pelicula' height={450} width="100%"/>
          <div className="info-movie">
            <h4>{movie.title}</h4>
          </div>
      </div>
    )
  })
}



