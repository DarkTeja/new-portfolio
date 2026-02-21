import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuOpen = false;
  logoFlipped = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleLogoFlip() {
    this.logoFlipped = !this.logoFlipped;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
