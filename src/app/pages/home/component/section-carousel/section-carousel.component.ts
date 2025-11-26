import { CommonModule } from '@angular/common';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-carousel',
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './section-carousel.component.html',
  styleUrl: './section-carousel.component.css'
})
export class SectionCarouselComponent {
  slides = [
    {
      image: 'assets/img/bgs/Mulher Olhando PC.jpg', // Caminho da sua imagem
      titulo: 'Seus Projetos, Um Só Lugar.',
      texto: 'Importe seus trabalhos do Workana, Fiverr e Upwork. Chega de pular de aba em aba.'
    },
    {
      image: 'assets/img/bgs/Pessoas Trabalhando no Escritorio.png', // Outra imagem
      titulo: 'Encontre Sua Equipe!',
      texto: 'Deixe o "vício de fazer tudo sozinho". Convide amigos ou publique seu projeto na plataforma.'
    },
    {
      image: 'assets/img/bgs/Quadro Kanban.png', // Mais uma
      titulo: 'Gerencie Sem Sair do Site.',
      texto: 'Use nosso Kanban integrado para organizar o fluxo de trabalho da sua nova equipe.'
    }
  ];
}
