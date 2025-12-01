import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-section-call-to-action',
  imports: [RouterLink],
  templateUrl: './section-call-to-action.component.html',
  styleUrl: './section-call-to-action.component.css'
})
export class SectionCallToActionComponent {
  
  @ViewChild('imagemAnimada') imagemRef!: ElementRef;

  ngAfterViewInit() {
    // 2. Criamos o observador (o vigia)
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        // Se a imagem apareceu na tela...
        if (entrada.isIntersecting) {

          // Adiciona a classe do CSS que faz ela descer e aparecer
          entrada.target.classList.add('aparecer');

          // E manda o vigia parar de olhar (assim ela não some mais)
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.3 }); // 0.3 significa: aciona quando 30% da imagem estiver visível

    // 3. Começa a vigiar a imagem
    if (this.imagemRef) {
      observador.observe(this.imagemRef.nativeElement);
    }
  }
}
