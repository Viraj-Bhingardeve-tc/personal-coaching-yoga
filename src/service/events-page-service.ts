import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventsPageService {
  events_page_content = {
    embrace_wellness: {
      title: 'Embrace Wellness from Within',
      description: `Whether you're retired or working, this session will guide you to find inner peace, improve flexibility, and boost your energy through yoga.

Move away from stress and bring calm, health, and happiness into your life right from the comfort of your home!`,
      image:
        'https://images.unsplash.com/photo-1658314755561-389d5660ee54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZXhlcmNpc2luZyUyMG9sZCUyMGFnZXxlbnwwfHwwfHx8MA%3D%3D',
      link: 'https://tc-personal-coaching-2.web.app',
      linkText: 'Start Now',
    },

    upcoming_workshops: {
      title: 'Upcoming Yoga Workshops',
      subtitle:
        'Join our specialized yoga sessions designed to enhance wellness, flexibility, and mindfulness for all ages.',
      workshops: [
        {
          title: 'Gentle Yoga for Seniors',
          date: 'August 15, 2025',
          description:
            'Experience safe and supportive yoga tailored for seniors to improve mobility, balance, and relaxation.',
          link: '#',
        },
        {
          title: 'Meditation & Mindfulness',
          date: 'September 10, 2025',
          description:
            'Learn techniques to calm your mind, reduce stress, and cultivate inner peace through guided meditation.',
          link: '#',
        },
        {
          title: 'Yoga for Better Sleep',
          date: 'October 5, 2025',
          description:
            'Discover gentle yoga poses and breathing exercises to improve sleep quality and wake up refreshed.',
          link: '#',
        },
      ],
    },
  };
}
