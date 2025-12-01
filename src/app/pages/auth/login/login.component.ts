import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router){}

  dadosLogin = {
    email:'',
    senha:''
  }

  entrar(){

    const possueArroba = this.dadosLogin.email.includes('@')


    if(!possueArroba){alert('precisa de @'); return
    }else if(this.dadosLogin.email.length == 0){alert('email é obrigatório');return}
    else if(this.dadosLogin.senha.length == 0){alert('senha é obrigatório'); return}

    if(this.dadosLogin.email==='admin@admin' && this.dadosLogin.senha==='123456'){

      console.log('Login efetuado com sucesso!')

      this.router.navigate(['/workspace']);

    } else {
      alert("usuario e/ou senha incorreto")
    }
  }
}
