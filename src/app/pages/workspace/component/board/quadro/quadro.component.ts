import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Coluna } from '../../../../../interfaces/board/coluna';
import { HeaderQuadroComponent } from "../header-quadro/header-quadro.component";

@Component({
  selector: 'app-quadro',
  imports: [CommonModule, HeaderQuadroComponent],
  templateUrl: './quadro.component.html',
  styleUrl: './quadro.component.css'
})
export class QuadroComponent {
  //==================================
  //LÓGICA ATRÁS DO SCROLL DAS COLUNAS
  //==================================
  // VARIÁVEIS DE CONTROLE
  isDown = false;       // O mouse está clicado? (A bandeira)
  startX = 0;           // Onde o mouse estava quando clicou?
  scrollLeft = 0;       // Onde a barra de rolagem estava quando clicou?

  // 1. QUANDO CLICA (Segura o papel)
  iniciarArrasto(e: MouseEvent, slider: HTMLDivElement) {
    this.isDown = true;
    slider.classList.add('active'); // Opcional: para mudar estilo no CSS

    // Matemática: Posição do Mouse na página - Margem da div
    this.startX = e.pageX - slider.offsetLeft;

    // Guarda a posição atual do scroll
    this.scrollLeft = slider.scrollLeft;
  }

  // 2. QUANDO SOLTA OU SAI DA TELA (Solta o papel)
  pararArrasto() {
    this.isDown = false;
    // slider.classList.remove('active');
  }

  // 3. ENQUANTO MOVE O MOUSE (Arrasta o papel)
  moverArrasto(e: MouseEvent, slider: HTMLDivElement) {
    // Se o mouse não estiver clicado, não faz nada
    if (!this.isDown) return;

    e.preventDefault(); // Evita selecionar texto sem querer

    // Onde o mouse está AGORA?
    const x = e.pageX - slider.offsetLeft;

    // Quanto o mouse andou? (Agora - Antes)
    const andou = (x - this.startX);

    // Move a barra de rolagem
    // Multipliquei por 2 para ficar mais rápido (velocidade)
    slider.scrollLeft = this.scrollLeft - andou;
  }

  public Colunas: Coluna[] = [
    {
      nome: "A Fazer 📌",
      tarefas: [
        { id: 1, titulo: 'Criar banco de dados', descricao: 'Usar Firebase' },
        { id: 2, titulo: 'Pagar dominio' }
      ]
    },
    {
      nome: "Em progresso 🚧",
      tarefas: [
        { id: 3, titulo: 'Desenvolver página de pagamento', descricao: 'NÃO ESQUECER A CHAVE PIX' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
    ,
    {
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
  ]
}
