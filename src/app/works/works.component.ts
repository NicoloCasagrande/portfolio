import { Component, OnInit } from '@angular/core';
import { Work } from '../_models/work.model';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-works',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './works.component.html',
  styleUrl: './works.component.scss'
})
export class WorksComponent implements OnInit{

  works: Work[] = [];

  ngOnInit(){
    this.works.push(new Work('Enterprise Chat Reproduction', 'Creation of an Enterprise chat for employee only', 'https://nicolocasagrande.github.io/chat-reactjs/', 'https://github.com/NicoloCasagrande/chat-reactjs', ['REACT', 'NODEJS']));
    this.works.push(new Work('Generic Dashboard', 'Creation of a generic dashboard template.', 'https://darling-buttercream-2e256f.netlify.app/', 'https://github.com/NicoloCasagrande/html-css-bootstrap-dashboard', ['HTML', 'CSS']));
    this.works.push(new Work('Whatsapp Reproduction', 'Reproduction of Whatsapp using an API that response with Chuck Norris phrases.', 'https://melodious-marshmallow-b9191a.netlify.app/', 'https://github.com/NicoloCasagrande/vue-boolzapp', ['VUE', 'VITE']));
    this.works.push(new Work('Dropbox Home Page Reproduction', 'Reproduction of the Old Dropbox Website Home Page.', 'https://marvelous-genie-d025cb.netlify.app/', 'https://github.com/NicoloCasagrande/htmlcss-dropbox', ['HTML', 'CSS']));
    
  }

  goToApplication(link:string){
    window.location.replace(link);
  }
}