import { Component } from '@angular/core';
import { ServiceblogService } from '../blog/blog-service.service';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  constructor(public service:ServiceblogService) {
    this.service.showEdit=false;
    
  }

  onSubmit() {
    if (this.name && this.email && this.message) {
      console.log('Name:', this.name);
      console.log('Email:', this.email);
      console.log('Message:', this.message);
      // Aquí podrías agregar la lógica para enviar los datos a un backend o servicio
    } else {
      alert('Please fill in all fields');
    }
  }
}

