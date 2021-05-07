import React ,  {useState,useEffect} from 'react'
import List from "./List"
import Header from "./Header"
import RentList from "./RentList"
export default function MovieList() {

    const [list, setlist] = useState([]);

  useEffect (()=>{
      fetch('http://localhost:3000/api/movies')
.then(response => response.json())
.then(data => setlist(data));
  }
  )
  const [RentMList, setRentMList] = useState([]);

  useEffect (()=>{
      fetch('http://localhost:3000/api/rents')
.then(response => response.json())
.then(data => setRentMList(data));
  }
  )
    return (
        <div>
            <Header/>
            {list.map(p => <List movieList={p}/>)}
            {RentMList.map(l=><RentList rentMovie={l}/> )}
        </div>
    )
}
