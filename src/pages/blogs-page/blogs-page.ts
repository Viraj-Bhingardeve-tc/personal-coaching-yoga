import { Component } from '@angular/core';
import { HeaderComponent } from "../../component/header.component/header.component";
import { Footer } from "../../component/footer/footer";
import { BlogsPageService } from '../../service/blogs-page-service';

@Component({
  selector: 'app-blogs-page',
  imports: [HeaderComponent, Footer],
  templateUrl: './blogs-page.html',
  styleUrl: './blogs-page.css'
})
export class BlogsPage {

  constructor(public bs: BlogsPageService) {}
}
