import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header.component/header.component";
import { Footer } from "../../component/footer/footer";
import { AboutPageService } from '../../service/about-page-service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about-page',
  imports: [HeaderComponent, Footer, NgFor],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css'
})
export class AboutPage {

  constructor(public abs: AboutPageService) {}
}
