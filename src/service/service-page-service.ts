import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicePageService {
  service_page_content = {
    hero_section: {
      title: 'Empower Your Wellness Journey',
      description:
        'Discover personalized yoga guidance crafted to enhance balance, flexibility, and inner peace. Our sessions support you in building strength and confidence at your own pace.',
      buttonText: 'Get Started Now',
      buttonLink: 'https://tc-personal-coaching-2.web.app',
      image:
        'https://images.unsplash.com/photo-1592580715317-19adca36288e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RW1wb3dlciUyMFlvdXIlMjBXZWxsbmVzcyUyMEpvdXJuZXl8ZW58MHx8MHx8fDA%3D',
    },

    yoga_services: [
      {
        title: 'Personalized Yoga Sessions',
        description: `Unlock the healing power of yoga with sessions tailored just for you. Whether you're a beginner, recovering from injury, or looking to deepen your practice — we design every class around your specific body type, health goals, and comfort level.

These one-on-one sessions ensure focused attention, proper alignment, and a safe, nurturing environment to explore flexibility, breathwork, and mindfulness.`,
        image:
          'https://images.unsplash.com/photo-1747302653730-91070dfaa827?w=600&auto=format&fit=crop&q=60',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'Group Wellness Classes',
        description: `Experience the joy of yoga in a community setting. Our group wellness classes bring together individuals of all levels to move, breathe, and grow stronger — physically and mentally.

These sessions are designed to boost energy, improve mobility, and foster social connections. Ideal for those who enjoy practicing in a supportive group atmosphere while still receiving mindful guidance.`,
        image:
          'https://www.jencaremed.com/sites/default/files/2023-08/The%20Benefits%20of%20Mindfulness%20and%20Meditation%20for%20Older%20Adults.jpg',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'Chair-Based Yoga',
        description: `Chair-Based Yoga offers gentle movements and stretches using the support of a chair. It is ideal for seniors, beginners, or individuals with limited mobility who find it difficult to sit or stand for long periods.

This practice improves flexibility, balance, and blood circulation while reducing stiffness and joint pain — all from the comfort of a seated position.`,
        image:
          'https://images.unsplash.com/photo-1717821218458-098487e75e20?w=600&auto=format&fit=crop&q=60',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'Mindfulness & Relaxation',
        description: `Experience the power of mindfulness through guided breathing and meditation techniques designed to bring deep relaxation and inner clarity.

These sessions help reduce anxiety, improve sleep quality, and promote emotional balance. Ideal for those seeking peace of mind, mental focus, and a break from the stresses of daily life.`,
        image:
          'https://images.squarespace-cdn.com/content/v1/5f0c9391ed570840353ad9a4/814a6549-7668-4e1e-956f-f59a57b50248/Meditation%2BFor%2BElderly%3B%2B3%2BReasons%2BTo%2BJoin%2Ba%2BClass%2BWith%2BUJCES.png',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'Weekly Progress Tracking',
        description: `Stay committed to your yoga journey with simple weekly check-ins. Track your flexibility, strength, balance, and posture improvements over time — helping you stay motivated and mindful of your growth.

Each session includes gentle assessments, goal setting, and personalized feedback, so you can see your progress and celebrate every small victory.`,
        image:
          'https://images.unsplash.com/photo-1586008883186-bbcf97543e3d?w=600&auto=format&fit=crop&q=60',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'Nutrition & Lifestyle Tips',
        description: `True wellness goes beyond the yoga mat. Get practical, easy-to-follow tips on nutrition, hydration, sleep, and daily routines to support your mind and body.

From healthy meal ideas to mindful habits, we guide you to make small lifestyle changes that lead to long-lasting wellness.`,
        image:
          'https://chaskaheights.com/wp-content/uploads/2024/06/Healthy-eating-and-exercise-tips-for-seniors.jpg',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'Special Workshops',
        description: `Participate in sessions guided by expert instructors on special topics like breathing techniques, mental peace, and a positive outlook.

This workshop brings depth to your yoga practice, and each session makes you more aware, steady, and confident from within.`,
        image:
          'https://www.wellnessliving.com/knowledge-sharing/wp-content/uploads/2019/07/Yoga-for-Seniors-2.jpg',
        link: 'https://tc-personal-coaching-2.web.app',
      },
      {
        title: 'At-Home Yoga Guidance',
        description: `When attending classes in person is not possible, stay active from home. Easily practice yoga anytime with the help of our guided routine.

This option is excellent for maintaining your regular practice, and it is flexible and safe according to your schedule.`,
        image:
          'https://thumbs.dreamstime.com/b/elderly-man-practicing-yoga-cozy-home-interior-natural-light-promoting-healthy-lifestyle-wellness-senior-man-doing-350900514.jpg',
        link: 'https://tc-personal-coaching-2.web.app',
      },
    ],

    wellness_section: {
      title: 'Join Our Wellness Community',
      subtitle:
        'Step into a space of peace, movement, and connection. Together, we grow stronger mind, body, and spirit.',
      benefits: [
        {
          title: 'Consistency',
          description:
            'Stay on track with regular sessions that build healthy habits and lasting results.',
        },
        {
          title: 'Support',
          description:
            'You’re never alone our instructors and community are here every step of the way.',
        },
        {
          title: 'Trust & Care',
          description:
            'Led by experienced trainers who understand your pace and priorities.',
        },
        {
          title: 'Positive Energy',
          description:
            'Enjoy uplifting sessions that energize your body and calm your mind.',
        },
      ],
    },
  };
}
