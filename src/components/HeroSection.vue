<template>
  <section class="hero-section">
    <!-- Background decorative shapes -->
    <div class="hero-shapes">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
    </div>

    <div class="hero-container">
      <!-- Left Column - Content -->
      <div class="hero-content">
        <h1 class="hero-title">
          Learning Made Fun & Engaging!
        </h1>
        <p class="hero-subtitle">
          Our platform is designed to help your child develop the necessary skills while enjoying the process.
        </p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Get Started</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>

      <!-- Right Column - Images -->
      <div class="hero-images">
        <div class="image-container">
          <div class="main-image">
            <div class="placeholder-image">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" rx="20" fill="#E0F2FE"/>
                <circle cx="100" cy="80" r="25" fill="#FFB6C1"/>
                <rect x="60" y="120" width="80" height="40" rx="20" fill="#FFB6C1"/>
                <circle cx="70" cy="70" r="5" fill="#2563EB"/>
                <circle cx="130" cy="70" r="5" fill="#2563EB"/>
                <path d="M85 95 Q100 105 115 95" stroke="#2563EB" stroke-width="3" fill="none"/>
              </svg>
            </div>
          </div>
          <div class="floating-image floating-1">
            <div class="placeholder-image small">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="15" fill="#FEF3C7"/>
                <circle cx="50" cy="40" r="15" fill="#F59E0B"/>
                <rect x="30" y="60" width="40" height="20" rx="10" fill="#F59E0B"/>
              </svg>
            </div>
          </div>
          <div class="floating-image floating-2">
            <div class="placeholder-image small">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="15" fill="#D1FAE5"/>
                <polygon points="50,20 70,60 30,60" fill="#10B981"/>
                <rect x="35" y="65" width="30" height="15" rx="7.5" fill="#10B981"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 120px 0 80px;
  background: linear-gradient(135deg, #fafafa 0%, #e5e7eb 100%);
}

.hero-shapes {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
}

.shape {
  position: absolute;
  border-radius: 50%;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #d20c7f, #e91e63);
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  background: linear-gradient(45deg, #038cb2, #163382);
  top: 60%;
  right: 15%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background: linear-gradient(45deg, #038cb2, #d20c7f);
  top: 20%;
  right: 30%;
  animation-delay: 4s;
}

.shape-4 {
  width: 120px;
  height: 120px;
  background: linear-gradient(45deg, #d20c7f, #163382);
  bottom: 20%;
  left: 20%;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.hero-content {
  max-width: 500px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #1e293b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 2.5rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #038cb2, #163382);
  color: white;
  box-shadow: 0 4px 15px rgba(3, 140, 178, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(3, 140, 178, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #038cb2;
  border: 2px solid #038cb2;
}

.btn-secondary:hover {
  background: #038cb2;
  color: white;
  transform: translateY(-2px);
}

.hero-images {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  width: 400px;
  height: 400px;
}

.main-image {
  position: relative;
  z-index: 2;
}

.placeholder-image {
  width: 300px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.placeholder-image:hover {
  transform: scale(1.05);
}

.placeholder-image.small {
  width: 120px;
  height: 120px;
  border-radius: 15px;
}

.floating-image {
  position: absolute;
  z-index: 1;
}

.floating-1 {
  top: 10%;
  right: 10%;
  animation: float 4s ease-in-out infinite;
}

.floating-2 {
  bottom: 10%;
  left: 10%;
  animation: float 4s ease-in-out infinite reverse;
}

@media (max-width: 1024px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 3rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-buttons {
    justify-content: center;
  }

  .image-container {
    width: 300px;
    height: 300px;
  }

  .placeholder-image {
    width: 200px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .hero-section {
    padding: 100px 0 60px;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .btn {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }

  .image-container {
    width: 250px;
    height: 250px;
  }

  .placeholder-image {
    width: 150px;
    height: 150px;
  }

  .placeholder-image.small {
    width: 80px;
    height: 80px;
  }
}
</style>
