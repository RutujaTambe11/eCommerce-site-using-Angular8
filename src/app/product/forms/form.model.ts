import { FormControl, FormGroup, Validators } from "@angular/forms";

export class ProductReactiveFormComponent extends FormControl{
    label:string;
    modelProperty:string;

    constructor(label:string, property:string, value:any, validator:any){
        super(value,validator);
        this.label=label;
        this.modelProperty=property;


    }
    getValidationMessages(){
        
        let messages:string[]=[];
        if(this.errors)
        {
            for(let errorName in this.errors)
            {
                switch(errorName)
                {
                    case "required": 
                        messages.push(`you must enter a ${this.label}}`);
                        break;
                    case "minlength":
                        messages.push(`A ${this.label} should have atleast ${this.errors['minlength'].requiredLength} characters`);
                        break;
                    
                    case "limit":
                        messages.push(` cannot be more than ${this.label} , ${this.errors['limit'].limit}`)

                    case "pattern":
                        messages.push(`a ${this.label} contains illegal characters`);
                        break;
                }
            }
        }
        return messages;

    }

}
export class ProductFormComponent extends FormGroup{
    constructor(){
        super({
        name:new ProductReactiveFormComponent("Name","name","",Validators.required),
        category:new ProductReactiveFormComponent("Category","category","",Validators.compose([
            Validators.required,
            Validators.pattern("^[A_Za-z]+$"),
            Validators.minLength(8)
        ])),
        price:new ProductReactiveFormComponent("price","price","",
        Validators.compose([
            Validators.required,
            Validators.pattern("^[0-9\.]+$"),
            Validators.Limit(6000)
        ]))
    });
}


get productControls():ProductReactiveFormComponent[]{
    return Object.keys(this.controls).map(k=> this.controls[k] as ProductReactiveFormComponent)
}
getFormValidationMessages(name:string): string[]
{
    return(this.controls[name] as ProductReactiveFormComponent).getValidationMessages();
}

getFormValidationSummary():string[]{
    let messages:string[] = [];
    Object.values(this.controls).forEach(c =>
        messages.push(... (c as ProductReactiveFormComponent).getValidationMessages()));
        return messages;
}

}