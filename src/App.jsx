import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import Home from './pages/Home'


function App() {
  const [data, setData]=useState([])
  const fetchData = async () => {
    try {
      const response = await axios("https://abhishekbackend.onrender.com/resume");
     
      setData(response.data[0])
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <Home data={data}/>
    </>
  )
}

export default App
