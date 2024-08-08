import { createContext } from "react";
import { URL_Pelicula } from "../URL_pelicula";
import axios from "axios";
import { useState } from "react";

const Api_URL=URL_Pelicula
const Api_key="4f5f43495afcc67e9553f6c684a82f84"

export const dataContent = createContext();

const DataProvider=({children})=>{
  const [movies,setMovies]=useState([]);
  const [searchKey,setSearchKey]=useState("");
  const [trailer,setTrailer]=useState(null);
  const [movie,setMovie]=useState({title:"loading movie"});
  const [playing,setPlaying]=useState(false);

  const fechMovies= async(searchKey)=>{
    const type= searchKey ? "search":"discover"
    const {data: {results},
  }= await axios.get(`${Api_URL}/${type}/movie`,{
    params:{
      api_key:Api_key,
      query:searchKey
    },
  });
  
  setMovies(results);
  setMovie(results[0]);
  if(results.length){
    await fechMovie(results[0].id);
  }
  setSearchKey("")
  };
  
  const buscarMovie= (e)=>{
    e.preventDefault();
    fechMovies(searchKey); 
 }
 const fechMovie= async(id)=>{
   const {data}=await axios.get(`${Api_URL}/movie/${id}`,{
    params:{
      api_key:Api_key,
      append_to_response:"videos"
    }
   })
   if(data.videos && data.videos.results){
    const trailer= data.videos.results.find(
      (vid)=> vid.name ==="official trailer"
    );
    setTrailer(trailer? trailer:data.videos.results[0]);
   }
   setMovie(data)
 }
 const seletMovie=async(movie)=>{
   await fechMovie(movie.id)
    seletMovie(movie)
    window.scrollTo(0,0)
 }
 
 return <dataContent.Provider value={{movies,setMovies,searchKey,setSearchKey,fechMovies,buscarMovie,movie,seletMovie,playing,trailer,setPlaying}}>{children}</dataContent.Provider>
}
export default DataProvider;