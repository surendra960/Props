import React from 'react'

const GetValue = () => {
    function getData(e){
        console.warn(e)
    }
  return (
    <>
    <h1>Get input box value !</h1>
    <input type="text" onChange={getData} />
    </>
  )
}

export default GetValue;