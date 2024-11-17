import { IStore } from "./istore";


  export interface ICoupon {
    id: number;
    title: string;
    code: string;
    status: boolean;
    featured: boolean;
    start_date: Date;
    end_date: Date;
    flag_code: string[];
    store: IStore;
  }
 