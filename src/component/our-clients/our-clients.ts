import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-clients',
  standalone: true,
  imports: [NgFor],
  templateUrl: './our-clients.html',
  styleUrl: './our-clients.css',
})
export class OurClients {
  title = 'Our Clients';
  Details = [
    {
      image: 'https://s3.amazonaws.com/thumbnails.venngage.com/template/414a0d48-b6fa-42f9-ba87-d09b01e178ba.png',
      alt: 'Client Logo Recharge',
    },
    {
      image: 'https://png.pngtree.com/png-clipart/20240826/original/pngtree-a-logo-of-yoga-studio-for-their-business-png-image_15855052.png',
      alt: 'Client Logo Border',
    },
    {
      image: 'https://cdn.squaresigns.com/images/templates/thumb/big/2k/a-logo-sign-template-for-yoga-studios.png',
      alt: 'Client Logo Sitemark',
    },
  ];
}
