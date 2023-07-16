import { useState } from "react";
import Getvalue from "./Getvalue";
import Adding_page from "./Adding_page";
import Toggale from "./Toggale";

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
        <Getvalue/>
        <Adding_page/>
        <Toggale/>
        </>
    )
}

export default App;