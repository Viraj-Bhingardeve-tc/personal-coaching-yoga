import { NgFor } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';

@Component({
  selector: 'app-services-section',
  standalone:true,
  imports: [NgFor],
  templateUrl: './services-section.html',
  styleUrl: './services-section.css',
})
export class ServicesSection implements AfterViewInit {
  
  @ViewChild('embla', { static: true }) emblaNode!: ElementRef;
  emblaApi!: EmblaCarouselType;
  
  title = 'Services';
  subtitle = "To add more cards, hover on a card and click 'Add items'";

  details = [
    {
      title: 'Personalized Yoga Sessions',
      description:'Yoga customized to your body’s needs and comfort. Improve balance, flexibility, and inner calm.',
      img: 'https://images.unsplash.com/photo-1747302653730-91070dfaa827?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlbmlvciUyMGNpdGl6ZW4lMjB5b2dhJTIwZ3JvdXB8ZW58MHx8MHx8fDA%3D',
      link: '',
    },
    {
      title: 'Group Wellness Classes',
      description:'Practice gentle yoga with a supportive group. Boost energy, mobility, and social connection.',
      img: 'https://www.jencaremed.com/sites/default/files/2023-08/The%20Benefits%20of%20Mindfulness%20and%20Meditation%20for%20Older%20Adults.jpg',
      link: '',
    },
    {
      title: 'Chair-Based Yoga',
      description:'Low-impact yoga using chair support. Perfect for beginners or limited mobility.',
      img: 'https://images.unsplash.com/photo-1717821218458-098487e75e20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYW5kcGFyZW50JTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D',
      link: '',
    },
    {
      title: 'Mindfulness & Relaxation',
      description:'Learn calming breathing and meditation techniques. Reduce stress and improve sleep quality.',
      img: 'https://images.squarespace-cdn.com/content/v1/5f0c9391ed570840353ad9a4/814a6549-7668-4e1e-956f-f59a57b50248/Meditation%2BFor%2BElderly%3B%2B3%2BReasons%2BTo%2BJoin%2Ba%2BClass%2BWith%2BUJCES.png',
      link: '',
    },
    {
      title: 'Weekly Progress Tracking',
      description:'Monitor flexibility, strength, and posture. Stay motivated with simple check-ins.',
      img: 'https://images.unsplash.com/photo-1586008883186-bbcf97543e3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBlcnNvbiUyMGJhbGFuY2luZyUyMGluJTIwYSUyMHlvZ2ElMjBwb3NlJTIwb3V0ZG9vcnMlMjBvbGQlMjBhZ2UlMjB3aGl0ZSUyMGJhY2slMjBncm91bmR8ZW58MHx8MHx8fDA%3D',
      link: '',
    },
    {
      title: 'Nutrition & Lifestyle Tips',
      description:'Get easy wellness tips beyond yoga. Support your health with food and routine.',
      img: 'https://chaskaheights.com/wp-content/uploads/2024/06/Healthy-eating-and-exercise-tips-for-seniors.jpg',
      link: '',
    },
    {
      title: 'Special Workshops',
      description:'Join expert-led sessions on breathwork and mindset. Deepen your practice with unique topics.',
      img: 'https://www.wellnessliving.com/knowledge-sharing/wp-content/uploads/2019/07/Yoga-for-Seniors-2.jpg',
      link: '',
    },
    {
      title: 'At-Home Yoga Guidance',
      description:'Practice anytime with guided routines. Perfect for staying active between classes.',
      img: 'https://thumbs.dreamstime.com/b/elderly-man-practicing-yoga-cozy-home-interior-natural-light-promoting-healthy-lifestyle-wellness-senior-man-doing-350900514.jpg',
      link: '',
    },
  ];

    ngAfterViewInit(): void {
    this.emblaApi = EmblaCarousel(this.emblaNode.nativeElement.querySelector('.embla__viewport'), {
      loop: false,
      align: 'center',
      containScroll: 'trimSnaps'
    });
  }

  scrollPrev() {
    if (this.emblaApi) this.emblaApi.scrollPrev();
  }

  scrollNext() {
    if (this.emblaApi) this.emblaApi.scrollNext();
  }

}
