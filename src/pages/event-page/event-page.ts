import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header.component/header.component";
import { Footer } from "../../component/footer/footer";
import { EventsPageService } from '../../service/events-page-service';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-event-page',
  imports: [HeaderComponent, Footer,NgClass, NgFor],
  templateUrl: './event-page.html',
  styleUrl: './event-page.css'
})
export class EventPage {

  constructor(public es: EventsPageService) {}
}
