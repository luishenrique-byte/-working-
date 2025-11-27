import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header-quadro',
  imports: [CommonModule, FormsModule],
  templateUrl: './header-quadro.component.html',
  styleUrl: './header-quadro.component.css'
})
export class HeaderQuadroComponent {
  
  titulo:string = 'Meu Quadro'

  editando:boolean = false

  editar(){
    this.editando = true
  }

  salvar(){
    this.editando = false
  }
}
