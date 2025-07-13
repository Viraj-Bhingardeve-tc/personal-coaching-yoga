import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-cta-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-cta-section.html',
  styleUrl: './hero-cta-section.css',
})
export class HeroCtaSection {
  @Input() hero_section: any = {};
}
