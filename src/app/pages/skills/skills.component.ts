import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillsCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript', icon: 'assets/icons/js.svg', featured: false },
        { name: 'TypeScript', icon: 'assets/icons/typescript.svg', featured: true },
        { name: 'Angular', icon: 'assets/icons/angular.svg', featured: true },
        { name: 'Ionic', icon: 'assets/icons/ionic.svg', featured: true },
        { name: 'HTML', icon: 'assets/icons/html.svg', featured: false },
        { name: 'CSS', icon: 'assets/icons/css.svg', featured: false },
        { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg', featured: false }
      ]
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: 'assets/icons/nodejs.svg', featured: true },
        { name: 'Express', icon: 'assets/icons/express.svg', featured: false },
        { name: 'Python', icon: 'assets/icons/python.svg', featured: false },
        { name: 'MySQL', icon: 'assets/icons/mysql.svg', featured: false },
        { name: 'MongoDB', icon: 'assets/icons/mongodb.svg', featured: false }
      ]
    },
    {
      title: 'Tools & Version Control',
      skills: [
        { name: 'Git', icon: 'assets/icons/git.svg', featured: false },
        { name: 'Postman', icon: 'assets/icons/postman.svg', featured: false }
      ]
    }
  ];
}
