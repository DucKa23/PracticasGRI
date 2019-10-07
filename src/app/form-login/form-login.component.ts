import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  loginForm: FormGroup;

  constructor() {
    console.log("creación formulario")
    //instancia del formulario
    this.loginForm = this.createFormGroup();
  }

  ngOnInit() { }

  //limpiar formulario
  onResetForm() {
    this.loginForm.reset();
  }


  // Datos del formulario
  onSaveForm() {
    console.log('Datos del formulario', this.loginForm.value);
    if(this.loginForm.valid){
      //conexión base de datos para comprobar si existe usuario
      //*************** */

      //limpiamos formulario
      this.onResetForm();
      console.log('valid')
    }
    //si no es valido
    else{
      console.log('not valid')

    }


  }
}