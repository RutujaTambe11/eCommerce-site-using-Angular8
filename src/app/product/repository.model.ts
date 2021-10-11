import { SimpleDataSource } from "./datasource.model";
import { IProduct } from "./product.model";

export class RepositoryModel{
    private products:IProduct[];
    private dataSource:SimpleDataSource;
    private locator = (p:IProduct,id:number)=> p.id==id;
    constructor(){
        this.dataSource=new SimpleDataSource();
        this.products=new Array<IProduct>();
        this.dataSource.getData().forEach(p=>this.products.push(p));
    }
    //retrieve all products
    getProducts():IProduct[]{
        return this.products;
    }
    // get a single product by id
    getProduct(id:number):IProduct{
        return this.products.filter(p=>this.locator(p,id))[0];
    }

    // add a product to the array
    // delete a product from the array
    deleteProduct(id:number){
        let index = this.products.findIndex(p=>this.locator(p,id));
    if(index > -1)
    this.products.splice(index,1);
   }


    
}