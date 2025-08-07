<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import LearningHub from './components/LearningHub.vue'
import FaqSection from './components/FaqSection.vue'
import CtaSection from './components/CtaSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div id="app">
    <TheHeader />
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <LearningHub />
      <FaqSection />
      <CtaSection />
    </main>
    <TheFooter />
  </div>
</template>

<style>
#app {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

main {
  margin-top: 80px; /* Account for fixed header */
}

/* Global button styles */
.btn {
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-family: inherit;
}

.btn:focus {
  outline: none;
}

/* Global link styles */
a {
  text-decoration: none;
  color: inherit;
}

/* Responsive container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }
}
</style>
