import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Integrations {
  name:string;
  title:string;
  description: string;
  color: string;
  corClara: boolean; //atributo para ferificar se a cor é clara ou escuro
  logo: string;
}

@Component({
  selector: 'app-section-integrations',
  imports: [CommonModule],
  templateUrl: './section-integrations.component.html',
  styleUrl: './section-integrations.component.css'
})
export class SectionIntegrationsComponent {

  marcas: Integrations[] = [
    {
      name: 'Upwork',
      title: 'Acesso Rápido',
      description:'Faça login e acesse seus projetos globais com um clique.',
      color:'#141414',
      corClara: false,
      logo:'assets/img/logos/Upwork_logo_white.svg'
    },
    {
      name: 'Workana',
      title: 'Histórico Latam',
      description:'Valide sua experiência com projetos realizados na América Latina.',
      color:'#FFFFFF',
      corClara: true,
      logo:'assets/img/logos/negative-logo_workana 1.svg'
    },
    {
      name: 'Fiverr',
      title: 'Gestão de Pedidos',
      description:'Atalho direto para seu painel de vendas e mensagens.',
      color:'#013912',
      corClara: false,
      logo:'assets/img/logos/Fiverr_Logo_all_White.svg'
    },
    {
      name: '99frelas',
      color: '#29b2fe', // Azul Freelancer
      logo: 'assets/img/logos/99Frellas_logo_white.svg',
      title: 'Comece Aqui',
      corClara: false, // é claro, mas planejo usar um fonte branca
      description: 'A ferramenta mais amigável para conquistar seus primeiros projetos no Brasil.'
    }
  ]
}
