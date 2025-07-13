import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogsPageService {
  blogs_page_content = {
    yoga_blog: {
      title: 'Discover Our Yoga Insights Blog',
      description: `Dive into wellness tips, inspiring stories, and practical yoga practices that nurture your body and mind. Whether you're a beginner or seasoned yogi, our blog supports your journey to balance, health, and inner peace.`,
      image:
        'https://images.unsplash.com/photo-1561577732-4aaa488cd807?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fEpvdXJuYWwlMjBvbiUyMHlvZ2ElMjBtYXQlMjBncmVlbiUyMGNvbG9yfGVufDB8fDB8fHww',
      buttonText: 'Read the blog',
      link: 'https://tc-personal-coaching-2.web.app',
    },

    mindfulness_sections: [
      {
        title: 'Clarity through Mindful Practice',
        description:
          'Focused yoga sessions help you cultivate mental clarity and inner peace, empowering you to navigate life with calm and confidence.',
        image:
          'https://images.unsplash.com/photo-1732380795353-54cb0e4a1cc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U29mdCUyMG1vcm5pbmclMjBsaWdodCUyMG9yJTIwc3VucmlzZSUyMHdpdGglMjBhJTIweW9naSUyMGluJTIwYSUyMHNlYXRlZCUyMHBvc2UlMjBvbGQlMjBhZ2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D',
        alt: 'Yoga Setting',
      },
      {
        title: 'Balance Fuels Growth',
        description:
          'A consistent yoga practice aligns your body and mind, helping you grow stronger, more flexible, and balanced in every aspect of life.',
        image:
          'https://images.unsplash.com/photo-1701826510604-933d4f755d35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8WW9nYSUyMHByYWN0aXRpb25lciUyMHN0cmV0Y2hpbmclMjBvciUyMGluJTIwYSUyMHN0cm9uZyUyMHBvc2UlMjBvbGQlMjBhZ2UlMjB3aGl0ZSUyMGJhY2slMjBncm91bmR8ZW58MHx8MHx8fDA%3D',
        alt: 'Yoga Strategy',
      },
    ],

    yoga_news_section: [
      {
        category: 'Workshops',
        title: 'Deepen Your Practice with Upcoming Yoga Workshops',
        image:
          'https://images.unsplash.com/photo-1717500251894-e127a481632e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHlvZ2ElMjB3b3Jrc2hvcCUyQyUyMG9sZCUyMGFnZSUyMHdoaXRlJTIwYmFjayUyMGdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D',
        link: '',
      },
      {
        category: 'MindFulness',
        title: 'Building a Mindful Lifestyle: Tips & Insights',
        image:
          'https://images.unsplash.com/photo-1739057632617-6151cc85afa5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbG0lMjBtZWRpdGF0aW9uJTJDfGVufDB8fDB8fHww',
        link: '',
      },
      {
        category: 'Wellness',
        title: 'Effective Promotion Strategies for Yoga Studios',
        image:
          'https://images.unsplash.com/photo-1529693662653-9d480530a697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RGVlcGVuJTIwWW91ciUyMFByYWN0aWNlJTIwd2l0aCUyMFVwY29taW5nJTIwWW9nYSUyMFdvcmtzaG9wc3xlbnwwfHwwfHx8MA%3D%3D',
        link: '',
      },
    ],
  };
}
