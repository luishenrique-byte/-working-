import { Component } from '@angular/core';
import { SectionCarouselComponent } from "./component/section-carousel/section-carousel.component";
import { HeaderComponent } from "../../component/layout/header/header.component";
import { SectionAdvantagesComponent } from "./component/section-advantages/section-advantages.component";
import { FooterComponent } from "../../component/layout/footer/footer.component";
import { SectionPostsComponent } from "./component/section-posts/section-posts.component";
import { SectionCallToActionComponent } from "./component/section-call-to-action/section-call-to-action.component";
import { SectionIntegrationsComponent } from './component/section-integrations/section-integrations.component';

@Component({
  selector: 'app-home',
  imports: [SectionCarouselComponent, HeaderComponent, SectionAdvantagesComponent, FooterComponent, SectionPostsComponent, SectionCallToActionComponent, SectionIntegrationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
