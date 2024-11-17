import { ICoupon } from "./icoupon";
import { IMeta } from "./imeta";

export interface IStore {
    id: number;
    name: string;
    image: string;
    link: string;
    description: string;
    meta: IMeta;
    featured: string;
    status: string;
    category_id: number[];
    coupons: ICoupon[];
    about: string;
    title: string;
    discount: string;
  }