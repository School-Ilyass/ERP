function Link(props: any){
    return(
        <div id = {props.id} className="Icon">
            <a href= {props.href }><img src={props.icon}></img></a>
        </div>
    )
}

export default Link;