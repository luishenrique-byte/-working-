import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explorar-projetos',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './explorar-projetos.component.html',
  styleUrl: './explorar-projetos.component.css'
})
export class ExplorarProjetosComponent {
  termoBusca: string = '';

  constructor(private router: Router) {}

  // 3. ATUALIZAR A FUNÇÃO
  solicitarEntrada(projeto: any) {
    // Navega para a rota passando o ID do projeto clicado
    this.router.navigate(['/detalhes-projeto', projeto.id]);
  }

  // Projetos da comunidade (Dados Fakes)
  projetosComunidade = [
    { 
      id: 1, 
      titulo: 'App de Adoção de Pets', 
      descricao: 'Estamos criando um Tinder para cachorros de rua encontrarem donos.',
      autor: 'Ana Julia',
      vagas: ['Dev Front-end', 'UI Designer'],
      tags: ['Social', 'App'],
      solicitado: false
    },
    { 
      id: 2, 
      titulo: 'Sistema Solar 3D', 
      descricao: 'Projeto educativo para ensinar astronomia nas escolas usando Three.js.',
      autor: 'Marcos Dev',
      vagas: ['Dev 3D', 'Professor'],
      tags: ['Educação', '3D'],
      solicitado: false
    },
    { 
      id: 3, 
      titulo: 'Marketplace de Orgânicos', 
      descricao: 'Conectando pequenos produtores rurais a restaurantes locais.',
      autor: 'Fazenda Tech',
      vagas: ['Marketing', 'Backend'],
      tags: ['Agro', 'Web'],
      solicitado: true // Esse já pedimos pra entrar
    },
    // 4. Sustentabilidade
    { 
      id: 4, 
      titulo: 'Horta Comunitária', 
      descricao: 'App para gerenciar escalas de rega e colheita na horta do bairro.',
      autor: 'Fernando Eco',
      vagas: ['Dev Mobile', 'QA'],
      tags: ['Agro', 'Verde'],
      solicitado: true // Exemplo de um que você já pediu
    },
    // 5. Open Source
    { 
      id: 5, 
      titulo: 'Aurora UI Kit', 
      descricao: 'Biblioteca de componentes acessíveis e bonitos para Angular.',
      autor: 'OpenDevs',
      vagas: ['Dev CSS', 'Acessibilidade'],
      tags: ['Open Source', 'Frontend'],
      solicitado: false
    },
    // 6. Finanças
    { 
      id: 6, 
      titulo: 'Finanças para Todos', 
      descricao: 'Blog e calculadoras para ensinar educação financeira básica.',
      autor: 'Beatriz Contas',
      vagas: ['Redator', 'Dev Fullstack'],
      tags: ['Finanças', 'Blog'],
      solicitado: false
    },
    // 7. IA / Tech
    { 
      id: 7, 
      titulo: 'Reciclagem com IA', 
      descricao: 'Use a câmera para identificar se a embalagem é reciclável.',
      autor: 'Tech Green',
      vagas: ['Cientista de Dados', 'Python'],
      tags: ['IA', 'Sustentabilidade'],
      solicitado: false
    },
    // 8. Música
    { 
      id: 8, 
      titulo: 'Banda de Garagem', 
      descricao: 'Plataforma para músicos independentes acharem lugares para tocar.',
      autor: 'Lucas Baterista',
      vagas: ['Marketing', 'Dev Backend'],
      tags: ['Música', 'Eventos'],
      solicitado: false
    },
    // 9. Saúde
    { 
      id: 9, 
      titulo: 'Mente Sã', 
      descricao: 'App de diário emocional e meditação guiada gratuito.',
      autor: 'Dra. Carla',
      vagas: ['Psicólogo', 'Dev React Native'],
      tags: ['Saúde', 'Wellness'],
      solicitado: false
    },
    // 10. E-commerce
    { 
      id: 10, 
      titulo: 'Brechó Hub', 
      descricao: 'Marketplace focado apenas em roupas vintage e upcycling.',
      autor: 'Retro Mode',
      vagas: ['Product Owner', 'Dev Web'],
      tags: ['Moda', 'E-commerce'],
      solicitado: false
    },
    // 11. Acessibilidade
    { 
      id: 11, 
      titulo: 'Voz Amiga', 
      descricao: 'Leitor de tela focado em sites de notícias brasileiros.',
      autor: 'Inclusive Tech',
      vagas: ['UX Researcher', 'Dev Rust'],
      tags: ['Acessibilidade', 'Tools'],
      solicitado: false
    },
    // 12. Esportes
    { 
      id: 12, 
      titulo: 'Várzea League', 
      descricao: 'Organize campeonatos de futebol de bairro, tabelas e artilharia.',
      autor: 'Gol de Placa',
      vagas: ['Dev Mobile', 'Admin'],
      tags: ['Esportes', 'Social'],
      solicitado: false
    },
    // 13. Literatura
    { 
      id: 13, 
      titulo: 'Clube do Livro Online', 
      descricao: 'Rede social para debater capítulos de livros semanalmente.',
      autor: 'Julia Leitora',
      vagas: ['Designer', 'Dev Frontend'],
      tags: ['Livros', 'Social'],
      solicitado: false
    },
    // 14. Hardware / IoT
    { 
      id: 14, 
      titulo: 'Casa Inteligente Livre', 
      descricao: 'Automação residencial usando Arduino e peças baratas.',
      autor: 'Maker Lab',
      vagas: ['Eng. Eletrônico', 'Dev C++'],
      tags: ['IoT', 'Hardware'],
      solicitado: false
    },
    // 15. Turismo
    { 
      id: 15, 
      titulo: 'Rotas Secretas', 
      descricao: 'Guia de viagem colaborativo com lugares que não estão no Google.',
      autor: 'Mochileiros',
      vagas: ['Fotógrafo', 'Dev Flutter'],
      tags: ['Viagem', 'Colaborativo'],
      solicitado: false
    },{ 
      id: 16, 
      titulo: 'App de Adoção de Pets', 
      descricao: 'Tinder para cachorros de rua encontrarem novos lares.',
      autor: 'Ana Julia',
      vagas: ['Dev Front-end', 'UI Designer'],
      tags: ['Social', 'Mobile'],
      solicitado: false
    },
    // 2. Educação
    { 
      id: 17, 
      titulo: 'Sistema Solar 3D', 
      descricao: 'Plataforma web interativa para ensinar astronomia em escolas.',
      autor: 'Marcos Dev',
      vagas: ['Dev Three.js', 'Professor'],
      tags: ['Educação', '3D'],
      solicitado: false
    },
    // 3. Game Dev
    { 
      id: 18, 
      titulo: 'Cyber Ronin RPG', 
      descricao: 'Um jogo indie 2D estilo pixel art sobre um samurai no futuro.',
      autor: 'Pixel Studio',
      vagas: ['Game Design', 'Pixel Artist'],
      tags: ['Games', 'Indie'],
      solicitado: false
    },
  ];

}
