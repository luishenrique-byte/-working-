import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../../interfaces/post';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-posts',
  imports: [CommonModule],
  templateUrl: './section-posts.component.html',
  styleUrl: './section-posts.component.css'
})
export class SectionPostsComponent implements OnInit, OnDestroy {

  posts: Post[] = [{
    titulo: 'Criação e Implementação de Pontos de Troca Comunitários Solidários.',
    data: '02/09/2025',
    preco: 250,
    descricao: 'Estamos em busca de um profissional altamente qualificado e experiente em edição de fotos para um projeto pontual. Precisamos editar 10 fotos, garantindo que todas elas sigam o mesmo tom e estilo visual das imagens que já possuímos. A padronização do tom é crucial para manter a coerência da nossa marca. <br> É Fundamental que o profissional demonstre expertise e um portfólio sólido na área. Tivemos uma experiência anterior insatisfatória, onde o trabalho não atendeu às expectativas, resultando em tempo e recursos perdidos. Por isso, a capacidade de entregar um trabalho de alta qualidade e com profissionalismo é nossa prioridade máxima...',
    nome: 'Pedro Miguel',
    cargo: 'Analista de dados',
    avatar: 'assets/img/profile/homem-retrato-rindo.jpg',
    pais: 'assets/img/icons/Icon Brasil.svg'
  },
  {
    titulo: 'Criação e Implementação de Pontos de Troca Comunitários Solidários.',
    data: '02/09/2025',
    preco: 750,
    descricao: 'Estamos em busca de um profissional altamente qualificado e experiente em edição de fotos para um projeto pontual. Precisamos editar 10 fotos, garantindo que todas elas sigam o mesmo tom e estilo visual das imagens que já possuímos. A padronização do tom é crucial para manter a coerência da nossa marca. <br> É Fundamental que o profissional demonstre expertise e um portfólio sólido na área. Tivemos uma experiência anterior insatisfatória, onde o trabalho não atendeu às expectativas, resultando em tempo e recursos perdidos. Por isso, a capacidade de entregar um trabalho de alta qualidade e com profissionalismo é nossa prioridade máxima...',
    nome: 'Pedro Miguel',
    cargo: 'Desenvolvedor Front-end',
    avatar: 'assets/img/profile/homem-retrato-rindo.jpg',
    pais: 'assets/img/icons/Icon Brasil.svg'
  },
  {
    titulo: 'Criação e Implementação de Pontos de Troca Comunitários Solidários.',
    data: '02/09/2025',
    preco: 500,
    descricao: 'Estamos em busca de um profissional altamente qualificado e experiente em edição de fotos para um projeto pontual. Precisamos editar 10 fotos, garantindo que todas elas sigam o mesmo tom e estilo visual das imagens que já possuímos. A padronização do tom é crucial para manter a coerência da nossa marca. <br> É Fundamental que o profissional demonstre expertise e um portfólio sólido na área. Tivemos uma experiência anterior insatisfatória, onde o trabalho não atendeu às expectativas, resultando em tempo e recursos perdidos. Por isso, a capacidade de entregar um trabalho de alta qualidade e com profissionalismo é nossa prioridade máxima',
    nome: 'Pedro Miguel',
    cargo: 'Desgniner',
    avatar: 'assets/img/profile/homem-retrato-rindo.jpg',
    pais: 'assets/img/icons/Icon Brasil.svg'
  }
  ];


  //FUNCIONAMENTO DO CARROSEL



  public currentIndex = 0;
  public isFading = false;
  
  // Adicione uma variável para guardar o timer
  private slideInterval: any;

  // Esta função é chamada QUANDO O COMPONENTE É CRIADO
  ngOnInit(): void {
    this.startAutoSlide();
  }

  // Esta função é chamada QUANDO O COMPONENTE É DESTRUÍDO
  // (Previne que o timer continue rodando e cause vazamento de memória)
  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  // função para INICIAR o slide automático
  public startAutoSlide(): void {
    // Limpa qualquer timer antigo para não duplicar
    this.stopAutoSlide(); 
    
    this.slideInterval = setInterval(() => {
      this.changePost('next');
    }, 3000); 
  }

  // 7. Crie a função para PARAR o slide automático
  public stopAutoSlide(): void {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  
  public changePost(direction: 'next' | 'prev') {
    if (this.isFading) return;

    this.isFading = true;

    setTimeout(() => {
      if (direction === 'next') {
        this.currentIndex = (this.currentIndex + 1) % this.posts.length;
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.posts.length) % this.posts.length;
      }
      this.isFading = false;
    }, 300);
  }



  //OBSERVADOR PARA ANIMAÇÕES
  @ViewChild('sectionRef') sectionRef!: ElementRef;

  ngAfterViewInit() {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          
          // Adiciona a classe .aparecer NA SECTION INTEIRA
          entrada.target.classList.add('aparecer');

          // Opcional: Se quiser animar os cards também, pode buscar eles aqui
          // e adicionar a classe neles, mas as barras já vão funcionar.
          
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.3 }); // Dispara quando 30% da section amarela aparecer

    if (this.sectionRef) {
      observador.observe(this.sectionRef.nativeElement);
    }
  }
}
