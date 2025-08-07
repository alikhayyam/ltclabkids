<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="testimonials-header">
        <h2 class="testimonials-title">Hear from Our Happy Users!</h2>
        <p class="testimonials-subtitle">See what parents and children are saying about their learning experience</p>
      </div>

      <div class="testimonials-content">
        <button class="nav-arrow nav-arrow-left" @click="previousSlide" :disabled="currentSlide === 0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="testimonials-slider">
          <div class="testimonials-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
            <div class="testimonial-slide" v-for="(testimonial, index) in testimonials" :key="index">
              <TestimonialCard
                :userName="testimonial.userName"
                :userImage="testimonial.userImage"
                :comment="testimonial.comment"
                :userTitle="testimonial.userTitle"
              />
            </div>
          </div>
        </div>

        <button class="nav-arrow nav-arrow-right" @click="nextSlide" :disabled="currentSlide === testimonials.length - 1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="testimonials-dots">
        <button
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="dot"
          :class="{ active: currentSlide === index }"
          @click="goToSlide(index)"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TestimonialCard from './TestimonialCard.vue'

const currentSlide = ref(0)

const testimonials = [
  {
    userName: "Sarah Johnson",
    userImage: null,
    comment: "My daughter absolutely loves the interactive stories! She's learned so much and actually looks forward to learning time. The platform makes education feel like play.",
    userTitle: "Parent of Emma, Age 6"
  },
  {
    userName: "Michael Chen",
    userImage: null,
    comment: "The quiz feature is brilliant! My son gets excited about testing his knowledge and the adaptive learning keeps him challenged at the right level.",
    userTitle: "Parent of Alex, Age 8"
  },
  {
    userName: "Lisa Rodriguez",
    userImage: null,
    comment: "The creative activities section has unlocked my child's imagination. We spend quality time together doing the crafts and learning new skills.",
    userTitle: "Parent of Sofia, Age 7"
  }
]

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++
  }
}

const previousSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
.testimonials-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #fafafa 0%, #e5e7eb 100%);
}

.testimonials-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.testimonials-header {
  text-align: center;
  margin-bottom: 4rem;
}

.testimonials-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e293b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.testimonials-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.testimonials-content {
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
}

.testimonials-slider {
  flex: 1;
  overflow: hidden;
  border-radius: 20px;
}

.testimonials-track {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  min-width: 100%;
  padding: 0 1rem;
}

.nav-arrow {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: white;
  color: #038cb2;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
}

.nav-arrow:hover:not(:disabled) {
  background: #038cb2;
  color: white;
  transform: scale(1.1);
}

.nav-arrow:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.testimonials-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.dot {
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: #cbd5e1;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot.active {
  background: #038cb2;
  transform: scale(1.2);
}

.dot:hover {
  background: #94a3b8;
}

@media (max-width: 1024px) {
  .testimonials-content {
    gap: 1rem;
  }

  .nav-arrow {
    width: 40px;
    height: 40px;
  }

  .testimonials-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 80px 0;
  }

  .testimonials-title {
    font-size: 2rem;
  }

  .testimonials-subtitle {
    font-size: 1.1rem;
  }

  .testimonials-container {
    padding: 0 1rem;
  }

  .testimonials-content {
    flex-direction: column;
    gap: 1.5rem;
  }

  .nav-arrow {
    width: 45px;
    height: 45px;
  }

  .testimonial-slide {
    padding: 0 0.5rem;
  }
}
</style>
