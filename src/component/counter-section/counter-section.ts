import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-section',
  standalone: true,
  imports: [NgFor],
  templateUrl: './counter-section.html',
  styleUrl: './counter-section.css',
})
export class CounterSection {
 
}
