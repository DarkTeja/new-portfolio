import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillsRow1 = [
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'HTML', icon: 'assets/icons/html.svg' },
    { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
    { name: 'CSS', icon: 'assets/icons/css.svg' }
  ];

  skillsRow2 = [
    { name: 'Python', icon: 'assets/icons/python.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodejs.svg' },
    { name: 'Express', icon: 'assets/icons/express.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' }
  ];

  skillsRow3 = [
    { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'Postman', icon: 'assets/icons/postman.svg' }
  ];
}
