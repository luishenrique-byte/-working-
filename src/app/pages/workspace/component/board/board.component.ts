import { Component } from '@angular/core';
import { SidebarBoardComponent } from "./sidebar-board/sidebar-board.component";
import { QuadroComponent } from "./quadro/quadro.component";


@Component({
  selector: 'app-board',
  imports: [SidebarBoardComponent, QuadroComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {


}
