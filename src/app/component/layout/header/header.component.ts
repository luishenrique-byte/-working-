import { Component } from '@angular/core';
import { SidebarHomeComponent } from '../../UI/sidebar-home/sidebar-home.component';

@Component({
  selector: 'app-header',
  imports: [SidebarHomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isMenuOpen: Boolean = false;
  private timer: any;

  joinMouse():void{
    clearTimeout(this.timer);

    this.isMenuOpen =true;
  }

  exitMouse(): void{
    this.timer = setTimeout(() => {
      this.isMenuOpen=false;
    } , 500)
  }

}
