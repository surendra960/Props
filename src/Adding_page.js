import React from 'react'
import react ,{ useState } from 'react'

function Adding_page() {
const [data_n , change_val] = useState("Rajjo");

const callFunction = ()=>{
    change_val("Rajkuwar");
}

const reVert = ()=> {
change_val("Rajjo");
}

  return (
    <div>
        <h1>This Third page {data_n}</h1>
        <button onClick={callFunction}>Full name</button>
        <button onClick={reVert}>Revert Change</button>
    </div>
  )
}

export default Adding_page