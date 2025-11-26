import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from "./component/board/board.component";

@Component({
  selector: 'app-workspace',
  imports: [CommonModule, BoardComponent],
  templateUrl: './workspace.component.html',
  styleUrl: './workspace.component.css'
})
export class WorkspaceComponent {

  
}
