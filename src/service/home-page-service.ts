import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HomePageService {
  home_page_content = {
    hero_section: {
      image:
        'https://www.thriveusahomecare.com/wp-content/uploads/2024/02/senior-yoga.jpg',
      title: 'Experience the Power of Gentle Yoga for Mind and Body.',
      description: `Join a welcoming space where yoga is tailored to support joint mobility,
    improve balance, and bring peace of mind. Guided by experienced instructors, 
    each session helps you feel energized, relaxed, and connected at your own pace.`,
      buttonText: 'Begin Your Wellness Journey Today',
      buttonLink: 'https://tc-personal-coaching-2.web.app',
    },

    Counter_Section: [
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
    ],

    download_brochure: {
      imageUrl:
        'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VuaW9yJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D',
      title: 'From Simple Movements to Transformative Well-being',
      description:
        'Begin your journey to better health and peace of mind. Download our free guide and discover 7 gentle yoga practices that can truly make a difference.',
      buttonText: 'Download the Free Guide',
      buttonLink:
        'https://abhayvalsangkar.com/assets/7%20steps%20to%20become%20a%20Fearless%20Speaker%20by%20Abhay.pdf',
    },

    our_clients: {
      title: 'Our Clients',
      Details: [
        {
          image:
            'https://s3.amazonaws.com/thumbnails.venngage.com/template/414a0d48-b6fa-42f9-ba87-d09b01e178ba.png',
          alt: 'Client Logo Recharge',
        },
        {
          image:
            'https://png.pngtree.com/png-clipart/20240826/original/pngtree-a-logo-of-yoga-studio-for-their-business-png-image_15855052.png',
          alt: 'Client Logo Border',
        },
        {
          image:
            'https://cdn.squaresigns.com/images/templates/thumb/big/2k/a-logo-sign-template-for-yoga-studios.png',
          alt: 'Client Logo Sitemark',
        },
      ],
    },

    follow_us: {
      title: 'Follow us',
      socialLinks: [
        {
          icon: 'socicon-facebook',
          link: 'https://tc-personal-coaching-2.web.app/',
        },
        {
          icon: 'socicon-twitter',
          link: 'https://tc-personal-coaching-2.web.app/',
        },
        {
          icon: 'socicon-instagram',
          link: 'https://tc-personal-coaching-2.web.app/',
        },
        {
          icon: 'socicon-linkedin',
          link: 'https://tc-personal-coaching-2.web.app/',
        },
        {
          icon: 'socicon-youtube',
          link: 'https://tc-personal-coaching-2.web.app/',
        },
      ],
    },
  };
}
