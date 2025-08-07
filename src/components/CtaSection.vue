<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">Give Your Child the Best Start in Learning</h2>
        <p class="cta-subtitle">Join thousands of parents who are already helping their children learn and grow with KIDO</p>
        
        <div class="cta-form">
          <div class="email-input-group">
            <input 
              type="email" 
              placeholder="Enter your email" 
              class="email-input"
              v-model="email"
              @keyup.enter="handleSubmit"
            />
            <button class="btn btn-cta" @click="handleSubmit">
              Get Started Now
            </button>
          </div>
          <p class="cta-note">No credit card required • Free 7-day trial</p>
        </div>
      </div>

      <!-- Decorative elements -->
      <div class="cta-decoration">
        <div class="decoration-circle circle-1"></div>
        <div class="decoration-circle circle-2"></div>
        <div class="decoration-circle circle-3"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const handleSubmit = () => {
  if (email.value.trim()) {
    // Handle email submission here
    console.log('Email submitted:', email.value)
    alert('Thank you! We\'ll be in touch soon.')
    email.value = ''
  } else {
    alert('Please enter a valid email address.')
  }
}
</script>

<style scoped>
.cta-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #038cb2 0%, #163382 50%, #d20c7f 100%);
  position: relative;
  overflow: hidden;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
}

.cta-content {
  text-align: center;
  color: white;
}

.cta-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.cta-subtitle {
  font-size: 1.25rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  line-height: 1.6;
}

.cta-form {
  max-width: 500px;
  margin: 0 auto;
}

.email-input-group {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  background: white;
  border-radius: 16px;
  padding: 0.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.email-input {
  flex: 1;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
  font-size: 1.1rem;
  outline: none;
  background: transparent;
}

.email-input::placeholder {
  color: #9ca3af;
}

.btn-cta {
  background: linear-gradient(135deg, #d20c7f, #163382);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.cta-note {
  font-size: 0.9rem;
  opacity: 0.8;
  margin: 0;
}

.cta-decoration {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.decoration-circle {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  animation: float 6s ease-in-out infinite;
}

.circle-1 {
  width: 100px;
  height: 100px;
  top: 20%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 60px;
  height: 60px;
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.circle-3 {
  width: 80px;
  height: 80px;
  bottom: 20%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-20px) scale(1.1); }
}

@media (max-width: 768px) {
  .cta-section {
    padding: 80px 0;
  }

  .cta-title {
    font-size: 2.5rem;
  }

  .cta-subtitle {
    font-size: 1.1rem;
  }

  .cta-container {
    padding: 0 1rem;
  }

  .email-input-group {
    flex-direction: column;
    gap: 0.5rem;
  }

  .email-input {
    padding: 0.875rem 1.25rem;
    font-size: 1rem;
  }

  .btn-cta {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .cta-title {
    font-size: 2rem;
  }

  .cta-subtitle {
    font-size: 1rem;
  }
}
</style>
