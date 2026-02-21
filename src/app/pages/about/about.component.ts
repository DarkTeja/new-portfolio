import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements AfterViewInit {

  stats = [
    { label: 'Experience', value: '1+ Year', icon: 'fas fa-briefcase' },
    { label: 'Projects', value: '3+', icon: 'fas fa-code-branch' },
    { label: 'Tech Stack', value: '15+', icon: 'fas fa-layer-group' }
  ];

  expertises = [
    {
      title: 'Full Stack Development',
      description: 'Building robust end-to-end applications with Angular and Node.js.',
      icon: 'fas fa-laptop-code'
    },
    {
      title: 'Backend Architecture',
      description: 'Designing scalable RESTful APIs and optimized database schemas.',
      icon: 'fas fa-server'
    },
    {
      title: 'Modern UI/UX',
      description: 'Creating responsive, high-performance interfaces with a focus on usability.',
      icon: 'fas fa-swatchbook'
    }
  ];

  ngAfterViewInit() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.25 });

    reveals.forEach(el => observer.observe(el));
  }
}
