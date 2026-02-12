import { Component, AfterViewInit } from '@angular/core';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  loading = false;
  success = false;
  error = false;

  ngAfterViewInit() {
    const elements = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach(el => observer.observe(el));
  }

  sendEmail(form: any) {
    if (form.invalid) return;

    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      'service_qy41ovo',
      'template_9yvjwbk',
      {
        from_name: form.value.from_name,
        from_email: form.value.from_email,
        message: form.value.message,
      },
      'h2zBGq16zRiYEg0o8'
    )
    .then(() => {
      this.loading = false;
      this.success = true;
      form.reset();
    })
    .catch(() => {
      this.loading = false;
      this.error = true;
    });
  }
}
