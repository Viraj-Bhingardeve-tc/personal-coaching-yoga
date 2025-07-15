import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgClass,NgFor],
  templateUrl: './footer.html',
})
export class Footer {
copyright = '© Copyright 2025. Abhay Valsangkar - All Rights Reserved';

  companyLinks = ['Home', 'Services', 'Event', 'Pricing', 'Blog'];

  services1 = [
    'Personalized Yoga',
    'Group Wellness Classes',
    'Chair-Based Yoga',
    'Mindfulness & Relaxation',
  ];

  services2 = [
    'Weekly Progress Tracking',
    'Nutrition & Lifestyle Tips',
    'Special Workshops',
    'At-Home Yoga Guidance',
  ];

  aboutLinks = ['Home', 'Services', 'Event', 'Pricing', 'Pricing'];

  socialLinks = [
    { icon: 'socicon-facebook', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-twitter', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-instagram', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-logmein', link: 'https://tc-personal-coaching-2.web.app/' },
  ];
}
