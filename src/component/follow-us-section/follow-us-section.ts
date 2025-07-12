import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-follow-us-section',
  standalone:true,
  imports: [NgFor],
  templateUrl: './follow-us-section.html',
  styleUrl: './follow-us-section.css'
})
export class FollowUsSection {

  title = 'Follow us';
  socialLinks = [
    { icon: 'socicon-facebook', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-twitter', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-instagram', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-linkedin', link: 'https://tc-personal-coaching-2.web.app/' },
    { icon: 'socicon-youtube', link: 'https://tc-personal-coaching-2.web.app/' },
  ];
}
