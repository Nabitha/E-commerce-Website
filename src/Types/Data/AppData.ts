import { Dispatch, SetStateAction } from "react";

export type AppState = {
    name: string;
};

interface AppData {
    reload:()=>void;
    productList:any[];
}

export default AppData;
