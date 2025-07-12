import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header.component/header.component';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from '../../component/hero-section.component/hero-section.component';
import { CounterSection } from "../../component/counter-section/counter-section";
import { DownloadBrochure } from "../../component/download-brochure/download-brochure";
import { IntroductorySection } from "../../component/introductory-section/introductory-section";
import { ServicesSection } from "../../component/services-section/services-section";
import { OurClients } from "../../component/our-clients/our-clients";
import { Testimonials } from "../../component/testimonials/testimonials";
import { FollowUsSection } from "../../component/follow-us-section/follow-us-section";
import { AddressMappingSection } from "../../component/address-mapping-section/address-mapping-section";
import { Footer } from "../../component/footer/footer";

@Component({
  selector: 'app-home-page.component',
  standalone: true,
  imports: [CommonModule, HeaderComponent, HeroSectionComponent, CounterSection, DownloadBrochure, IntroductorySection, ServicesSection, OurClients, Testimonials, FollowUsSection, AddressMappingSection, Footer],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'], // ✅ fixed here
})
export class HomePageComponent {
}
