import { Component } from '@angular/core';
import { SidebarHomeComponent } from '../../UI/sidebar-home/sidebar-home.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [SidebarHomeComponent, RouterLink],
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
