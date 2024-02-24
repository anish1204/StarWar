import "./App.css";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import CardSec from "./components/CardSec";
import axios from "axios";
function App() {
  let API = "https://swapi.dev/api/planets/?format=json";

  let [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(3);

  const fetchDataApi = async (url) => {
    try {
      const userData = await axios.get(url);
      const {
        data: { results },
      } = userData;
      console.log(results);

      const namesArr = results.map((name) => name.name);
      setData(namesArr);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchDataApi(API);
  }, []);

  const lastPostPage = currentPage * postPerPage;
  const firstPostPage = lastPostPage - postPerPage;
  const currentPost = data.slice(firstPostPage, lastPostPage);

  console.log(data);

  return (
    <div className="App">
      {data.map((name, index = 0) => (
        <CardSec key={index} planetName={name} />
      ))}

      <Pagination totalPosts={data.length} postPerPage={postPerPage} />
    </div>
  );
}

export default App;
