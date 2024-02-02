import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
//Image interpolation/binding
imageUrl:string="./assets/bg.jpg"; 
imageW: number = 1550;
imageH: number =600;

//Image interpolation/binding
imageUrl1 = "./assets/france.jpg";
imageUrl2 = "./assets/seoul.jpg";
imageUrl3 = "./assets/san-francisco.jpg";

//Event Binding
showData($event: any) {
  console.log('Button is clicked!');
  if ($event) {
    console.log($event.target);
    console.log($event.target.value);
  }
}

//interporation
  texthere = 'Join our Research Conferences around the Globe';
}

