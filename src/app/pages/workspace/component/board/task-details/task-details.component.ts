import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-task-details',
  imports: [],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {
  // 1. Cria o evento para o Pai ouvir
  @Output() clickOutside = new EventEmitter<void>();

  // 2. NOVO: O evento de excluir
  // Isso cria um "canal" para avisar o pai
  @Output() aoExcluir = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) { }

  // 2. Escuta TODOS os cliques da página
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {

    const target = event.target as HTMLElement;

    // 3. Verifica: "O clique foi dentro de mim?"
    const clicouDentro = this.elementRef.nativeElement.contains(target);

    // 4. Se NÃO foi dentro, avisa o pai para fechar
    if (!clicouDentro) {
      this.clickOutside.emit();
    }
  }


  solicitarExclusao() {
    this.aoExcluir.emit(); // emite que vai excluir a tarefa
  }

}
