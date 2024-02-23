import { Dispatch, SetStateAction } from "react";

export type AppState = {
    name: string;
};

interface AppData {
    reload:()=>void
}

export default AppData;
