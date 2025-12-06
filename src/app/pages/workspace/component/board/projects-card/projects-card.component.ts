import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  imports: [CommonModule],
  templateUrl: './projects-card.component.html',
  styleUrl: './projects-card.component.css'
})
export class ProjectsCardComponent {
  
  projects =[
    {id:1, nome:'🚀 TaskBoard App'},
    {id:2, nome:'📢 Marketing 2024'},
    {id:3 , nome:'💰 Financeiro Pessoal'},
    {id:4 , nome:'🏠 Reforma da Casa'}
  ]
}
