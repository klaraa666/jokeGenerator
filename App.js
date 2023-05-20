import './App.css';
import React, { useState, useEffect } from "react";

function App() {

  const [data, setItems] = useState(null);
  const [loading, setIsLoaded] = useState(true);
  const [error, setError] = useState(null);
  var   [showData, setShowData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {

     fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart")
       .then((res) => res.json())
       .then(
         (result) => {
           setIsLoaded(true);
           setItems(result);
           console.log(result);
         },

         (error) => {
           setIsLoaded(true);
           setError(error);
         }
       );
      }
      fetchData();
    }, [])

        const fetchData = async () => {
          fetch("https://v2.jokeapi.dev/joke/Any?safe-mode&type=twopart")
            .then((res) => res.json())
            .then(
              (result) => {
                setIsLoaded(true);
                setItems(result);
                console.log(result);
              },

              (error) => {
                setIsLoaded(true);
                setError(error);
              }
            );
        };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>WELCOME TO THE JOKE GENERATOR</h2>
          
          <button className='jokeOne'type='submit' onClick={() => {setShowData(true); fetchData()}} p={data} >
            Press for a new joke!
          </button>
          {showData && <ButtonClick p={data}/>}

          </div>
      </header>
    </div>
  );
}

function ButtonClick (props) {
return (
  <div>
    <br></br>
    {props.p && props.p.setup}
    <br></br>
    <br></br>
    {props.p && props.p.delivery}
  </div>
)
}

export default App;
