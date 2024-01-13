import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'act3_bootstrap';
  footer = '© 2024 Erniella Jean Manalansan. All rights reserved.'; //interpolation
  appliedstyle = 'footer'; //style bonding

  // Property Binding
  mission = "../assets/img/about/salon.png";
  vision= "../assets/img/about/hairdryer.png"; 
  service = "../assets/img/about/barber.png";
 
  //Event Binding
  showData($event: any) {
    console.log('Button is clicked!');
    if ($event) {
      console.log($event.target);
      console.log($event.target.value);
    }
  }
}
