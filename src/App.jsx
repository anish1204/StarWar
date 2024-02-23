import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import Pagination from './components/Pagination';
import CardSec from './components/CardSec';
function App() {

  let API = "https://swapi.dev/api/planets/?format=json";
  
  let data = []
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const fetchDataApi = async ( url ) =>{
    try{
        const res = await fetch(url);
        data = await res.json();
        data = data
        
        console.log(data);
    }
    catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
      fetchDataApi(API);
  }, [])

  data.forEach((item)=>
  {
    console.log(item.results.name);
  })
  
  const lastPostPage = currentPage * postPerPage;
  const firstPostPage = lastPostPage - postPerPage;
  const currentPost = data.slice(firstPostPage, lastPostPage)

  return (
    <div className="App">
      
      <CardSec/>
      
      {
        data.map((item,index)=>{
          return  <h1 key={index}>{item.name} </h1>
        })
      }

      
    
      <Pagination totalPosts={data.length}
        postPerPage={postPerPage}
      />
    </div>
  );
}

export default App;
