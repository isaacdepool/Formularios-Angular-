import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ValidatorsService } from '../../services/validators.service';
import { EmailValidatorsService } from '../../../shared/validators/email-validators.service';

@Component({
  selector: 'app-resgistro',
  templateUrl: './resgistro.component.html',
  styles: [
  ]
})
export class ResgistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [ Validators.required, Validators.pattern( this.valitarosSvc.nombreApellidoPattern ) ] ],
    email: ['', [ Validators.required, Validators.pattern( this.valitarosSvc.emailPattern ) ], [this.emailvalidator] ],
    username: ['', [ Validators.required, this.valitarosSvc.errUsuername ], [] ],
    password: ['', [ Validators.required, Validators.minLength(6) ]  ],
    password2: ['', [ Validators.required ]  ],
  }, {
    validators: [ this.valitarosSvc.camposIguales('password','password2') ]
  });

  constructor( private fb: FormBuilder,
               private valitarosSvc: ValidatorsService,
               private emailvalidator: EmailValidatorsService) { }

  ngOnInit(): void {
    
    this.miFormulario.reset({
      nombre: 'Isaac Depool',
      email:  'danixd941@gmail.com',
      username: 'isaacdepool'
    })
  }

  campoNovalido( campo: string){
    return this.miFormulario.get(campo)?.invalid
           && this.miFormulario.get(campo)?.touched
  }

  submitForm(){
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
    
  }

}
