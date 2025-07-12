import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  imports: [NgFor],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.css',
})
export class Testimonials {
  title = 'Testimonials';
  details = [
    {
      description: `“Yoga sessions have brought calm and balance to my daily life. I feel stronger and more flexible every day.”`,
      name: 'Anita',
      img: 'https://images.unsplash.com/photo-1658686314526-b5f006c6c43a?w=600&auto=format&fit=crop&q=60',
    },
    {
      description: `“The personalized guidance helped me practice safely at home. My energy and mood have improved so much!”`,
      name: 'Ramesh',
      img: 'https://images.unsplash.com/photo-1520799139422-a4a178de50ae?w=600&auto=format&fit=crop&q=60',
    },
    {
      description: `“Joining the classes connected me with a wonderful community. I look forward to every session and feel truly supported!”`,
      name: 'Sunita',
      img: 'https://images.unsplash.com/photo-1715443972912-cc425dbcf73e?w=600&auto=format&fit=crop&q=60',
    },
    {
      description: `“The supportive environment keeps me consistent and stronger every day.”`,
      name: 'Suresh',
      img: 'https://images.unsplash.com/photo-1555888997-03e986fc157b?w=600&auto=format&fit=crop&q=60',
    },
    {
      description: `“The gentle exercises are perfect for my age and ability. I feel more independent and joyful.”`,
      name: 'Leela',
      img: 'https://images.unsplash.com/photo-1665485825675-b774e599e6fd?w=600&auto=format&fit=crop&q=60',
    },
    {
      description: `“Yoga has improved my posture and reduced my joint pain. It’s been a life changer for me.”`,
      name: 'Vikram',
      img: 'https://images.unsplash.com/photo-1600883662955-a82934b7cd65?w=600&auto=format&fit=crop&q=60',
    },
  ];
}
