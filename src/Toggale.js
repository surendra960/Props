import React from 'react'
import react, { useState } from 'react'

function Toggale() {
    const [simple, changeSimple] = useState(true);
    const changeValue=()=>{
        changeSimple(false);
    }
  return (
    
    <div>
        {
            simple ? <h1>Showing Line</h1> : null 
        }

        <button onClick={()=>changeSimple(false)}>Hide</button>
        <button onClick={()=>changeSimple(true)}>Show</button>

    </div>
  )
}

export default Toggale