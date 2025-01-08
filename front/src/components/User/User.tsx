import "./style.css"

import icon from "../../assets/icons/userbg.svg"
import deleteUser from "../../assets/actions/deleteUser.svg"
import showUser from "../../assets/actions/show.svg"

function Users(props: any){
    if(props.type == "letter"){
        return(
            <div className="letter">
                <div className="Name">
                    <p>{props.name}</p>
                </div>
            </div>
        )
    }

    if(props.type == "user"){
        return(
            <div className="user">
                <div className="UserProfile">
                    <img src={icon}></img>
                </div>
                <div className="Name">
                    <p>{props.name}</p>
                </div>
                
                <div className="Actions">
                    <a href="#" className="select"><img src={showUser}></img></a>
                    <a href="#" className="delete"><img src={deleteUser}></img></a>
                </div>
            </div>
        )
    }    

}


export default Users