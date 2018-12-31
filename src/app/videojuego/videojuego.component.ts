import {Component, OnInit, DoCheck, OnDestroy} from "@angular/core";
@Component({
  selector: 'videojuego',
  templateUrl: './videojuego.component.html'
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    ngOnDestroy(): void {
        //console.log("Ondestry executed");
    }
    ngDoCheck(): void {
        //console.log("Docheck ejection");
    }
    ngOnInit(): void {
        //console.log("Oninit ejecution");
    }
    public titulo:string;
    public listado:string;
    constructor(){
        this.titulo = "Componete de videojuegos";
        //console.log("secargo el componente videojuego");
    }

    cambiarTitulo(){
        this.titulo = "Nuevo titulo";
    }
}