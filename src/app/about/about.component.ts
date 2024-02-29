import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  email: string = '';
  subject: string = '';
  text: string = '';
  textError: string = '';

  sendEmail(){
    if(!(this.email =='') || !(this.subject =='') || !(this.text =='')){
      this.textError = 'Devi inserire tutti e tre i campi !';
    }
  }
}
