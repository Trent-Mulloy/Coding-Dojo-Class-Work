import { useParams } from "react-router";
import React, {useEffect, useState } from  'react';
import axios from 'axios';

const Planets = props =>{
    const { id } = useParams();
    const [Planet, setPlanet] = useState();

   
    useEffect(()=>{
        console.log("calling API");
        axios.get(`http://swapi.dev/api/planets/${id}/`)
          .then(res => {
            console.log(res);
            setPlanet(res.data);
          })
          .catch(err => console.log(err))
      },[id])
    
      const Render = () =>{
        if(!Planet){
          return (<div></div>)
        }
      return(
          <div>
            <h1>{Planet.name}</h1>
            <h2>Climate: {Planet.climate}</h2>
            <h2>Terrain: {Planet.terrain}</h2>
            <h2>Population: {Planet.population}</h2>
          </div>
      )
    }
    return Render();
}

export default Planets;