import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Feedback } from '../../interfaces/feedback';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit, OnDestroy{
  feedbacks: Feedback[] = [
    {
      categoriaIcone: 'assets/img/icons/codes 1.png',
      categoriaNome: 'TI e Programação',
      comentario: 'Encontrei esta plataforma quando estava travado em um projeto. O conteúdo é o mais claro e atualizado que já vi na área. A didática é excelente e consegui aplicar o conhecimento no mesmo dia. Virou minha referência número um!',
      avatar: 'assets/img/profile/homem-retrato-rindo.jpg',
      nome: 'Pedro Miguel',
      data: '26 de Maio',
      rating: 4.5
    },
    {
      categoriaIcone: 'assets/img/icons/pallete.png', 
      categoriaNome: ' Desing & multimidia',
      comentario: 'Eu precisava de uma identidade visual completa e o processo de encontrar um designer aqui foi surpreendente. Em poucos dias, recebi propostas incríveis e escolhi um profissional super talentoso que superou minhas expectativas. Meu projeto decolou graças a esta plataforma!',
      avatar: 'assets/img/profile/jovem-mulher-feliz-na-camisola.jpg', 
      nome: 'Ana Júlia',
      data: '15 de Junho',
      rating: 5
    },
    {
      categoriaIcone: 'assets/img/icons/data.png',
      categoriaNome: 'Dados',
      comentario: 'Como minha empresa lida com um volume enorme de dados, precisei de um especialista para otimizar nossas análises. Encontrei um analista de dados com a expertise exata que buscava. A comunicação foi fluida, o trabalho entregue no prazo e o impacto nos nossos resultados foi imediato. Serviço impecável!',
      avatar: 'assets/img/profile/homem-de-tiro-medio-com-penteado-afro.jpg',
      nome: 'Carlos Silva',
      data: '02 de Julho',
      rating: 5
    }
  ];

  public currentIndex = 0;
  public isFading = false;
  
  // 3. Adicione uma variável para guardar o timer
  private slideInterval: any;

  // 4. Esta função é chamada QUANDO O COMPONENTE É CRIADO
  ngOnInit(): void {
    this.startAutoSlide();
  }

  // 5. Esta função é chamada QUANDO O COMPONENTE É DESTRUÍDO
  // (Previne que o timer continue rodando e cause vazamento de memória)
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // 6. Crie a função para INICIAR o slide automático
  public startAutoSlide(): void {
    // Limpa qualquer timer antigo para não duplicar
    this.stopAutoSlide(); 
    
    this.slideInterval = setInterval(() => {
      this.changeFeedback('next');
    }, 5000); // 5000ms = 5 segundos
  }

  // 7. Crie a função para PARAR o slide automático
  public stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  // ... (Sua função 'changeFeedback' continua igual) ...
  public changeFeedback(direction: 'next' | 'prev') {
    if (this.isFading) return;

    this.isFading = true;

    setTimeout(() => {
      if (direction === 'next') {
        this.currentIndex = (this.currentIndex + 1) % this.feedbacks.length;
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.feedbacks.length) % this.feedbacks.length;
      }
      this.isFading = false;
    }, 300);
  }

}
