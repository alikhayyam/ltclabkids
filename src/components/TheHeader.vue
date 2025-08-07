<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo">
        <img src="/Pictures/LTC LOGO.png" alt="LTC Logo" class="logo-image">
      </div>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#features" class="nav-link">Features</a>
        <a href="#pricing" class="nav-link">Pricing</a>
        <a href="#contact" class="nav-link">Contact Us</a>
      </nav>

      <!-- Right Side - Buttons and Profile -->
      <div class="header-right">
        <button class="btn btn-signin">Sign In</button>
        <button class="btn btn-signup">Sign Up</button>
        <div class="profile-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  z-index: 1000;
  transition: all 0.3s ease;
  padding: 1rem 0;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-image {
  height: 40px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: #374151;
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: #038cb2;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #038cb2;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-signin {
  background: transparent;
  color: #374151;
  border: 2px solid transparent;
}

.btn-signin:hover {
  color: #038cb2;
  border-color: #038cb2;
}

.btn-signup {
  background: linear-gradient(135deg, #038cb2, #163382);
  color: white;
}

.btn-signup:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(3, 140, 178, 0.3);
}

.profile-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #6b7280;
}

.profile-icon:hover {
  background: #e5e7eb;
  color: #374151;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
  
  .header-container {
    padding: 0 1rem;
  }
  
  .btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
