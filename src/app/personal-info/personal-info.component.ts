import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent {

  myData: String[][]=[
    ['Name', 'Ashwini Waghmode'],
    ['DOB', '01/09/1999'],
    ['Work Exp','8 months'],
    ['Education','MCA(2021-2023)']
  ];

  aboutMe: String[]=
  [
    'Hi, I am Web Developer with 8 months of experience in industry.',
    'Worked as a head of product Management in google for various technologies',
    'Always eager to learn new technologies.',
    'currently working as a CEO of google alphabet.'
  ]

}
