import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="app-container">
      <!-- Navigation Header -->
      <header class="navbar">
        <div class="nav-container">
          <div class="nav-logo">
            <h2>{{developerName}}</h2>
          </div>
          <nav class="nav-menu" [class.nav-menu-active]="isMenuOpen">
            <a routerLink="/home" routerLinkActive="active" class="nav-link">Home</a>
            <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
            <a routerLink="/projects" routerLinkActive="active" class="nav-link">Projects</a>
            <a routerLink="/contact" routerLinkActive="active" class="nav-link">Contact</a>
          </nav>
          <div class="hamburger" [class.hamburger-active]="isMenuOpen" (click)="toggleMenu()">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>{{developerName}}</h3>
              <p>.NET & Cloud Developer</p>
            </div>
            <div class="footer-section">
              <h4>Technologies</h4>
              <ul>
                <li>.NET Core</li>
                <li>Angular</li>
                <li>Azure</li>
                <li>Docker & Kubernetes</li>
              </ul>
            </div>
            <div class="footer-section">
              <h4>Connect</h4>
              <div class="social-links">
                <a href="https://linkedin.com" target="_blank" class="social-link">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com" target="_blank" class="social-link">
                  <i class="fab fa-github"></i>
                </a>
                <a href="mailto:your.email@example.com" class="social-link">
                  <i class="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; {{currentYear}} {{developerName}}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  developerName = 'Indranil Bera';
  currentYear = new Date().getFullYear();
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}