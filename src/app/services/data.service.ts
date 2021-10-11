import { Injectable } from "@angular/core";

@Injectable()
export class DataService{
    private message:string="from data service";
    changeMessage(newMessage:string){
        this.message=newMessage;
    }
    getMessage():string{
        return this.message;
    }
}