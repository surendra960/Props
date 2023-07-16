// import React from 'react'

import react ,{ useState } from 'react'

function Adding_page() {
const [data_n , change_val] = useState("Rajjo");
const [data_ch, getVal] = useState("");

const callFunction = ()=>{
    change_val("Rajkuwar");
}

const reVert = ()=> {
change_val("Rajjo");
}

const valueGet =(e)=>{
    getVal(e.target.value);
}
  return (
    <div>
        <h1>This Third page {data_n}</h1>
        <button onClick={callFunction}>Full name</button>
        <button onClick={reVert}>Revert Change</button>
        <br />
        <p>Now get the Value of Input box vale {data_ch}</p>
        <input type="text" onChange={valueGet} />

    </div>
  )
}

export default Adding_page