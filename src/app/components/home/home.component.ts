import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="highlight">{{name}}</span>
            </h1>
            <h2 class="hero-subtitle">
              Senior .NET & Cloud Developer
            </h2>
            <p class="hero-description">
              Passionate about building scalable applications using .NET, Angular, and cloud technologies. 
              Experienced in Azure, Docker, Kubernetes, and MongoDB with a focus on modern development practices.
            </p>
            <div class="hero-actions">
              <a routerLink="/projects" class="btn btn-primary">View My Work</a>
              <a routerLink="/contact" class="btn btn-secondary">Get In Touch</a>
            </div>
          </div>
          <div class="hero-image">
            <div class="profile-card">
              <div class="profile-image">
                <!-- Add your profile image here -->
                <div class="image-placeholder">
                  <i class="fas fa-user"></i>
                </div>
              </div>
              <div class="floating-elements">
                <div class="tech-badge dotnet">
                  <i class="fab fa-microsoft"></i>
                  <span>.NET</span>
                </div>
                <div class="tech-badge angular">
                  <i class="fab fa-angular"></i>
                  <span>Angular</span>
                </div>
                <div class="tech-badge azure">
                  <i class="fas fa-cloud"></i>
                  <span>Azure</span>
                </div>
                <div class="tech-badge docker">
                  <i class="fab fa-docker"></i>
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Overview -->
      <section class="skills-overview">
        <div class="container">
          <h2 class="section-title">Core Technologies</h2>
          <div class="skills-grid">
            <div class="skill-card" *ngFor="let skill of coreSkills">
              <div class="skill-icon">
                <i [class]="skill.icon"></i>
              </div>
              <h3>{{skill.name}}</h3>
              <p>{{skill.description}}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Projects Preview -->
      <section class="featured-projects">
        <div class="container">
          <h2 class="section-title">Featured Projects</h2>
          <div class="projects-grid">
            <div class="project-card" *ngFor="let project of featuredProjects">
              <div class="project-image">
                <div class="project-overlay">
                  <div class="project-links">
                    <a [href]="project.demoUrl" target="_blank" class="project-link">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a [href]="project.githubUrl" target="_blank" class="project-link">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div class="project-content">
                <h3>{{project.title}}</h3>
                <p>{{project.description}}</p>
                <div class="project-tech">
                  <span class="tech-tag" *ngFor="let tech of project.technologies">{{tech}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="section-actions">
            <a routerLink="/projects" class="btn btn-primary">View All Projects</a>
          </div>
        </div>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  name = 'Indranil';

  coreSkills = [
    {
      name: '.NET Core',
      icon: 'fab fa-microsoft',
      description: 'Building robust APIs and microservices with .NET Core and ASP.NET'
    },
    {
      name: 'Angular',
      icon: 'fab fa-angular',
      description: 'Creating responsive SPAs with modern Angular and TypeScript'
    },
    {
      name: 'Azure Cloud',
      icon: 'fas fa-cloud',
      description: 'Deploying and managing applications on Microsoft Azure platform'
    },
    {
      name: 'Docker & K8s',
      icon: 'fab fa-docker',
      description: 'Containerization and orchestration for scalable deployments'
    },
    {
      name: 'MongoDB',
      icon: 'fas fa-database',
      description: 'NoSQL database design and optimization for modern applications'
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js',
      description: 'Full-stack JavaScript development and modern ES6+ features'
    }
  ];

  featuredProjects = [
    {
      title: 'E-Commerce Microservices',
      description: 'Scalable e-commerce platform built with .NET microservices, Angular frontend, and MongoDB',
      technologies: ['.NET Core', 'Angular', 'MongoDB', 'Docker', 'Azure'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Cloud-Native CRM',
      description: 'Customer relationship management system deployed on Azure with Kubernetes',
      technologies: ['ASP.NET', 'Angular', 'Azure SQL', 'Kubernetes', 'Redis'],
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Live data visualization dashboard with SignalR and modern web technologies',
      technologies: ['SignalR', 'Angular', 'Chart.js', 'Azure', 'SQL Server'],
      demoUrl: '#',
      githubUrl: '#'
    }
  ];
}