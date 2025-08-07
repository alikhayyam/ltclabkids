<template>
  <section class="features-section">
    <!-- Background decorative puzzle pieces -->
    <div class="puzzle-background">
      <svg class="puzzle-piece puzzle-1" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 20C20 8.95431 28.9543 0 40 0C51.0457 0 60 8.95431 60 20C60 31.0457 51.0457 40 40 40C28.9543 40 20 31.0457 20 20Z" fill="#E0F2FE" opacity="0.3"/>
        <path d="M40 40C51.0457 40 60 48.9543 60 60C60 71.0457 51.0457 80 40 80C28.9543 80 20 71.0457 20 60C20 48.9543 28.9543 40 40 40Z" fill="#FEF3C7" opacity="0.3"/>
      </svg>
      <svg class="puzzle-piece puzzle-2" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 15C15 6.71573 21.7157 0 30 0C38.2843 0 45 6.71573 45 15C45 23.2843 38.2843 30 30 30C21.7157 30 15 23.2843 15 15Z" fill="#D1FAE5" opacity="0.3"/>
        <path d="M30 30C38.2843 30 45 37.7157 45 46C45 54.2843 38.2843 61 30 61C21.7157 61 15 54.2843 15 46C15 37.7157 21.7157 30 30 30Z" fill="#E0D6FF" opacity="0.3"/>
      </svg>
      <svg class="puzzle-piece puzzle-3" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 25C25 11.1929 36.1929 0 50 0C63.8071 0 75 11.1929 75 25C75 38.8071 63.8071 50 50 50C36.1929 50 25 38.8071 25 25Z" fill="#FFE4E6" opacity="0.3"/>
        <path d="M50 50C63.8071 50 75 61.1929 75 75C75 88.8071 63.8071 100 50 100C36.1929 100 25 88.8071 25 75C25 61.1929 36.1929 50 50 50Z" fill="#FEF3C7" opacity="0.3"/>
      </svg>
    </div>

    <div class="features-container">
      <div class="features-header">
        <h2 class="features-title">Exciting Features to Make Learning Fun!</h2>
        <p class="features-subtitle">Discover our innovative tools designed to engage and educate your child</p>
      </div>

      <div class="features-grid">
        <FeatureCard 
          backgroundColor="#ffe6f0"
          title="Interactive Stories & E-books"
          description="Engage your child with captivating stories and interactive e-books that bring learning to life."
        >
          <template #icon>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="currentColor" opacity="0.1"/>
              <path d="M12 8H36C37.1046 8 38 8.89543 38 10V38C38 39.1046 37.1046 40 36 40H12C10.8954 40 10 39.1046 10 38V10C10 8.89543 10.8954 8 12 8Z" stroke="currentColor" stroke-width="2"/>
              <path d="M16 16H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M16 22H28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M16 28H30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M16 34H26" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard 
          backgroundColor="#e6f7ff"
          title="Fun Quiz"
          description="Test knowledge with interactive quizzes that adapt to your child's learning pace and style."
        >
          <template #icon>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="currentColor" opacity="0.1"/>
              <circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/>
              <path d="M18 24L22 28L30 20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 12V16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M24 32V36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M36 24H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              <path d="M16 24H12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard 
          backgroundColor="#f0e6ff"
          title="Creative Activities"
          description="Unleash creativity with hands-on activities, arts, crafts, and imaginative play exercises."
        >
          <template #icon>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="currentColor" opacity="0.1"/>
              <path d="M24 8L28 20H40L30 28L34 40L24 32L14 40L18 28L8 20H20L24 8Z" fill="currentColor"/>
            </svg>
          </template>
        </FeatureCard>

        <FeatureCard 
          backgroundColor="#e6f0ff"
          title="Learn with Games"
          description="Educational games that make learning enjoyable while developing essential skills and knowledge."
        >
          <template #icon>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="currentColor" opacity="0.1"/>
              <rect x="12" y="12" width="24" height="24" rx="4" stroke="currentColor" stroke-width="2"/>
              <circle cx="18" cy="18" r="2" fill="currentColor"/>
              <circle cx="30" cy="18" r="2" fill="currentColor"/>
              <circle cx="18" cy="30" r="2" fill="currentColor"/>
              <circle cx="30" cy="30" r="2" fill="currentColor"/>
              <path d="M24 20V28" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </template>
        </FeatureCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import FeatureCard from './FeatureCard.vue'
</script>

<style scoped>
.features-section {
  padding: 100px 0;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.puzzle-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.puzzle-piece {
  position: absolute;
  animation: float 8s ease-in-out infinite;
}

.puzzle-1 {
  top: 10%;
  left: 5%;
  animation-delay: 0s;
}

.puzzle-2 {
  top: 60%;
  right: 10%;
  animation-delay: 2s;
}

.puzzle-3 {
  bottom: 20%;
  left: 15%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.features-header {
  text-align: center;
  margin-bottom: 4rem;
}

.features-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e293b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.features-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .features-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .features-section {
    padding: 80px 0;
  }

  .features-title {
    font-size: 2rem;
  }

  .features-subtitle {
    font-size: 1.1rem;
  }

  .features-container {
    padding: 0 1rem;
  }

  .features-grid {
    gap: 1rem;
  }
}
</style>
