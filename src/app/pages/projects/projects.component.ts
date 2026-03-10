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
    },
    {
      title: 'Ecommerce Demo',
      description: 'A modern, high-performance E-commerce platform demonstration. Features a premium design, responsive layout, and seamless user experience tailored for high-end retail.',
      canFlip: true,
      features: [
        'Modern UI/UX Design',
        'Responsive Product Grid',
        'Interactive Figma Prototype',
        'Optimized User Flows'
      ],
      image: 'assets/ecommerce_preview.png',
      tech: ['Figma', 'UI/UX', 'Prototype'],
      github: '',
      demo: 'https://time-lens-09201289.figma.site/',
      isClientProject: false,
      isPublicProject: true,
      projectStatus: 'Demo'
    },
    {
      title: 'Restaurant Demo',
      description: 'A luxurious and inviting restaurant website demonstration. Showcases gourmet cuisine with a premium reservation system and an elegant, responsive layout.',
      canFlip: true,
      features: [
        'Luxury Food Showcase',
        'Reservation System UI',
        'Elegant Serif Typography',
        'Responsive Dining Experience'
      ],
      image: 'assets/restaurant_preview.png',
      tech: ['Figma', 'UI/UX', 'Prototype'],
      github: '',
      demo: 'https://www.figma.com/make/uLr5hGSmcZNWrxhoK2TMeO/Restaurant-Website?fullscreen=1&t=B6fggFMUw5dLUiWI-1&code-node-id=0-8',
      isClientProject: false,
      isPublicProject: true,
      projectStatus: 'Demo'
    }
  ];

  get regularProjects() {
    return this.projects.filter(p => p.projectStatus !== 'Demo');
  }

  get demoProjects() {
    return this.projects.filter(p => p.projectStatus === 'Demo');
  }

}
