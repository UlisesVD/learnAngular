import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform{
    // dato | calcuadora: otroDato
    //param1              param2
    transform(value: any, value_two: any) {
        let operaciones = `
            suma: ${value+value_two} -
            resta: ${value-value_two} -
            multiplicacion:${value*value_two} -
            divicion:${value/value_two} -
        `
        return operaciones;
    }
    
}