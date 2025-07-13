import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricingPageService {
  constructor() {}

  pricing_page_content = {
    hero_section: {
      title: 'Simple Plans for Ambitious Entrepreneurs',
      description:
        'No fluff—just focused coaching designed to accelerate your business growth. Whether you’re launching your first venture or scaling rapidly, pick the plan that matches your goals and budget perfectly.',
      buttonText: 'Start Now',
      buttonLink: 'https://tc-personal-coaching-2.web.app',
      image:
        'https://images.unsplash.com/photo-1643682661119-28da0685be2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    yoga_training_plan: {
      title: 'Simple and Effective Plans for Yoga Training',
      description: `Choose the right plan to enhance your physical and mental well-being. Our yoga courses help you build confidence, find inner peace, and bring renewed energy to your life.`,
      image:
        'https://images.unsplash.com/photo-1687180949117-7a297e2e5a16?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Sm91cm5hbCUyMG9uJTIweW9nYSUyMG1hdCUyMHN1bnNldCUyMG91ciUyMHRlYW1zfGVufDB8fDB8fHww',
      link: 'https://tc-personal-coaching-2.web.app',
      buttonText: 'Get started',
    },

    pricing_section: {
      title: 'Pricing Plan',
      plans: [
        {
          name: 'Beginner',
          price: '$15/month',
          description:
            'Perfect for those new to yoga, focusing on foundational poses and breathing.',
          features: [
            '2 live group sessions/month',
            'Email support for practice guidance',
            'Access to beginner video tutorials',
          ],
          buttonText: 'Get this plan',
          buttonClass: 'btn-primary',
          link: '#',
          active: true,
        },
        {
          name: 'Advanced',
          price: '$50/month',
          description:
            'For regular practitioners looking to deepen practice with personalized coaching.',
          features: [
            'Weekly live group & 1 private session/month',
            'Custom practice plans',
            'Priority email & chat support',
          ],
          buttonText: 'Get this plan',
          buttonClass: 'btn-primary',
          link: '#',
          active: false,
        },
        {
          name: 'Wellness Package',
          price: 'Price on request',
          description:
            'Customized wellness plans for groups and corporate clients focusing on holistic health.',
          features: [
            'Unlimited sessions for teams',
            'Tailored yoga & meditation workshops',
            'Health & lifestyle coaching',
          ],
          buttonText: 'Contact us',
          buttonClass: 'btn-white',
          link: '#',
          active: false,
        },
      ],
    },
  };
}
