import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-projetos',
  imports: [CommonModule],
  templateUrl: './detalhes-projetos.component.html',
  styleUrl: './detalhes-projetos.component.css'
})
export class DetalhesProjetosComponent implements OnInit {
projeto: any = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // 1. Pega o ID que veio na URL (ex: 15)
    const idUrl = this.route.snapshot.paramMap.get('id');
    
    // 2. Busca na nossa lista falsa
    if(idUrl) {
      this.projeto = this.buscarProjetoNoBancoDeMentira(Number(idUrl));
    }
  }

  voltar() {
    this.router.navigate(['/explorar-projetos']); // Ajuste para a rota certa da sua página anterior
  }

  confirmarEntrada() {
    alert('Solicitação enviada com sucesso! O autor entrará em contato.');
    this.voltar();
  }

  // SIMULAÇÃO DE BANCO DE DADOS (Com os dados extras que você pediu)
  buscarProjetoNoBancoDeMentira(id: number) {
    // Aqui você pode copiar aquela lista gigante do explorar e adicionar os campos novos
    // Vou fazer um exemplo genérico que funciona pra qualquer ID para te poupar tempo:
    
    return {
      id: id,
      titulo: 'Nome do Projeto ' + id, // Só pra ilustrar
      descricao: 'Descrição detalhada do projeto que explica tudo sobre ele...',
      autor: 'Nome do Autor',
      avatar: 'A',
      
      // NOVOS CAMPOS QUE VOCÊ PEDIU:
      preco: 'R$ 1.500,00',
      objetivo: 'Criar uma solução escalável para o mercado de varejo.',
      ramo: 'Tecnologia / Varejo',
      dataCriacao: '10/12/2024',
      vagas: ['Dev Frontend', 'UX Designer']
    };
  }
}
