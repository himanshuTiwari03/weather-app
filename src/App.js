import { useState } from 'react';
import './App.css';
import logo from './images/p1.png'

function App() {
  let [city,setCity] = useState('');
  let [citydetails,setCitydetails]= useState();
  let [loading,setLoading] = useState(false);
  let name = 'pune';
  let showData = (e) =>{
    setLoading(true);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=275439389cf4754b970437e5624f22c3&units=metric`)
    .then((res)=> res.json())
    .then((finalRes)=>{
      if(finalRes.cod == 404){
        setCitydetails(undefined);
      }
      else{
        console.log(finalRes);
      setCitydetails(finalRes);
     
    }
    setLoading(false);
    })
    e.preventDefault();
    
    setCity('');
  }
  return (
    <div className="main">
    
      <div className='search'>
      <h1>Weather App</h1>
    <input type='text' placeholder="enter city name....." value={city} onChange={(e)=> setCity(e.target.value)}></input>
    <button onClick={showData}>search</button>
      </div>
      <div className='result'>
        <img src='https://i.gifer.com/ZKZg.gif' className={(loading)? 'nloader': 'loader'}></img>
        {
        citydetails!==undefined
        ?
        <>
      <h1>{citydetails.name} {citydetails.sys.country}</h1> 
      <h3>{Math.round(citydetails.main.temp)}</h3>
      <img src={`https://openweathermap.org/img/w/${citydetails.weather[0].icon}.png`}></img>
      <h3>{citydetails.weather[0].description}</h3>
      </>
      :
      <h4>No data found</h4>
        }
      </div>
      
    </div>
  );
}

export default App;
