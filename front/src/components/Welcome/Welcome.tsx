import "./style.css"

import icon from "../../assets/icons/userbg.svg"

function Welcome(){
    const name = localStorage.getItem("firstname")
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