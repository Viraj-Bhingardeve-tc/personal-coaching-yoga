import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header.component/header.component";
import { Footer } from "../../component/footer/footer";
import { ContactPageService } from '../../service/contact-page-service';

@Component({
  selector: 'app-contact-page',
  imports: [HeaderComponent, Footer],
  templateUrl: './contact-page.html',
})
export class ContactPage {

  constructor(public cs: ContactPageService) {}
}
