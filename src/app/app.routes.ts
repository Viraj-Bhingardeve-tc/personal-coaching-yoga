import { Routes } from '@angular/router';
import { App } from './app';
import { ServicePage } from '../pages/service-page/service-page';
import { EventPage } from '../pages/event-page/event-page';
import { PricingPage } from '../pages/pricing-page/pricing-page';
import { BlogsPage } from '../pages/blogs-page/blogs-page';
import { AboutPage } from '../pages/about-page/about-page';
import { ContactPage } from '../pages/contact-page/contact-page';
import { HomePage } from '../pages/home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'pages',
    component: App,
    children: [
      { path: '', component: HomePage },
      { path: 'service-page', component: ServicePage },
      { path: 'event-page', component: EventPage },
      { path: 'pricing-page', component: PricingPage },
      { path: 'blogs-page', component: BlogsPage },
      { path: 'about-page', component: AboutPage },
      { path: 'contact-page', component: ContactPage },
    ],
  },
];
