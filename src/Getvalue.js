import React, { useState } from 'react';


function Getvalue(){
   
        const [data_name, setName] =useState("Ramesh");



    function changeData(e){
        let a = e.target.value;

        console.log(a);
    }
    
    function goingUp(){
        setName("Suresh");
    }
    return(
        <>
        <h1>Get the Valuve from Box!</h1>

        <h1>hi ramesh : {data_name}</h1>
        <button onClick={goingUp}>Change value by hook</button>
        <input type="text" onChange={changeData} />
        </>
    );
}


export default Getvalue;