import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  DragDropModule,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Coluna } from '../../../../../interfaces/board/coluna';
import { HeaderQuadroComponent } from "../header-quadro/header-quadro.component";
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Tarefa } from '../../../../../interfaces/board/tarefa';

@Component({
  selector: 'app-quadro',
  imports: [CommonModule, HeaderQuadroComponent, TaskDetailsComponent, FormsModule, DragDropModule],
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

  @ViewChild('inputNovaLista') inputRefLista!: ElementRef;

  iniciarCriacaoLista() {
    this.criandoLista = true;

    // 2. Espera um pouquinho (o tempo do Angular renderizar o HTML)
    setTimeout(() => {
      if (this.inputRefLista) {
        this.inputRefLista.nativeElement.focus(); // 3. Agora sim, dá o foco!
      }
    }, 1); // 0ms é suficiente, pois joga a ação para o final da fila de tarefas
  }

  cancelarCriacaoLista() {
    this.criandoLista = false;
    this.nomeNovaLista = '';
  }


  addLista() {

    if (this.nomeNovaLista.trim().length == 0) {
      return
    }

    const novaColuna: Coluna = {
      id: Math.random(),
      nome: this.nomeNovaLista,
      tarefas: []
    }

    this.Colunas.push(novaColuna);

    this.criandoLista = false
    this.nomeNovaLista = '';

  }

  //=========================
  //LÓGICA PARA REMOVER LISTA
  //=========================

  popUpAtivo: Boolean = false
  listaSelecionada: Coluna | null = null;
  idLista: number | null = null

  mostrarPOPUp(lista: Coluna) {
    this.listaSelecionada = lista;
    this.popUpAtivo = true;
    this.idLista = lista.id
  }

  fecharPOPUp() {
    this.listaSelecionada = null;
    this.popUpAtivo = false;
    this.idLista = null;
  }

  removerLista() {

    if (this.listaSelecionada == null) {
      return
    }

    let posicaoLista: number = -1;
    this.Colunas.forEach((coluna, posicao) => {

      if (coluna.id == this.idLista) {
        posicaoLista = posicao
      }

    });

    if (posicaoLista >= 0) {

      this.Colunas.splice(posicaoLista, 1)

    }

    console.log(`Tarefa ${this.listaSelecionada} foi removida`)
    this.fecharPOPUp();
  }


  //==============================
  //LÓGICA PARA CRIAR NOVA TAREFA
  //==============================
  // Em vez de true/false, guardamos o ID da coluna que está aberta. 
  // 0 significa "nenhuma aberta".
  colunaIdCriandoTarefa: number = 0;
  nomeNovaTarefa: string = '';

  @ViewChild('inputNovaTarefa') inputRefTarefa!: ElementRef;

  iniciarCriacaoTarefa(colunaId: number) {
    this.colunaIdCriandoTarefa = colunaId; // Só abre nessa colun

    // 2. Espera um pouquinho (o tempo do Angular renderizar o HTML)
    setTimeout(() => {
      if (this.inputRefTarefa) {
        this.inputRefTarefa.nativeElement.focus(); // 3. Agora sim, dá o foco!
      }
    }, 1); // 0ms é suficiente, pois joga a ação para o final da fila de tarefas
  }

  cancelarCriacaoTarefa() {
    this.colunaIdCriandoTarefa = 0; //fecha tudo
    this.nomeNovaTarefa = '';
  }


  addTarefa(coluna: Coluna) {

    if (this.nomeNovaTarefa.trim().length == 0) {
      return;
    }

    const novaTarefa: Tarefa = {
      id: Math.random(),
      titulo: this.nomeNovaTarefa,
      concluida: false
    }

    coluna.tarefas.push(novaTarefa);


    this.nomeNovaTarefa = '';

    //Se quiser fechar depois de adicionar, descomente as linhas abaixo:
    // this.colunaIdCriandoTarefa = 0;
    // this.cancelarCriacaoTarefa();
  }

  //==============================
  //LÓGICA PARA REMOVER TAREFA
  //==============================
  tarefaMenuAbertoId: number | null = null; // ID da tarefa aberta (ou null)

  deletarTarefa(){

    
    this.Colunas.forEach(coluna => {
      
      const idTarefa = coluna.tarefas.findIndex( t=> t.id=== this.tarefaMenuAbertoId); //findIndex já função pronta q returna o index
      
      if(idTarefa>-1){
        
        coluna.tarefas.splice(idTarefa, 1)
        
      }
    });
    
    this.fecharMenuDetalhes();
    console.log('aaaaaaaa');

  }


  
  //======================================
  //LÓGICA PARA MENU FLUTUANTE DAS TAREFAS
  //======================================
  
  menuTop: number = 0; // para guardar a posição vertical.
  menuLeft: number = 0; // para guardar a posição horizontal.
  
  abrirMenuDetalhes(event: MouseEvent, tarefa: Tarefa) {
    event.stopPropagation(); // Impede cliques indesejados
    
    // 1. Se clicou no mesmo botão, fecha o menu (Toggle)
    if (this.tarefaMenuAbertoId === tarefa.id) {
      this.fecharMenuDetalhes();
      return;
    }
    
    // 2. Define qual tarefa está aberta
    this.tarefaMenuAbertoId = tarefa.id;
    
    // 3. A MATEMÁTICA DO POSICIONAMENTO 📐
    // Pega o elemento do botão clicado
    const botao = event.currentTarget as HTMLElement;
    const rect = botao.getBoundingClientRect();
    
    // CALCULE AQUI ONDE VOCÊ QUER O MENU (Sua "Área Vermelha")
    
    // TOP: Logo abaixo do botão (+ um espacinho de 5px)
    this.menuTop = rect.bottom - 40;
    
    // LEFT: Alinhado à direita do botão? Ou à esquerda?
    // Exemplo: Alinhado com o lado esquerdo do botão, mas puxando um pouco pra esquerda pra caber
    // Ajuste esse "- 150" dependendo da largura do seu menu
    this.menuLeft = rect.left + 25;
  }
  
  fecharMenuDetalhes() {
    this.tarefaMenuAbertoId = null;
  }
  
  
  //===========================
  //LÓGICA PARA RISCAR A TAREFA
  //===========================
  riscarTarefa(tarefa: Tarefa) {

    tarefa.concluida = !tarefa.concluida

  }
  
  //==============================
  //LÓGICA PARA MOVER AS TAREFA
  //==============================

  // Função que roda quando você solta o card
  drop(event: CdkDragDrop<Tarefa[]>) {
    console.log('Soltei!', event);
    // CENÁRIO 1: O container de onde saiu é o mesmo onde soltou?
    // (Ou seja: Estou arrastando na mesma coluna?)
    if (event.previousContainer === event.container) {

      // Apenas troca a posição no array (Ex: da posição 0 para a 2)
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

    } else {

      // CENÁRIO 2: Mudou de coluna!
      // (Ex: Saiu de "A Fazer" e foi para "Concluído")
      transferArrayItem(
        event.previousContainer.data, // Array antigo
        event.container.data,         // Novo Array
        event.previousIndex,          // Posição antiga
        event.currentIndex            // Nova posição
      );
    }
  }

  //=========================================
  //ARRAY QUE SIMULA BANCO DE DADOS DAS LISTAS
  //=========================================
  public Colunas: Coluna[] = [
    {
      id: 1,
      nome: "A Fazer 📌",
      tarefas: [
        { id: 1, titulo: 'Criar banco de dados', descricao: 'Usar Firebase', concluida: false },
        { id: 2, titulo: 'Pagar dominio', concluida: false }
      ]
    },
    {
      id: 2,
      nome: "Em progresso 🚧",
      tarefas: [
        { id: 3, titulo: 'Desenvolver página de pagamento', descricao: 'NÃO ESQUECER A CHAVE PIX', concluida: false }
      ]
    }
    ,
    {
      id: 3,
      nome: "Concluído ✅",
      tarefas: [
        { id: 4, titulo: 'Instalar angular', descricao: 'comando para baixar dependencias: npm install', concluida: false }
      ]
    }
  ]
}