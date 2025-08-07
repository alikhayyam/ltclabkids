<template>
  <div class="feature-card" :style="{ backgroundColor: backgroundColor }">
    <div class="feature-icon">
      <slot name="icon">
        <!-- Default icon if no slot is provided -->
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="48" height="48" rx="12" fill="currentColor" opacity="0.1"/>
          <path d="M24 12L30 18L24 24L18 18L24 12Z" fill="currentColor"/>
          <path d="M12 24L18 30L24 24L18 18L12 24Z" fill="currentColor"/>
          <path d="M24 36L30 30L24 24L18 30L24 36Z" fill="currentColor"/>
          <path d="M36 24L30 18L24 24L30 30L36 24Z" fill="currentColor"/>
        </svg>
      </slot>
    </div>
    <h3 class="feature-title">{{ title }}</h3>
    <p class="feature-description">
      <slot name="description">
        {{ description }}
      </slot>
    </p>
  </div>
</template>

<script setup>
defineProps({
  backgroundColor: {
    type: String,
    default: '#fafafa'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'Discover amazing features designed to make learning fun and engaging for your child.'
  }
})
</script>

<style scoped>
.feature-card {
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  pointer-events: none;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.feature-icon {
  margin-bottom: 1.5rem;
  color: #038cb2;
  position: relative;
  z-index: 1;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #1f2937;
  position: relative;
  z-index: 1;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #6b7280;
  margin: 0;
  position: relative;
  z-index: 1;
  flex-grow: 1;
}

@media (max-width: 768px) {
  .feature-card {
    padding: 1.5rem;
  }

  .feature-title {
    font-size: 1.25rem;
  }

  .feature-description {
    font-size: 0.9rem;
  }
}
</style>
