import { Component } from '@angular/core';
import { SectionCarouselComponent } from "./section-carousel/section-carousel.component";
import { HeaderComponent } from "../../component/layout/header/header.component";
import { SectionAdvantagesComponent } from "./section-advantages/section-advantages.component";
import { FooterComponent } from "../../component/layout/footer/footer.component";
import { SectionPostsComponent } from "./section-posts/section-posts.component";
import { SectionCallToActionComponent } from "./section-call-to-action/section-call-to-action.component";
import { SectionIntegrationsComponent } from './section-integrations/section-integrations.component';

@Component({
  selector: 'app-home',
  imports: [SectionCarouselComponent, HeaderComponent, SectionAdvantagesComponent, FooterComponent, SectionPostsComponent, SectionCallToActionComponent, SectionIntegrationsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
