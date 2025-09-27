<script lang="ts">
export default {};
</script>

<template>
  <div class="milestone-container">
    <div class="section-header">
      <h2 class="secondary-m normal f45 center mobile-text">
        <span class="heading-dot">.</span>Journey <span class="mobile-line milestone"></span>
      </h2>
      <p class="primary-l accent f20 center mobile-text section-subtitle">
        From software development to entrepreneurship
      </p>
    </div>

    <div class="modern-timeline">
      <!-- Current Phase -->
      <div class="timeline-item current">
        <div class="timeline-marker current-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content current-content">
          <div class="content-header">
            <span class="timeline-date">Present</span>
            <span class="timeline-category">Current Focus</span>
          </div>
          <h3 class="timeline-title">Finding and solving real world problems</h3>
          <p class="timeline-description">
            Trying to find and solve real world problems.
          </p>
          <div class="timeline-tags">
            <span class="tag">Entrepreneurship</span>
            <span class="tag">Software Development</span>
            <span class="tag">Problem Solving</span>
          </div>
        </div>
      </div>

      <!-- New Professional Role -->
      <div class="timeline-item current">
        <div class="timeline-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content">
          <div class="content-header">
            <span class="timeline-date">March 2025</span>
            <span class="timeline-category">Professional</span>
          </div>
          <h3 class="timeline-title">Lead Software Developer at Werkdigital</h3>
          <p class="timeline-description">
            Starting a new role as Lead Software Developer at Werkdigital. 
            I'm excited to continue my journey in software development and to take on more responsibilities.
          </p>
          <div class="timeline-tags">
            <span class="tag">Lead Software Developer</span>
            <span class="tag">Software Development</span>
          </div>
        </div>
      </div>

      <!-- New Professional Role -->
      <div class="timeline-item current">
        <div class="timeline-marker current-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content">
          <div class="content-header">
            <span class="timeline-date">March 2025</span>
            <span class="timeline-category">Professional</span>
          </div>
          <h3 class="timeline-title">AI Innovation Specialist at Werkdigital</h3>
          <p class="timeline-description">
            Starting a new role as AI Innovation Specialist at Werkdigital. 
            I'm excited to continue my journey in AI innovation for internal and external use.
          </p>
          <div class="timeline-tags">
            <span class="tag">AI Innovation Specialist</span>
            <span class="tag">Software Development</span>
          </div>
        </div>
      </div>

      <!-- Professional Role -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content">
          <div class="content-header">
            <span class="timeline-date">Aug 2022</span>
            <span class="timeline-category">Professional</span>
          </div>
          <h3 class="timeline-title">Software Developer at Werkdigital</h3>
          <p class="timeline-description">
            Specialized in .NET, Angular, and React Native development. Working on enterprise-level applications 
            and contributing to scalable software solutions.
          </p>
          <div class="timeline-tags">
            <span class="tag">.NET</span>
            <span class="tag">Angular</span>
            <span class="tag">React Native</span>
          </div>
        </div>
      </div>

      <!-- Key Projects -->
      <div class="timeline-item project-item">
        <div class="timeline-marker project-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content project-content">
          <div class="content-header">
            <span class="timeline-date">Jan 2022</span>
            <span class="timeline-category">Project</span>
          </div>
          <h3 class="timeline-title">Customer Map Application</h3>
          <p class="timeline-description">
            Developed a comprehensive field service planning application with advanced filtering capabilities 
            and customer data management features. This project was developed for a customer of Netzhero.
          </p>
          <div class="timeline-tags">
            <span class="tag">Web Application</span>
            <span class="tag">Data Management</span>
            <span class="tag">User Experience</span>
          </div>
        </div>
      </div>

      <!-- Education & Certification -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content">
          <div class="content-header">
            <span class="timeline-date">Jan 2022</span>
            <span class="timeline-category">Education</span>
          </div>
          <h3 class="timeline-title">Certified Web Developer</h3>
          <p class="timeline-description">
            Completed advanced training with distinction (Grade: 1.2) and earned the professional qualification 
            "Geprüfter Web-Entwickler" (Certified Web Developer).
          </p>
          <div class="timeline-tags">
            <span class="tag">Certification</span>
            <span class="tag">Web Development</span>
            <span class="tag">Professional Qualification</span>
          </div>
        </div>
      </div>

      <!-- Business Venture -->
      <div class="timeline-item project-item">
        <div class="timeline-marker project-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content project-content">
          <div class="content-header">
            <span class="timeline-date">Dec 2021</span>
            <span class="timeline-category">Business</span>
          </div>
          <h3 class="timeline-title">Produktfinder Platform</h3>
          <p class="timeline-description">
            Created an innovative product calculator with white-label functionality, enabling wholesalers 
            to embed customized solutions on their websites. This project was developed for a customer of Netzhero.
          </p>
          <div class="timeline-tags">
            <span class="tag">SaaS Platform</span>
            <span class="tag">White Label</span>
            <span class="tag">B2B Solution</span>
          </div>
        </div>
      </div>

      <!-- Entrepreneurship Start -->
      <div class="timeline-item">
        <div class="timeline-marker">
          <div class="marker-inner"></div>
        </div>
        <div class="timeline-content">
          <div class="content-header">
            <span class="timeline-date">Jan 2019</span>
            <span class="timeline-category">Entrepreneurship</span>
          </div>
          <h3 class="timeline-title">Founded Netzhero</h3>
          <p class="timeline-description">
            Launched Netzhero as a side venture to pursue my passion for software development and 
            explore entrepreneurial opportunities in the tech space.
          </p>
          <div class="timeline-tags">
            <span class="tag">Founder</span>
            <span class="tag">Startup</span>
            <span class="tag">Innovation</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.milestone-container {
  margin: 300px 0;
}

.section-header {
  margin-bottom: 80px;
}

.section-subtitle {
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Modern Timeline Styles */
.modern-timeline {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
}

.modern-timeline::before {
  content: '';
  position: absolute;
  left: 50px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, #ffb800, #ffb80040);
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  margin-bottom: 60px;
  display: flex;
  align-items: flex-start;
}

.timeline-item.current {
  margin-bottom: 80px;
}

.timeline-marker {
  position: absolute;
  left: 30px;
  top: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1d303b;
  border: 3px solid #616a77;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
}

.timeline-marker:hover {
  transform: scale(1.1);
  border-color: #ffb800;
}

.current-marker {
  border-color: #ffb800;
  background: #ffb80020;
  box-shadow: 0 0 20px #ffb80040;
}

.project-marker {
  border-color: #ffb800;
  background: #ffb80020;
}

.marker-inner {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ffb800;
  transition: all 0.3s ease;
}

.current-marker .marker-inner {
  background: #ffb800;
  box-shadow: 0 0 10px #ffb800;
}

.project-marker .marker-inner {
  background: #ffb800;
}

.timeline-content {
  margin-left: 100px;
  background: #283446;
  border-radius: 16px;
  padding: 30px;
  border: 1px solid #3a4a5c;
  transition: all 0.3s ease;
  position: relative;
  flex: 1;
}

.timeline-content:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border-color: #ffb80040;
}

.current-content {
  border-color: #ffb800;
  background: linear-gradient(135deg, #283446, #2a3a4a);
  box-shadow: 0 0 30px #ffb80020;
}

.project-content {
  border-color: #ffb80040;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.timeline-date {
  color: #ffb800;
  font-family: secondary-m;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.timeline-category {
  background: #ffb80020;
  color: #ffb800;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-family: secondary-m;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.timeline-title {
  color: #ffffff;
  font-family: secondary-m;
  font-size: 24px;
  margin-bottom: 15px;
  line-height: 1.3;
}

.timeline-description {
  color: #c6c8cd;
  font-family: primary-l;
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.timeline-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.tag {
  background: #1d303b;
  color: #c6c8cd;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-family: secondary-m;
  border: 1px solid #3a4a5c;
  transition: all 0.3s ease;
}

.tag:hover {
  background: #ffb80020;
  color: #ffb800;
  border-color: #ffb80040;
}

.project-link {
  color: #ffb800;
  text-decoration: none;
  font-family: secondary-m;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.project-link:hover {
  color: #ffffff;
  text-shadow: 0 0 10px #ffb800;
}

/* Mobile Responsive */
@media screen and (max-width: 768px) {
  .milestone-container {
    margin: 150px 0;
  }

  .section-header {
    margin-bottom: 60px;
  }

  .modern-timeline {
    padding: 0 20px;
    max-width: 100%;
  }

  .modern-timeline::before {
    left: 30px;
  }

  .timeline-marker {
    left: 10px;
    width: 40px;
    height: 40px;
  }

  .timeline-content {
    margin-left: 80px;
    padding: 20px;
    margin-right: 0;
  }

  .timeline-title {
    font-size: 20px;
  }

  .timeline-description {
    font-size: 14px;
  }

  .content-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .timeline-tags {
    gap: 6px;
  }

  .tag {
    font-size: 11px;
    padding: 4px 8px;
  }
}

@media screen and (max-width: 485px) {
  .modern-timeline {
    padding: 0 15px;
  }

  /* Hide timeline line and markers on very small screens */
  .modern-timeline::before {
    display: none;
  }

  .timeline-marker {
    display: none;
  }

  .timeline-content {
    margin-left: 0;
    padding: 20px;
    margin-right: 0;
    margin-bottom: 30px;
    border-left: 3px solid #ffb800;
  }

  .timeline-title {
    font-size: 18px;
  }

  .timeline-description {
    font-size: 13px;
  }

  .timeline-item {
    margin-bottom: 40px;
  }
}
</style>