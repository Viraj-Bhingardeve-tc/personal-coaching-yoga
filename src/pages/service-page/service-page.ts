import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../component/header.component/header.component';
import { Footer } from '../../component/footer/footer';
import { PricingPage } from '../pricing-page/pricing-page';
import { PricingPageService } from '../../service/pricing-page-service';
import { HeroCtaSection } from '../../component/hero-cta-section/hero-cta-section';
import { ServicePageService } from '../../service/service-page-service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-service-page',
  standalone: true,
  imports: [HeaderComponent, Footer, HeroCtaSection,NgFor,NgClass],
  templateUrl: './service-page.html',
  styleUrl: './service-page.css',
})
export class ServicePage {
  constructor(public sps: ServicePageService) {}
}
