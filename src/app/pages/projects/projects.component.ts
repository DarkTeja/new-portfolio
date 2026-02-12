import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built using Angular with dynamic hero slider and smooth navigation.',
      image: 'assets/portfolio.jpg.png',
      tech: ['Angular', 'TypeScript', 'CSS'],
      github: 'https://github.com/yourname/portfolio',
      demo: 'https://yourportfolio.com'
    },
    {
      title: 'Expense Tracking System',
      description: "A secure web application with user authentication that enables users to track daily expenses, analyze spending patterns, and manage savings effectively",
      image: 'assets/fin.png',
      tech: ['Angular', 'Node.js', 'Mysql' ],
      github: 'https://github.com/yourname/ecommerce',
      demo: ''
    },
   
  ];

}
