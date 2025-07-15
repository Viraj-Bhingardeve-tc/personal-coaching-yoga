import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgClass, NgFor, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  logoUrl =
    'https://img.pikbest.com/png-images/20241110/yoga-logo-with-flowing-balanced-shapes_11076889.png!sw800';
  brandName = 'Jane Doe';
  brandLink = 'index.html';

navItems = [
  { label: 'Home', link: '/' },
  { label: 'Services', link: '/pages/service-page' },
  { label: 'Events', link: '/pages/event-page' },
  { label: 'Pricing', link: '/pages/pricing-page' },
  { label: 'Blogs', link: '/pages/blogs-page' },
  { label: 'About', link: '/pages/about-page' },
  { label: 'Contact', link: '/pages/contact-page' },
];

  toggleNavbar = false;

  toggleMenu() {
    this.toggleNavbar = !this.toggleNavbar;
  }
}
