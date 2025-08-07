<template>
  <div class="faq-item" :class="{ 'faq-item-open': isOpen }">
    <button class="faq-question" @click="toggleOpen">
      <span class="question-text">{{ question }}</span>
      <span class="toggle-icon">
        <svg v-if="!isOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </button>
    <div class="faq-answer" :class="{ 'faq-answer-open': isOpen }">
      <div class="answer-content">
        {{ answer }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.faq-item {
  border-bottom: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-question {
  width: 100%;
  padding: 1.5rem 0;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
}

.faq-question:hover {
  color: #2563eb;
}

.question-text {
  font-size: 1.1rem;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.5;
  flex: 1;
  padding-right: 1rem;
}

.toggle-icon {
  color: #6b7280;
  transition: all 0.3s ease;
  flex-shrink: 0;
}

.faq-item-open .toggle-icon {
  color: #2563eb;
  transform: rotate(45deg);
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
}

.faq-answer-open {
  max-height: 200px;
  padding-bottom: 1.5rem;
}

.answer-content {
  font-size: 1rem;
  line-height: 1.6;
  color: #6b7280;
  padding-left: 0;
  transition: padding-left 0.3s ease;
}

.faq-answer-open .answer-content {
  padding-left: 0;
}

@media (max-width: 768px) {
  .faq-question {
    padding: 1.25rem 0;
  }

  .question-text {
    font-size: 1rem;
  }

  .answer-content {
    font-size: 0.95rem;
  }

  .faq-answer-open {
    padding-bottom: 1.25rem;
  }
}
</style>
