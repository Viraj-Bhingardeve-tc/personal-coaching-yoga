import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header.component/header.component";
import { Footer } from "../../component/footer/footer";
import { HeroCtaSection } from "../../component/hero-cta-section/hero-cta-section";
import { PricingPageService } from '../../service/pricing-page-service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-pricing-page',
  imports: [HeaderComponent, Footer, HeroCtaSection, NgClass, NgFor],
  templateUrl: './pricing-page.html',
  styleUrl: './pricing-page.css'
})
export class PricingPage {

   constructor(public ps: PricingPageService) {}
}
