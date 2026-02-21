import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  slides = [
    {
      image: 'assets/slide1.jpg',
      role: 'Full Stack Developer',
      description: 'I design and build complete web applications, handling both frontend and backend with scalable architectures.'
    },
    {
      image: 'assets/slide2.png',
      role: 'Frontend Developer',
      description: 'I create responsive, user-friendly interfaces with modern Angular, focusing on performance and UX.'
    },
    {
      image: 'assets/slide3.png',
      role: 'Backend Developer',
      description: 'I develop secure, high-performance backend services, APIs, and databases to power applications.'
    }
  ];


  currentIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex =
        (this.currentIndex + 1) % this.slides.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

}
