import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  image =
    'https://www.thriveusahomecare.com/wp-content/uploads/2024/02/senior-yoga.jpg';
  title = 'Experience the Power of Gentle Yoga for Mind and Body.';
  description = `Join a welcoming space where yoga is tailored to support joint mobility,
    improve balance, and bring peace of mind. Guided by experienced instructors, 
    each session helps you feel energized, relaxed, and connected at your own pace.`;
  buttonText = 'Begin Your Wellness Journey Today';
  buttonLink = 'https://tc-personal-coaching-2.web.app';

  constructor() {}
}
