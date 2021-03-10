import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array( [
      ['Metal Gear', Validators.required],
      ['Deadpool'],
    ], Validators.required )
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  validator(campo:string){
    return this.miFormulario.controls[campo].invalid
           && this.miFormulario.controls[campo].touched
  }

  guardar(){

    if(this.miFormulario.invalid){
      return;
    }

    console.log(this.miFormulario.value);
    this.miFormulario.reset();
    
  }

  agregarFavorito(){

    if(this.nuevoFavorito.invalid){
      return;
    }

    // this.favoritosArr.push( new FormControl( this.nuevoFavorito.value, Validators.required ))
    this.favoritosArr.push( this.fb.control( this.nuevoFavorito.value, Validators.required ))
    
    this.nuevoFavorito.reset();
  }

  borrar(idx:number){

    this.favoritosArr.removeAt(idx);
  }

}
