import { Directive, Input } from "@angular/core";
import { FormControl, NG_VALIDATORS, Validator } from "@angular/forms";

@Directive({
    selector: '[customMin][ngModel]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: CustomMinDirectives,
        multi: true
    }]
})
export class CustomMinDirectives implements Validator{

    @Input() minimo!: number;

    constructor(){}

    validate( control: FormControl ){

        const inputValue = control.value;
        
        return ( inputValue < this.minimo ) 
                ? { 'CustomMin': true }  
                : null 
    }
}