import { Component } from '@angular/core';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.css'
})
export class JoinUsComponent {
//Image interpolation/binding
imageUrl:string="./assets/bg4.jpg"; 
imageW: number = 1547;
imageH: number =600;

//Event Binding
showData($event: any) {
  console.log('Button is clicked!');
  if ($event) {
    console.log($event.target);
    console.log($event.target.value);
  }
}
userData = {
  firstName: '',
  lastName: '',
  email: '',
  institution: '',
  academicInstitution: ''
};


ngOnInit() {
  this.userData = {
    firstName: 'Erniella Jean',
    lastName: 'Manalansan',
    email: 'ellagiemanalansan@gmail.com',
    institution: 'Holy Angel University',
    academicInstitution: 'Holy Angel University'
  };
}
}
