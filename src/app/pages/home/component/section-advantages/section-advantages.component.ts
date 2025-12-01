import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-advantages',
  imports: [CommonModule, RouterLink],
  templateUrl: './section-advantages.component.html',
  styleUrl: './section-advantages.component.css'
})
export class SectionAdvantagesComponent {

  public advantages = [
    {
      icon: 'assets/img/icons/Clock.svg',
      title: 'Gestão de Tempo',
      text1: 'Pare de perder tempo pulando entre Workana, Fiverr e Upwork. Nosso dashboard centraliza todos os seus projetos, prazos e comunicações em um único lugar.',
      text2: 'Recupere o controle do seu dia.'
    },
    {
      icon: 'assets/img/icons/Icon group.png',
      title: 'Formação de Equipes',
      text1: 'O "vício de fazer tudo sozinho" limita seu crescimento. Convide seus parceiros de confiança ou publique seu projeto em nossa comunidade para encontrar novos talentos.',
      text2: 'Escalar nunca foi tão fácil.'
    },
    {
      icon: 'assets/img/icons/Icon Kanban.svg',
      title: 'Metodologia Ágil',
      text1: 'Uma equipe precisa de organização. Use nosso quadro Kanban integrado para visualizar tarefas, definir prazos e acompanhar o progresso do projeto em tempo real.',
      text2: 'Gestão de verdade, sem sair do site.'
    }
  ]

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
