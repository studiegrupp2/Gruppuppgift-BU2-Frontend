import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import { fetchAllProducts } from './api/fetchdata';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllProducts().then(setData)
  },[]);
  console.log(data);
  return (
    <>
      <Nav />
      <div>
        {data.length === 0 ?
         <p>loading</p> :
         (
          <ul>
          {data.map((datan) => (
            <li>
              <h1>{datan.title}</h1>
              <p>{datan.description}</p>
              <p>{datan.color}</p>
              <p>{datan.price}</p>
              {/* <p>{datan.reviews.inputReview}</p> */}
            </li>          
          ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default App;
