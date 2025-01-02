function Message(props: any){
    
    return(
        <div className="Messages">
            <div className="MessageIcon">
                <img src={props.icon}></img>
            </div>
            <div className="MessagesContent">
                <p>{props.msg}</p>
                <span>{props.date}</span>
            </div>
            
        </div>
    )
}

export default Message