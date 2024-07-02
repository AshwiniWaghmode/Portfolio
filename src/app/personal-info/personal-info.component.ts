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
    'Dedicated Angular Developer with 8 months of experience in building dynamic and responsive web applications.',
    'Highly enthusiastic about learning new technologies and maintaining a continuous learning approach to stay updated with industry trends and best practices.'
  ]

}
