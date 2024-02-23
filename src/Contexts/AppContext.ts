import { createContext } from "react";
import AppData from "../Types/Data/AppData";

const AppContext = createContext<AppData>({reload:()=>{}});

export default AppContext;
