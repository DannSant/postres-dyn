import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from '../../redux/auth/auth.service';
import { User } from 'src/app/redux/auth/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styles: []
})
export class SignupPageComponent implements OnInit {

  authForm:FormGroup;
  submited:boolean = false;
  passwordWrong:boolean = false;

  constructor(
    public authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'email': new FormControl('',[ Validators.required, Validators.email]),
      'phone': new FormControl('',[Validators.required, Validators.min(10)]),
      'password': new FormControl('', Validators.required),
      'password2': new FormControl('', Validators.required),
    });
  }

  register(){    
    this.submited=true;
    if(!this.authForm.valid){
      Swal.fire("Error","Faltan datos que ingresar","error")
    }
    if(this.authForm.value.password!=this.authForm.value.password2){
      this.passwordWrong=true;
      Swal.fire("Error","Las contraseñas no coinciden","error")
    }
    this.passwordWrong=false;

    let data = this.authForm.value;

    this.authService.registerUser(new User({     
      name: data.name,
      phone: data.phone,
      email: data.email,  
    }),data.password).then(resp=>{
      if(resp.status==200){
        Swal.fire("Exito",resp.msg,"success")
        this.router.navigate(['/products'])
      }else {
        Swal.fire("Error",resp.msg + " - " + resp.error,"error")
      }
    }).catch(e=>{
      Swal.fire("Error",e.msg + " - " + e.error,"error")
    })
  }

}

