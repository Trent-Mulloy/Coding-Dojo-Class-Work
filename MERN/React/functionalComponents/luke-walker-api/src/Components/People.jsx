import { useParams } from "react-router";
import React, {useEffect, useState } from  'react';
import axios from 'axios';

const People = props =>{
    const { id } = useParams();
    const [Person, setPerson] = useState();

   
    useEffect(()=>{
        console.log("calling API");
        axios.get(`http://swapi.dev/api/people/${id}/`)
          .then(res => {
            console.log(res);
            setPerson(res.data);
          })
          .catch(err => console.log(err))
      },[id])
    
      const Render = () =>{
        if(!Person){
          return (<div></div>)
        }
      return(
          <div>
            <h1>{Person.name}</h1>
            <h2>Height: {Person.height}</h2>
            <h2>Mass: {Person.mass}</h2>
            <h2>Hair Color: {Person.hair_color}</h2>
            <h2>Skin Color: {Person.skin_color}</h2>
          </div>
      )
    }
    return Render();
}

export default People;