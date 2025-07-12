import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download-brochure',
  standalone:true,
  imports: [RouterLink],
  templateUrl: './download-brochure.html',
  styleUrl: './download-brochure.css'
})
export class DownloadBrochure {

  imageUrl = 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VuaW9yJTIweW9nYXxlbnwwfHwwfHx8MA%3D%3D';
  title = 'From Simple Movements to Transformative Well-being';
  description = 'Begin your journey to better health and peace of mind. Download our free guide and discover 7 gentle yoga practices that can truly make a difference.';
  buttonText = 'Download the Free Guide';
  buttonLink = 'https://abhayvalsangkar.com/assets/7%20steps%20to%20become%20a%20Fearless%20Speaker%20by%20Abhay.pdf';

  constructor() {}
}
