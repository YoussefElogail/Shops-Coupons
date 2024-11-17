import { IStore } from "./istore";

export interface ICategory {
  id: number;
  name: string;
  meta_title: string;
  meta_description: string;
  meta_keyword: string;
  stores: IStore[];
}
