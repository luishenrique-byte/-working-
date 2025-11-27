import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar-board',
  imports: [CommonModule],
  templateUrl: './sidebar-board.component.html',
  styleUrl: './sidebar-board.component.css'
})
export class SidebarBoardComponent {

  isClosed:boolean = false;

  toggleSidebar(){
    this.isClosed = !this.isClosed
  }

}
