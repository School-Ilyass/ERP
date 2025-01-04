function InputField(props: any) {
    return (
      <div className="InputField">
        <label>{props.label}</label>
        <input
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          required
        />
      </div>
    );
  }
  
  export default InputField;