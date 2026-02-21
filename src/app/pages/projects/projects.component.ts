import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    reveals.forEach(el => observer.observe(el));
  }

  projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built using Angular with dynamic hero slider and smooth navigation.',
      image: 'assets/portfolio.jpg.png',
      tech: ['Angular', 'TypeScript', 'CSS'],
      github: 'https://github.com/DarkTeja/portfolio',
      demo: 'https://new-portfolio-yi4o.onrender.com',
      isClientProject: false,
      isPublicProject: false,
      projectStatus: 'Personal'
    },
    {
      title: 'Expense Tracking System',
      description: "A secure web application that enables users to track daily expenses, analyze spending patterns, and manage savings effectively via REST APIs.",
      image: 'assets/fin.png',
      tech: ['Angular', 'TypeScript', 'Node.js', 'SQL', 'REST APIs'],
      github: 'https://github.com/DarkTeja/Expenses_track',
      demo: 'sfwf',
      isClientProject: false,
      isPublicProject: true,
      projectStatus: 'Ongoing'
    },
    {
      title: 'Financial Management Web App',
      description: 'A comprehensive web portal for client management, real-time data tracking, and automated reporting.',
      image: 'assets/fintrack.png',
      // tech: ['Angular', 'Node.js', 'MySQL'],
      github: '',
      demo: '',
      isClientProject: true,
      clientName: 'Enterprise Client',
      projectStatus: 'Live'
    },
    {
      title: 'Financial Management Mobile App',
      description: 'A dedicated mobile application for real-time financial tracking, account management, and instant notifications on the go.',
      image: 'assets/mobilefin.png',
      tech: ['Ionic', 'SCSS', 'Node.js', 'MySQL', 'Android Studio'],
      github: '',
      demo: '',
      isClientProject: true,
      clientName: 'Enterprise Client',
      projectStatus: 'Live'
    }
  ];

}
