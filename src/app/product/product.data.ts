import {InMemoryDbService} from "angular-in-memory-web-api"
import { IProduct } from "./product.model";
export class ProductData implements InMemoryDbService{
    createDb(){
        const products:IProduct[]=[
            {"id":1,
            "name":"Shirt",
            "category":"Men's Clothing",
            "price":999,
            "description":"Casuals shirt, office wear",
            "imageUrl":"assets/images/shirt.jpg",
            "rating":4.5,
        },
        {
            "id":2,
            "name":"Football",
            "category":"Sports",
            "price":1999,
            "description":"a beautiful football for soccer players",
            "imageUrl":"assets/images/football.jpg",
            "rating":4.3,
        },
        {
            "id":3,
            "name":"Sports Shoes",
            "category":"Sports footwear",
            "price":2999,
            "description":"sports shoes with high comfort and fancy design",
            "imageUrl":"assets/images/shoes.jpg",
            "rating":3.8,
        },
        {
            "id":4,
            "name":"Table",
            "category":"Furniture",
            "price":4000,
            "description":"Beautiful wooden table for your living room",
            "imageUrl":"assets/images/table.jpg",
            "rating":4.3,
        },
        {
            "id":5,
            "name":"Books",
            "category":"Stationary",
            "price":399,
            "description":"Colorful notebooks for students",
            "imageUrl":"assets/images/book.jpg",
            "rating":3.5,
        },
            
        
        ];
        return {products};
    }
}