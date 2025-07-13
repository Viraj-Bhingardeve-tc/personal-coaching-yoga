import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PricingPageService {
  constructor() {}

  pricing_cta_content = {
    hero_section: {
      title: 'Simple Plans for Ambitious Entrepreneurs',
      description:'No fluff—just focused coaching designed to accelerate your business growth. Whether you’re launching your first venture or scaling rapidly, pick the plan that matches your goals and budget perfectly.',
      buttonText: 'Start Now',
      buttonLink: 'https://tc-personal-coaching-2.web.app',
      image:'https://images.unsplash.com/photo-1643682661119-28da0685be2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  };
}
