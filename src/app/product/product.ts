import { IProduct } from "./product.model";

export class Product implements IProduct{
    public id:number;
    public name:string;
    public category:string;
    public price:number;
    public description:string;
    public imageUrl?:string;
    public rating?:number;
    

}