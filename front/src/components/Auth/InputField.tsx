function InputField(props: any) {
    return (
      <div className="InputField">
        <label>{props.label}</label>
        <input
          id="EmailInput"
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required
        />
      </div>
    );
  }
  
  export default InputField;