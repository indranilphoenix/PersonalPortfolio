import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <div class="container">
        <!-- Header -->
        <section class="contact-header">
          <h1 class="page-title">Get In Touch</h1>
          <p class="page-subtitle">
            Let's discuss your next project or potential collaboration opportunities.
          </p>
        </section>

        <div class="contact-content">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send Me a Message</h2>
            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  [(ngModel)]="formData.name"
                  required
                  class="form-control">
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  [(ngModel)]="formData.email"
                  required
                  class="form-control">
              </div>

              <div class="form-group">
                <label for="company">Company (Optional)</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  [(ngModel)]="formData.company"
                  class="form-control">
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  [(ngModel)]="formData.subject"
                  required
                  class="form-control">
                  <option value="">Select a subject</option>
                  <option value="project">Project Inquiry</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="job">Job Opportunity</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  [(ngModel)]="formData.message"
                  required
                  rows="5"
                  class="form-control"
                  placeholder="Tell me about your project or how I can help you..."></textarea>
              </div>

              <button 
                type="submit" 
                class="btn btn-primary"
                [disabled]="!contactForm.form.valid || isSubmitting">
                <span *ngIf="!isSubmitting">Send Message</span>
                <span *ngIf="isSubmitting">
                  <i class="fas fa-spinner fa-spin"></i> Sending...
                </span>
              </button>
            </form>

            <div class="form-message" *ngIf="submitMessage">
              <div class="alert" [ngClass]="{'alert-success': submitSuccess, 'alert-error': !submitSuccess}">
                {{submitMessage}}
              </div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="contact-info-section">
            <h2>Contact Information</h2>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-details">
                  <h3>Email</h3>
                  <p>{{contactInfo.email}}</p>
                  <a [href]="'mailto:' + contactInfo.email" class="contact-link">Send Email</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-phone"></i>
                </div>
                <div class="contact-details">
                  <h3>Phone</h3>
                  <p>{{contactInfo.phone}}</p>
                  <a [href]="'tel:' + contactInfo.phone" class="contact-link">Call Now</a>
                </div>
              </div>

              <div class="contact-method">
                <div class="contact-icon">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-details">
                  <h3>Location</h3>
                  <p>{{contactInfo.location}}</p>
                </div>
              </div>
            </div>

            <div class="social-links">
              <h3>Connect With Me</h3>
              <div class="social-buttons">
                <a 
                  [href]="social.url" 
                  target="_blank" 
                  class="social-btn"
                  *ngFor="let social of socialLinks">
                  <i [class]="social.icon"></i>
                  <span>{{social.name}}</span>
                </a>
              </div>
            </div>

            <div class="availability">
              <h3>Availability</h3>
              <div class="availability-status">
                <div class="status-indicator" [ngClass]="{'available': isAvailable, 'busy': !isAvailable}"></div>
                <span>{{availabilityStatus}}</span>
              </div>
              <p>{{availabilityDetails}}</p>
            </div>
          </div>
        </div>

        <!-- FAQ Section -->
        <section class="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item" *ngFor="let faq of faqs">
              <h3>{{faq.question}}</h3>
              <p>{{faq.answer}}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;

  contactInfo = {
    email: 'your.email@example.com',
    phone: '+1 (555) 123-4567',
    location: 'Your City, Country'
  };

  isAvailable = true;
  availabilityStatus = 'Available for new projects';
  availabilityDetails = 'I\'m currently accepting new client projects and collaboration opportunities.';

  socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      url: 'https://linkedin.com/in/yourprofile'
    },
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      url: 'https://github.com/yourusername'
    },
    {
      name: 'Twitter',
      icon: 'fab fa-twitter',
      url: 'https://twitter.com/yourusername'
    },
    {
      name: 'Stack Overflow',
      icon: 'fab fa-stack-overflow',
      url: 'https://stackoverflow.com/users/yourprofile'
    }
  ];

  faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity, but most web applications take 2-6 months to develop from concept to deployment.'
    },
    {
      question: 'Do you work with remote teams?',
      answer: 'Yes, I have extensive experience working with distributed teams and am comfortable with remote collaboration tools and agile methodologies.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in .NET Core, Angular, Azure cloud services, Docker, Kubernetes, and MongoDB, with experience in full-stack development.'
    },
    {
      question: 'Do you provide ongoing maintenance?',
      answer: 'Yes, I offer ongoing support and maintenance packages to ensure your applications stay updated, secure, and performant.'
    },
    {
      question: 'What is your development process?',
      answer: 'I follow agile methodologies with regular client communication, iterative development, code reviews, and thorough testing throughout the project lifecycle.'
    },
    {
      question: 'Do you work on legacy system migrations?',
      answer: 'Absolutely! I have experience modernizing legacy applications and migrating them to current technologies and cloud platforms.'
    }
  ];

  onSubmit() {
    this.isSubmitting = true;
    this.submitMessage = '';

    // Simulate form submission (replace with actual implementation)
    setTimeout(() => {
      this.submitSuccess = true;
      this.submitMessage = 'Thank you for your message! I\'ll get back to you within 24 hours.';
      this.isSubmitting = false;
      
      // Reset form
      this.formData = {
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      };

      // Clear message after 5 seconds
      setTimeout(() => {
        this.submitMessage = '';
      }, 5000);
    }, 2000);
  }
}