import { Component } from '@angular/core';
import { HeaderComponent } from '../../component/header.component/header.component';
import { HomePageService } from '../../service/home-page-service';
import { Footer } from "../../component/footer/footer";
import { NgFor } from '@angular/common';
import { IntroductorySection } from "../../component/introductory-section/introductory-section";
import { ServicesSection } from "../../component/services-section/services-section";
import { Testimonials } from "../../component/testimonials/testimonials";

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, Footer, NgFor, IntroductorySection, ServicesSection, Testimonials],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  constructor(public hs: HomePageService) {}

}
