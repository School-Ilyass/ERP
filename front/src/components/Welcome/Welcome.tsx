import "./style.css"

import icon from "../../assets/icons/userbg.svg"
import { useState } from "react"

function Welcome(){
    const [name, setName] = useState("")
    fetch("http://localhost:5289/api/Users/login")
    .then(res =>res.json())
    .then(res => setName(res.message))
    return(
        <div className="Welcome ">
            <div className="Profile">
                <img src={icon}></img>
            </div>
            <div className="Hello">
                <p>Hello, {name}</p>
            </div>

            
        </div>
    )
}


export default Welcome