import { useMemo } from "react";

interface PropsTypes {
    onClick?: () => void;
    icon:string
}
const Hoveritem = ({
    onClick,icon
}:PropsTypes)=>{
  
    
      return (
        <img
        className="rounded-full hover:bg-white p-2 w-9"
          onClick={(e) =>{
            e.stopPropagation()
            onClick?.()
          }}
          src={icon}
       />
        
      );

}
export default Hoveritem


