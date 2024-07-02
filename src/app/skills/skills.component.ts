import { Component } from '@angular/core';
import { Skill } from '../model/models';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: "Angular",
      level: "Advanced"
    },
    {
      name: "Typescript",
      level: "Advanced"
    },
    {
      name: "Javascript",
      level: "Advanced"
    },
    {
      name: "Flutter",
      level: "Advanced"
    },
    {
      name: "HTML",
      level: "Advanced"
    },
    {
      name: "CSS",
      level: "Advanced"
    }
  ]

}
