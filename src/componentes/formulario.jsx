import { useContext } from "react"
import { dataContent } from "./dataConten/dataConten"

export default function Formulario(){
   const { buscarMovie, setSearchKey,searchKey }=useContext(dataContent)
  return (
    <form onSubmit={buscarMovie}>
      <input type="text" 
       placeholder="buscar" 
       className="buscar"
       value={searchKey} 
       onChange={(e)=> setSearchKey(e.target.value)}/>
      <button className="btn"><i className="bi bi-search"></i></button>
    </form>
  )
}


