import { Component } from '@angular/core';
import { SidebarBoardComponent } from "./sidebar-board/sidebar-board.component";
import { QuadroComponent } from "./quadro/quadro.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";


@Component({
  selector: 'app-board',
  imports: [SidebarBoardComponent, QuadroComponent, TaskDetailsComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {


}
