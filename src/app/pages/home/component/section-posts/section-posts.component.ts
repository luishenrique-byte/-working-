import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../../interfaces/post';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-posts',
  imports: [CommonModule, RouterLink],
  templateUrl: './section-posts.component.html',
  styleUrl: './section-posts.component.css'
})
export class SectionPostsComponent implements OnInit, OnDestroy {

  posts: Post[] = [{
      titulo: 'Redesign de Identidade Visual para Startup de Café',
      data: '10/12/2025',
      preco: 1200,
      // Usando crases (backticks) para permitir quebra de linha real
      descricao: `Procuramos um Designer Gráfico criativo para reformular a marca da "Coffee & Code". O projeto inclui novo logo, paleta de cores e design de embalagens sustentáveis.

O estilo desejado é minimalista e moderno, fugindo do óbvio. É essencial ter experiência com branding para o setor alimentício e enviar portfólio com projetos similares.`,
      nome: 'Fernando Oliveira',
      cargo: 'Co-fundador',
      // Dica: Se tiver outras fotos, troque o caminho aqui. Mantive a original para não quebrar.
      avatar: 'assets/img/profile/9837.jpg', 
      pais: 'assets/img/icons/Icon Brasil.svg'
    },
    {
      titulo: 'Desenvolvimento de E-commerce Full Stack',
      data: '12/12/2025',
      preco: 4500,
      descricao: `Preciso de um desenvolvedor experiente para criar uma loja virtual do zero. O foco é performance, SEO e responsividade mobile.

Requisitos Técnicos:
- Front-end em Angular ou React;
- Back-end em Node.js;
- Integração com gateway de pagamento (Stripe/Mercado Pago).
O prazo estimado para o MVP é de 2 meses.`,
      nome: 'Roberto Santos',
      cargo: 'Gerente de Produto',
      avatar: 'assets/img/profile/homem-retrato-rindo.jpg',
      pais: 'assets/img/icons/Icon Brasil.svg'
    },
    {
      titulo: 'Edição de Vídeo para Canal de Viagens',
      data: '14/12/2025',
      preco: 350,
      descricao: `Busco editor de vídeo para vlog de viagens no YouTube. São 4 vídeos por mês, com duração média de 10 a 15 minutos cada.

Necessário saber fazer cortes dinâmicos, inserção de B-roll, trilha sonora e legendas animadas. O material bruto será enviado via Drive. Procuramos alguém para parceria de longo prazo.`,
      nome: 'Julia Mendes',
      cargo: 'Criadora de Conteúdo',
      avatar: 'assets/img/profile/jovem-mulher-feliz-na-camisola.jpg',
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
