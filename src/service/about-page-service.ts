import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AboutPageService {
 
  about_page_content = {
    hero_section: {
      image: 'https://images.unsplash.com/photo-1661559058203-19441b3fdc08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sm91cm5hbCUyMG9uJTIweW9nYSUyMG1hdCUyMHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D',
      title: 'About Us',
      description: 'Our mission is to guide you on a transformative journey towards health and harmony through yoga. With personalized sessions, expert instructors, and a supportive community, we help you build strength, flexibility, and inner peace at your own pace.',
      button_text: 'Get started',
      button_link: 'https://tc-personal-coaching-2.web.app',
    },

    balanced_living_section: {
      title: 'Balanced Living Through Yoga',
      description: `Yoga is more than just exercise; it’s a holistic lifestyle that harmonizes the mind, body, and spirit. At our yoga center, we are dedicated to helping you experience physical vitality, mental calm, and self-love. Whether you’re a beginner or an experienced practitioner, our expert instructors will guide and support you at every step. Transform your lifestyle through yoga and start living a happier, healthier life today.`,
      image: 'https://images.unsplash.com/photo-1740765958686-e44fa31f2561?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WW9nYSUyMGJhbGFuY2UlMjBwb3NlJTIwb3V0ZG9vcnMlMjBibHVlJTIwY29sb3IlMjBvbGQlMjBhZ2V8ZW58MHx8MHx8fDA%3D',
    },

    counter_section: [
      {
        count: '500',
        title: 'Yoga Sessions',
        description: 'Transformative sessions helping thousands find balance and strength.',
      },
      {
        count: '120',
        title: 'Workshops',
        description: 'Expert-led workshops focusing on mindfulness, breathing, and flexibility.',
      },
      {
        count: '2000+',
        title: 'Happy Practitioners',
        description: 'Join a growing community committed to health, peace, and well-being.',
      },
    ],

    timeline_section: {
      title: 'Timeline',
      events: [
        {
          year: '2018',
          subtitle: 'Started Yoga Classes',
          description: 'Organized the first yoga class and began teaching yoga.',
        },
        {
          year: '2015',
          subtitle: 'Yoga Teacher Certification',
          description: 'Received internationally recognized yoga teacher certification.',
        },
        {
          year: '2020',
          subtitle: 'Established Yoga Center',
          description: 'Founded a yoga center and helped thousands experience the benefits of yoga.',
        },
      ],
    },
  };
}
