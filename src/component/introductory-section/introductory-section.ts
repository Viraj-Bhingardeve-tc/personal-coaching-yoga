import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-introductory-section',
  standalone:true,
  imports: [NgIf,NgFor, NgClass],
  templateUrl: './introductory-section.html',
  styleUrl: './introductory-section.css',
})
export class IntroductorySection {
  
  Title = 'Where Focus Meets Transformation';
  details = [
    {
      title: 'Mindset',
      description: `<strong><em>Unlock inner calm and resilience.</em></strong><br>Develop mental clarity, focus, and emotional balance to approach each day with confidence and peace.`,
      active: true,
    },
    {
      title: 'Strategy',
      description: `<strong><em>Create your personalized wellness plan.</em></strong><br>Design gentle yoga routines and mindfulness practices tailored to your body’s needs and lifestyle goals.`,
      active: false,
    },
    {
      title: 'Execution',
      description: `<strong><em>Turn plans into daily habits.</em></strong><br>Stay motivated with guided sessions, community support, and mindful tracking of your progress.`,
      active: false,
    },
    {
      title: 'Growth',
      description: `<strong><em>Experience holistic improvement.</em></strong><br>Measure physical flexibility, mental relaxation, and overall well-being, adjusting practices to deepen your journey.`,
      active: false,
    },
  ];

  setActive(index: number): void {
    this.details.forEach((item, i) => (item.active = i === index));
  }
}
