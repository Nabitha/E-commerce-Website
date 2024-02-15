type PropsTypes = {
    type?: string;
    value?: string;
    label?: string;
};
const Label = ({type,value,label}:PropsTypes) => {
  return (
    <label
        className="border-4"
    >
        {label}

    </label>
  )
}

export default Label