import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl: string;
  demoUrl: string;
  githubUrl: string;
  category: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <div class="container">
        <!-- Header -->
        <section class="projects-header">
          <h1 class="page-title">My Projects</h1>
          <p class="page-subtitle">
            A collection of projects showcasing my expertise in .NET, Angular, cloud technologies, and modern development practices.
          </p>
        </section>

        <!-- Filter Buttons -->
        <section class="projects-filters">
          <div class="filter-buttons">
            <button 
              class="filter-btn" 
              [class.active]="selectedCategory === 'all'"
              (click)="filterProjects('all')">
              All Projects
            </button>
            <button 
              class="filter-btn" 
              [class.active]="selectedCategory === category"
              (click)="filterProjects(category)"
              *ngFor="let category of categories">
              {{category}}
            </button>
          </div>
        </section>

        <!-- Projects Grid -->
        <section class="projects-grid">
          <div class="project-card" *ngFor="let project of filteredProjects" [attr.data-category]="project.category">
            <div class="project-image">
              <div class="project-overlay">
                <div class="project-actions">
                  <a [href]="project.demoUrl" target="_blank" class="project-btn" *ngIf="project.demoUrl !== '#'">
                    <i class="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                  <a [href]="project.githubUrl" target="_blank" class="project-btn">
                    <i class="fab fa-github"></i>
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
              <div class="project-image-placeholder">
                <i class="fas fa-code"></i>
              </div>
            </div>
            
            <div class="project-content">
              <div class="project-category">{{project.category}}</div>
              <h3 class="project-title">{{project.title}}</h3>
              <p class="project-description">{{project.description}}</p>
              
              <div class="project-details">
                <div class="project-tech">
                  <span class="tech-tag" *ngFor="let tech of project.technologies">{{tech}}</span>
                </div>
                
                <div class="project-links">
                  <a [href]="project.demoUrl" target="_blank" class="project-link" *ngIf="project.demoUrl !== '#'">
                    <i class="fas fa-external-link-alt"></i>
                  </a>
                  <a [href]="project.githubUrl" target="_blank" class="project-link">
                    <i class="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- GitHub CTA -->
        <section class="github-cta">
          <div class="cta-content">
            <h2>Want to see more?</h2>
            <p>Check out my GitHub profile for additional projects and contributions to open source.</p>
            <a href="https://github.com/yourusername" target="_blank" class="btn btn-primary">
              <i class="fab fa-github"></i>
              Visit My GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  selectedCategory = 'all';
  categories = ['Web App', 'API', 'Cloud', 'Mobile'];
  
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Microservices Platform',
      description: 'Scalable e-commerce platform built with .NET microservices architecture, featuring product catalog, order management, and payment processing.',
      longDescription: 'A comprehensive e-commerce solution built using microservices architecture with .NET Core, featuring separate services for user management, product catalog, order processing, and payments. The frontend is built with Angular and the entire system is containerized with Docker and deployed on Azure Kubernetes Service.',
      technologies: ['.NET Core', 'Angular', 'MongoDB', 'Docker', 'Kubernetes', 'Azure', 'Redis'],
      imageUrl: '',
      demoUrl: '#',
      githubUrl: '#',
      category: 'Web App',
      featured: true
    },
    {
      id: 2,
      title: 'RESTful API with Authentication',
      description: 'Secure RESTful API built with ASP.NET Core featuring JWT authentication, role-based authorization, and comprehensive documentation.',
      longDescription: 'A robust API solution implementing modern security practices including JWT tokens, refresh tokens, role-based access control, and rate limiting. Features comprehensive Swagger documentation and follows REST principles.',
      technologies: ['ASP.NET Core', 'JWT', 'Entity Framework', 'SQL Server', 'Swagger', 'AutoMapper'],
      imageUrl: '',
      demoUrl: '#',
      githubUrl: '#',
      category: 'API',
      featured: true
    },
    {
      id: 3,
      title: 'Cloud-Native CRM System',
      description: 'Customer relationship management system deployed on Azure with auto-scaling, monitoring, and CI/CD pipelines.',
      longDescription: 'A cloud-native CRM application leveraging Azure services including App Service, Azure SQL Database, Application Insights for monitoring, and Azure DevOps for CI/CD. Features real-time notifications using SignalR.',
      technologies: ['ASP.NET Core', 'Angular', 'Azure SQL', 'Azure App Service', 'SignalR', 'Application Insights'],
      imageUrl: '',
      demoUrl: '#',
      githubUrl: '#',
      category: 'Cloud',
      featured: true
    },
    {
      id: 4,
      title: 'Real-time Chat Application',
      description: 'Real-time messaging application using SignalR, with group chats, file sharing, and message history.',
      longDescription: 'A modern chat application built with SignalR for real-time communication, featuring group chats, private messaging, file uploads, emoji support, and message persistence using MongoDB.',
      technologies: ['SignalR', 'Angular', '.NET Core', 'MongoDB', 'Azure', 'TypeScript'],
      imageUrl: '',
      demoUrl: '#',
      githubUrl: '#',
      category: 'Web App',
      featured: false
    },
    {
      id: 5,
      title: 'Task Management API',
      description: 'GraphQL API for task management with advanced querying capabilities, built with .NET and Hot Chocolate.',
      longDescription: 'A GraphQL API providing flexible querying capabilities for task management, built with Hot Chocolate and .NET Core. Features real-time subscriptions, custom scalar types, and comprehensive error handling.',
      technologies: ['GraphQL', '.NET Core', 'Hot Chocolate', 'Entity Framework', 'PostgreSQL'],
      imageUrl: '',
      demoUrl: '#',
      githubUrl: '#',
      category: 'API',
      featured: false
    },
    {
      id: 6,
      title: 'Azure Functions Serverless App',
      description: 'Serverless application using Azure Functions for background processing and API endpoints.',
      longDescription: 'A serverless solution leveraging Azure Functions for various background tasks including file processing, email notifications, and data synchronization. Integrates with Azure Storage, Cosmos DB, and Service Bus.',
      technologies: ['Azure Functions', 'C#', 'Cosmos DB', 'Azure Storage', 'Service Bus'],
      imageUrl: '',
      demoUrl: '#',
      githubUrl: '#',
      category: 'Cloud',
      featured: false
    }
  ];

  filteredProjects: Project[] = this.projects;

  ngOnInit() {
    this.filteredProjects = this.projects;
  }

  filterProjects(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter(project => project.category === category);
    }
  }
}