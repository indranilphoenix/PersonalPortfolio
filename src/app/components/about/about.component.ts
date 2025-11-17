import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      <div class="container">
        <!-- Header Section -->
        <section class="about-header">
          <div class="about-content">
            <div class="about-text">
              <h1 class="page-title">About Me</h1>
              <h2 class="subtitle">Passionate .NET Developer & Cloud Enthusiast</h2>
              <p class="intro">
                With {{yearsOfExperience}}+ years of experience in software development, I specialize in creating 
                scalable web applications using .NET technologies, modern frontend frameworks, and cloud platforms. 
                I'm passionate about clean code, best practices, and staying current with emerging technologies.
              </p>
            </div>
            <div class="about-image">
              <div class="image-container">
                <div class="image-placeholder">
                  <i class="fas fa-user"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Experience Timeline -->
        <section class="experience">
          <h2 class="section-title">Professional Experience</h2>
          <div class="timeline">
            <div class="timeline-item" *ngFor="let exp of experience">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <div class="timeline-header">
                  <h3>{{exp.position}}</h3>
                  <span class="company">{{exp.company}}</span>
                  <span class="duration">{{exp.duration}}</span>
                </div>
                <p>{{exp.description}}</p>
                <div class="technologies">
                  <span class="tech-tag" *ngFor="let tech of exp.technologies">{{tech}}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Skills Section -->
        <section class="skills">
          <h2 class="section-title">Technical Skills</h2>
          <div class="skills-categories">
            <div class="skill-category" *ngFor="let category of skillCategories">
              <h3>{{category.name}}</h3>
              <div class="skills-list">
                <div class="skill-item" *ngFor="let skill of category.skills">
                  <div class="skill-header">
                    <span>{{skill.name}}</span>
                    <span class="skill-level">{{skill.level}}%</span>
                  </div>
                  <div class="skill-bar">
                    <div class="skill-progress" [style.width.%]="skill.level"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Certifications -->
        <section class="certifications">
          <h2 class="section-title">Certifications & Education</h2>
          <div class="certifications-grid">
            <div class="cert-card" *ngFor="let cert of certifications">
              <div class="cert-icon">
                <i [class]="cert.icon"></i>
              </div>
              <div class="cert-content">
                <h3>{{cert.title}}</h3>
                <p>{{cert.issuer}}</p>
                <span class="cert-date">{{cert.date}}</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Personal Interests -->
        <section class="interests">
          <h2 class="section-title">When I'm Not Coding</h2>
          <div class="interests-grid">
            <div class="interest-item" *ngFor="let interest of interests">
              <i [class]="interest.icon"></i>
              <span>{{interest.name}}</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  yearsOfExperience = 5; // Update with your experience

  experience = [
    {
      position: 'Senior .NET Developer',
      company: 'Your Current Company',
      duration: '2022 - Present',
      description: 'Leading development of cloud-native applications using .NET Core, Angular, and Azure services. Implementing CI/CD pipelines and mentoring junior developers.',
      technologies: ['.NET Core', 'Angular', 'Azure', 'Docker', 'Kubernetes']
    },
    {
      position: '.NET Developer',
      company: 'Previous Company',
      duration: '2020 - 2022',
      description: 'Developed scalable web applications and RESTful APIs. Worked with cross-functional teams to deliver high-quality software solutions.',
      technologies: ['ASP.NET', 'JavaScript', 'SQL Server', 'MongoDB', 'Git']
    },
    {
      position: 'Junior Software Developer',
      company: 'First Company',
      duration: '2019 - 2020',
      description: 'Started career building web applications and learning best practices in software development. Contributed to various projects and gained expertise in full-stack development.',
      technologies: ['C#', 'HTML/CSS', 'JavaScript', 'SQL']
    }
  ];

  skillCategories = [
    {
      name: 'Backend Development',
      skills: [
        { name: '.NET Core', level: 90 },
        { name: 'ASP.NET', level: 85 },
        { name: 'C#', level: 90 },
        { name: 'Web API', level: 85 }
      ]
    },
    {
      name: 'Frontend Development',
      skills: [
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 80 }
      ]
    },
    {
      name: 'Cloud & DevOps',
      skills: [
        { name: 'Azure', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Kubernetes', level: 70 },
        { name: 'CI/CD', level: 75 }
      ]
    },
    {
      name: 'Databases',
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Entity Framework', level: 85 }
      ]
    }
  ];

  certifications = [
    {
      title: 'Azure Fundamentals',
      issuer: 'Microsoft',
      date: '2023',
      icon: 'fas fa-cloud'
    },
    {
      title: 'Microsoft Certified: Azure Developer',
      issuer: 'Microsoft',
      date: '2023',
      icon: 'fab fa-microsoft'
    },
    {
      title: 'Bachelor of Computer Science',
      issuer: 'Your University',
      date: '2019',
      icon: 'fas fa-graduation-cap'
    }
  ];

  interests = [
    { name: 'Open Source', icon: 'fab fa-github' },
    { name: 'Tech Blogging', icon: 'fas fa-blog' },
    { name: 'Photography', icon: 'fas fa-camera' },
    { name: 'Hiking', icon: 'fas fa-mountain' },
    { name: 'Gaming', icon: 'fas fa-gamepad' },
    { name: 'Music', icon: 'fas fa-music' }
  ];
}