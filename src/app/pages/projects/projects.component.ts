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
      canFlip: false,
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
      description: "A secure web application for advanced financial management. Features JWT/OTP authentication, daily expense monitoring, and ML-based analytics for future expenditure projection.",
      canFlip: true,
      features: [
        'Secure JWT Authentication',
        'OTP-based Verification',
        'Daily Expense Tracking',
        'Interactive Analytics Dashboard',
        'ML-based Future Expenditure Analysis'
      ],
      image: 'assets/fin.png',
      tech: ['Angular', 'Node.js', 'SQL', 'JWT'],
      github: 'https://github.com/DarkTeja/Expenses_track',
      demo: 'sfwf',
      isClientProject: false,
      isPublicProject: true,
      projectStatus: 'Ongoing'
    },
    {
      title: 'Financial Management Web App',
      description: 'A comprehensive web portal for account tracking and business growth. Users can import data via Excel and utilize analytical dashboards to understand business performance and scale effectively.',
      canFlip: true,
      features: [
        'Excel Data Import',
        'Analytical Dashboards',
        'Business Growth Insights',
        'Real-time Scaling Metrics'
      ],
      image: 'assets/fintrack.png',
      tech: ['Angular', 'Node.js', 'MySQL'],
      github: '',
      demo: '',
      isClientProject: true,
      clientName: 'Enterprise Client',
      projectStatus: 'Live'
    },
    {
      title: 'Financial Management Mobile App',
      description: 'A dedicated mobile application for account management on the go. Supports Excel data imports and provides insightful dashboards that help businesses track progress and grow efficiently.',
      canFlip: true,
      features: [
        'Mobile Account Management',
        'Portable Excel Imports',
        'Insightful Growth Dashboards',
        'Business Progress Sync'
      ],
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
