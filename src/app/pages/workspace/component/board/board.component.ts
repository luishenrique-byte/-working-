import { Component } from '@angular/core';
import { SidebarBoardComponent } from "./sidebar-board/sidebar-board.component";
import { Coluna } from '../../../../interfaces/board/coluna';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  imports: [CommonModule,SidebarBoardComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
  public Colunas: Coluna[] = [
    {
      nome: "A Fazer 📌",
      tarefas: [
        {id:1, titulo: 'Criar banco de dados', descricao: 'Usar Firebase'},
        {id:2, titulo: 'Pagar dominio'}
      ]
    },
    {
      nome: "Em progresso 🚧",
      tarefas: [
        {id:3, titulo: 'Desenvolver página de pagamento', descricao:'NÃO ESQUECER A CHAVE PIX'}
      ]
    },
    {
      nome: "Concluído ✅",
      tarefas: [
        {id:4, titulo: 'Instalar angular', descricao:'comando para baixar dependencias: npm install'}
      ]
    }
  ]
}
