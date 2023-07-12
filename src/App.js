import { useState } from "react";

function App(){
const[data,setData] = useState(0);
    function funk()
    {
        for(let i=1;i<5;i++){
            console.log(setData(data+1));
        }
    }

    return(
        <>
        <button onClick={funk}>myButton</button>
        </>
    )
}

export default App;