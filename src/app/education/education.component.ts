import { Component } from '@angular/core';
import { Education } from '../model/models';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      institute: 'IICMR Institue',
      Course: 'MCA',
      duration: '2021-2023',
      CGPA: '7.50'
    },
    {
      institute: 'SNDT University',
      Course: 'Bsc(IT)',
      duration: '2017-2020',
      CGPA: '7.15'
    }

  ];  
  constructor(){}

  ngOnInit():void{}
}
