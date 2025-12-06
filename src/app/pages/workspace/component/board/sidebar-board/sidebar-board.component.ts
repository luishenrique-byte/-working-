import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProjectsCardComponent } from '../projects-card/projects-card.component';

@Component({
  selector: 'app-sidebar-board',
  imports: [CommonModule, ProjectsCardComponent],
  templateUrl: './sidebar-board.component.html',
  styleUrl: './sidebar-board.component.css'
})
export class SidebarBoardComponent {

  isClosed:boolean = false;

  toggleSidebar(){
    this.isClosed = !this.isClosed
  }

}
