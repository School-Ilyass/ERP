function Button(props: any) {
    return (
      <button className="Button" onClick={props.onClick}>
        {props.text}
      </button>
    );
  }
  
  export default Button;