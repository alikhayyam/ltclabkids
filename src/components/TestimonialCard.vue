<template>
  <div class="testimonial-card">
    <div class="testimonial-content">
      <div class="quote-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.017 21V13.609C14.017 12.172 14.017 11.453 14.269 10.879C14.516 10.322 14.922 9.916 15.479 9.669C16.053 9.417 16.772 9.417 18.209 9.417H21V21H14.017Z" fill="currentColor" opacity="0.1"/>
          <path d="M2.791 21V13.609C2.791 12.172 2.791 11.453 3.043 10.879C3.29 10.322 3.696 9.916 4.253 9.669C4.827 9.417 5.546 9.417 6.983 9.417H9.791V21H2.791Z" fill="currentColor" opacity="0.1"/>
          <path d="M14.017 21V13.609C14.017 12.172 14.017 11.453 14.269 10.879C14.516 10.322 14.922 9.916 15.479 9.669C16.053 9.417 16.772 9.417 18.209 9.417H21V21H14.017Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.791 21V13.609C2.791 12.172 2.791 11.453 3.043 10.879C3.29 10.322 3.696 9.916 4.253 9.669C4.827 9.417 5.546 9.417 6.983 9.417H9.791V21H2.791Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <p class="testimonial-text">{{ comment }}</p>
    </div>
    <div class="testimonial-author">
      <div class="author-avatar">
        <img v-if="userImage" :src="userImage" :alt="userName" class="avatar-image" />
        <div v-else class="avatar-placeholder">
          {{ userName.charAt(0).toUpperCase() }}
        </div>
      </div>
      <div class="author-info">
        <h4 class="author-name">{{ userName }}</h4>
        <p class="author-title">{{ userTitle }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  userName: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
    default: null
  },
  comment: {
    type: String,
    required: true
  },
  userTitle: {
    type: String,
    default: 'Parent'
  }
})
</script>

<style scoped>
.testimonial-card {
  background: linear-gradient(135deg, #fafafa 0%, #e5e7eb 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.testimonial-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(3, 140, 178, 0.02) 0%, rgba(22, 51, 130, 0.02) 100%);
  pointer-events: none;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.12);
}

.testimonial-content {
  flex-grow: 1;
  position: relative;
  z-index: 1;
}

.quote-icon {
  margin-bottom: 1rem;
  color: #038cb2;
  opacity: 0.6;
}

.testimonial-text {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #374151;
  margin: 0 0 2rem 0;
  font-style: italic;
  position: relative;
  z-index: 1;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 1;
}

.author-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #038cb2, #163382);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 600;
}

.author-info {
  flex-grow: 1;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  margin: 0 0 0.25rem 0;
}

.author-title {
  font-size: 0.9rem;
  color: #6b7280;
  margin: 0;
}

@media (max-width: 768px) {
  .testimonial-card {
    padding: 1.5rem;
  }

  .testimonial-text {
    font-size: 1rem;
  }

  .author-avatar {
    width: 40px;
    height: 40px;
  }

  .author-name {
    font-size: 1rem;
  }

  .author-title {
    font-size: 0.8rem;
  }
}
</style>
