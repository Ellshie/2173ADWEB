/* Erniella Manalansan  | WD-302 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  title ='This string is interpolated'; //Interpolation
  clientName = 'Ells'; //Property Binding
  appliedCSS = 'green'; //Style Binding
  notAppliedCSS = false;
  myColor ='red';

  //Event Binding

  // showData($event: any) {
  //   console.log('Button is clicked!');
  //   if ($event) {
  //     console.log($event.target);
  //     console.log($event.target.value);
  //   }
  // }


  //Event Binding
  clickCount=0
  clickMe(){
    this.clickCount++;
  }
}



