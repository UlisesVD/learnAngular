import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
            new Zapatilla("Reboot classic", 130, "Reboot", "Blanco", true),
            new Zapatilla("Reboot modern", 100, "Reboot", "Blanco", true),
            new Zapatilla("Reboot future", 70, "Reboot", "Negro", false)
        ];
    }
    getTexto(){
        return "Hola mundo desde un servicio";
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}