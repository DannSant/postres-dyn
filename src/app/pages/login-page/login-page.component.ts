import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../redux/auth/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent implements OnInit {
  authForm:FormGroup;
  submited:boolean = false;
  constructor(
    public authService:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authForm = new FormGroup({
      'email': new FormControl('',Validators.required),
      'password': new FormControl('',Validators.required)
    });
  }

  async login(){
    this.submited=true;
    if(!this.authForm.valid){
      Swal.fire("Error","Faltan datos que ingresar","error")
    }
    let data = this.authForm.value;
    let resp = await this.authService.login(data.email,data.password);
    if(resp.status==200){
      //console.log(resp.msg);
      Swal.fire("Bienvenido","Bienvenido de nuevo!","success")
      this.router.navigate(['/products'])
    }else {
      console.log(resp);
      Swal.fire("Error","Datos invalidos","error")
    }
  }

}
