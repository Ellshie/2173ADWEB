import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  imageUrl:string="assets/about.png"; 
  imageW: number = 110;
  imageH: number = 100;
  
}
