import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Persona{
  nombre: string,
  favoritos: Fav[]
}

interface Fav {
  id: number;
  nombre: string
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm

  persona: Persona = {
    nombre: 'Isaac',
    favoritos: [
      {
      id: 1, nombre: 'Daniel'
      },
      {
        id: 2, nombre: 'De Jesus'
      },
  ]
  }

  nuevoJuego: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  valido(): boolean{
    return this.miFormulario?.controls.nombre?.invalid 
           && this.miFormulario?.controls.nombre?.touched
  }
  guardar(){
    console.log(this.miFormulario.controls?.nombre?.touched);
    
  }

  agregar(){

    let idx = this.persona.favoritos.length + 1;

    let agg: Fav = {
      id: idx,
      nombre: this.nuevoJuego
    }

    this.persona.favoritos.push({...agg});
    this.nuevoJuego = '';
  }

  eliminar(idx: number){

    this.persona.favoritos.splice(idx, 1);
    
  }

}
