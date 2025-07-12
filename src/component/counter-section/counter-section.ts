import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './counter-section.html',
  styleUrl: './counter-section.css',
})
export class CounterSection {
  counters = [
    {
      count: '180+',
      title: 'Lives Enriched',
      description:
        'Over 180 individuals have experienced greater flexibility, better sleep, and a more peaceful mind through our gentle yoga approach.',
    },
    {
      count: '300+',
      title: 'Sessions Designed with Care',
      description:
        'Each of our 300+ sessions is tailored to support your body’s unique needs—encouraging mindful movement and lasting wellness.',
    },
    {
      count: '95%',
      title: 'Positive Progress Reported',
      description:
        '95% of our participants report feeling more balanced, relaxed, and energized—both physically and emotionally—within just a few weeks.',
    },
  ];
}
