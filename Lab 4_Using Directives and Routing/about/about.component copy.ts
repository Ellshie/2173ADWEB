import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
//Image interpolation/binding
imageUrl:string="assets/logo2.png"; 
imageW: number = 110;
imageH: number = 100;
}
