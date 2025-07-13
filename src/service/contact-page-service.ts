import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactPageService {
  
  contact_section = {
    title: 'Contact us',
    fields: {
      name: 'Name',
      email: 'E-mail',
      phone: 'Phone',
      message: 'Message'
    },
    button_text: 'Send message',
    form_action: 'https://mobirise.eu/',
    image: 'https://images.unsplash.com/photo-1624704200567-760cf26ae848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1bnNldCUyMHlvZ2F8ZW58MHx8MHx8fDA%3D'
  };
}
