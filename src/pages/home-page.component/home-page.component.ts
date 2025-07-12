import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header.component/header.component';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../component/hero-section.component/hero-section.component';
import { routes } from '../../app/app.routes';
import { RouterLink, RouterModule } from '@angular/router';
import { CounterSection } from "../../component/counter-section/counter-section";
import { DownloadBrochure } from "../../component/download-brochure/download-brochure";
import { IntroductorySection } from "../../component/introductory-section/introductory-section";

@Component({
  selector: 'app-home-page.component',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroSectionComponent, CounterSection, DownloadBrochure, IntroductorySection],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'], // ✅ fixed here
})
export class HomePageComponent {
}
