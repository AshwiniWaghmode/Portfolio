import { Component } from '@angular/core';
import { WorkExperience } from '../model/models';

@Component({
  selector: 'app-work-exp',
  templateUrl: './work-exp.component.html',
  styleUrls: ['./work-exp.component.css']
})
export class WorkExpComponent {
  WorkExpList: WorkExperience[]=[
    {
      role: 'Web Developer',
      company: 'Youricsoft Pvt Ltd',
      duration: '8 months',
      description: ['Developed and maintained Web Application using Angular, TypeScript, HTML5, CSS3, Bootstrap, and MySQL.', 'Developed Mobile Application using Flutter.',
      'Worked with JIRA, a defect tracking management tool.',
      'Collaborated with the team to create new features on the existing product using an agile development process.',
    'Utilized Bitbucket for version control, managing code repositories, branches, and pull requests.',
  'Skilled in utilizing Git Bash commands for effective source code management.']
    }
  ]

}
