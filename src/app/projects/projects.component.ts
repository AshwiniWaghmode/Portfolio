import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../model/models';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: "Society Management System",
      technologies: "Angular, Spring Boot, MySQL",
      description: [
        'Developed a comprehensive Society Management System to streamline and automate the management of residential societies. The system provides a centralized platform for residents, society administrators, and maintenance staff to manage daily operations efficiently.',
        'Resident Management',
        'Complaint Management',
        'Notice Board',
        'Aminity Booking',
        'Visitor Management',
        'Maintainence Management',
      ],
    },
    {
      title: "Employee Management System",
      technologies: "Angular, JSON, Angular Material",
      description: [
        'Designed a responsive and user-friendly interface with Angular Material components. Implemented a dynamic data table to display employee records with sorting and pagination features.',
        'Leveraged Angular Material to enhance the aesthetic and functionality of the user interface, including form controls, buttons, modals, and data tables.',
        'Integrated JSON Server for rapid backend development and testing, facilitating a smooth development workflow.',
        'Implemented best practices for code organization, including modular structure, reusable components, and service-based architecture',
      ]
    }
  ]

}
