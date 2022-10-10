import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from './../../model/credencias';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  creds: Credenciais   = {
      email: '',
      senha: ''
  }

  email = new FormControl(null, Validators.email)
  senha = new FormControl(null, Validators.minLength(8))
   
  constructor(private toast: ToastrService,
   // private service: AuthService
   ) {}

  ngOnInit(): void { }
 
  logar(){
    /* this.service.authenticate(this.creds).subscribe(responsta => {
      this.toast.info(resposta.headers.get('Authorization'))
    }) */
     this.toast.error("Usuário ou senha Inválidos", 'Login')
     this.creds.senha = '';
  }


  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid){
      return true
    }else {
      return false
    }
  }

}
