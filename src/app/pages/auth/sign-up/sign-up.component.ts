import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router'; // Importe RouterLink para o link de "Voltar" funcionar

@Component({
  selector: 'app-sign-up',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) {}

  dadosCadastro = {
    nome: '',
    email: '',
    senha: '',
    termos: false // Começa desmarcado
  }

  cadastrar() {
    // 1. Valida Nome
    if(this.dadosCadastro.nome.trim().length === 0){
        alert('Por favor, digite seu nome.');
        return;
    }
  
    // 2. Valida Email
    if(this.dadosCadastro.email.trim().length === 0 || !this.dadosCadastro.email.includes('@')){
        alert('Digite um email válido.');
        return;
    }

    // 3. Valida Senha
    if(this.dadosCadastro.senha.length < 6){
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    // 4. Valida Termos (Obrigatório jurídica e visualmente)
    if(this.dadosCadastro.termos === false){
        alert('Você precisa aceitar os termos de uso.');
        return;
    }

    // SUCESSO!
    console.log('Dados cadastrados:', this.dadosCadastro);
    alert('Conta criada com sucesso! Faça login.');
    
    // Manda o usuário para a tela de Login
    this.router.navigate(['/login']);
  }
}
