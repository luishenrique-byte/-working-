import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Coluna } from '../../../../../interfaces/board/coluna';
import { HeaderQuadroComponent } from "../header-quadro/header-quadro.component";
import { Tarefa } from '../../../../../interfaces/board/tarefa';

@Component({
  selector: 'app-quadro',
  imports: [CommonModule, HeaderQuadroComponent, FormsModule],
  templateUrl: './quadro.component.html',
  styleUrl: './quadro.component.css'
})
export class QuadroComponent {
  //==================================
  //LÓGICA ATRÁS DO SCROLL DAS COLUNAS
  //==================================
  
  isDown = false;       // O mouse está clicado? (A bandeira)
  startX = 0;           // Onde o mouse estava quando clicou?
  scrollLeft = 0;       // Onde a barra de rolagem estava quando clicou?

  // QUANDO CLICA (Segura o papel)
  iniciarArrasto(e: MouseEvent, slider: HTMLDivElement) {
    this.isDown = true;
    slider.classList.add('active'); // Opcional: para mudar estilo no CSS

    // Matemática: Posição do Mouse na página - Margem da div
    this.startX = e.pageX - slider.offsetLeft;

    // Guarda a posição atual do scroll
    this.scrollLeft = slider.scrollLeft;
  }

  // QUANDO SOLTA OU SAI DA TELA (Solta o papel)
  pararArrasto() {
    this.isDown = false;
    // slider.classList.remove('active');
  }

  // ENQUANTO MOVE O MOUSE (Arrasta o papel)
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


  //=============================
  //LÓGICA PARA CRIAR NOVA LISTA
  //=============================

  criandoLista: boolean = false;
  nomeNovaLista: string = '';

  @ViewChild('inputNovaLista') inputRef!: ElementRef;

  iniciarCriacao(){
    this.criandoLista = true;

    // 2. Espera um pouquinho (o tempo do Angular renderizar o HTML)
    setTimeout(() => {
      if (this.inputRef) {
        this.inputRef.nativeElement.focus(); // 3. Agora sim, dá o foco!
      }
    }, 1); // 0ms é suficiente, pois joga a ação para o final da fila de tarefas
  }

  cancelarCriacao(){
    this.criandoLista = false;
    this.nomeNovaLista ='';
  }


  addLista(){
   
    if(this.nomeNovaLista.trim().length==0){
      return
    }

    const novaColuna:Coluna = {
      id:Math.random(),
      nome: this.nomeNovaLista
    }

    this.Colunas.push(novaColuna);

    this.criandoLista = false
    this.nomeNovaLista = '';

  }

  //==============================
  //LÓGICA PARA REMOVER NOVA LISTA
  //==============================

  popUpAtivo:Boolean = false
  listaSelecionada: Coluna | null = null;
  idLista: number | null = null

  mostrarPOPUp(lista:Coluna){
    this.listaSelecionada = lista;
    this.popUpAtivo = true;
    this.idLista = lista.id
  }

  fecharPOPUp(){
    this.listaSelecionada = null;
    this.popUpAtivo = false;
    this.idLista = null;
  }

  removerLista(){

    if(this.listaSelecionada ==null){
      return
    }

    let posicaoLista:number = -1 ;
    this.Colunas.forEach((coluna,posicao) => {

      if(coluna.id == this.idLista){
        posicaoLista = posicao
      }
      
    });

    if(posicaoLista>=0){

      this.Colunas.splice(posicaoLista,1)

    }

    console.log(`Tarefa ${this.listaSelecionada} foi removida`)
    this.fecharPOPUp();
  }





  //==============================
  //LÓGICA PARA CRIAR NOVA TAREFA
  //==============================

  //==============================
  //LÓGICA PARA REMOVER NOVA TAREFA
  //==============================


  //=========================================
  //ARRAY QUE SIMULA BANCO DE DADOS DAS LISTAS
  //=========================================
  public Colunas: Coluna[] = [
    {
      id:1,
      nome: "A Fazer 📌",
      tarefas: [
        { id: 1, titulo: 'Criar banco de dados', descricao: 'Usar Firebase' },
        { id: 2, titulo: 'Pagar dominio' }
      ]
    },
    {
      id:2,
      nome: "Em progresso 🚧",
      tarefas: [
        { id: 3, titulo: 'Desenvolver página de pagamento', descricao: 'NÃO ESQUECER A CHAVE PIX' }
      ]
    }
    ,
    {
      id:3,
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install' }
      ]
    }
  ]
}
