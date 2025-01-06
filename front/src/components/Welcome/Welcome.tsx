import "./style.css"

import icon from "../../assets/icons/userbg.svg"

function Welcome(){
    return(
        <div className="Welcome ">
            <div className="Profile">
                <img src={icon}></img>
            </div>
            <div className="Hello">
                <p>Hello, Ilyass</p>
            </div>

            
        </div>
    )
}


export default Welcome