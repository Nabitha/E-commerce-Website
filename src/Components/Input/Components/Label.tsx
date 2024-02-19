type PropsTypes = {
    type?: string;
    value?: string;
    label?: string;
};
const Label = ({label}:PropsTypes) => {
  return (
    <label>
        
   
        {label}

    </label>
  )
}

export default Label