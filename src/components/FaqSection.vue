<template>
  <section class="faq-section">
    <div class="faq-container">
      <div class="faq-header">
        <h2 class="faq-title">Have Questions? We've Got Answers!</h2>
        <p class="faq-subtitle">Frequently Asked Questions</p>
      </div>

      <div class="faq-content">
        <div class="faq-list">
          <FaqItem
            v-for="(faq, index) in faqs"
            :key="index"
            :question="faq.question"
            :answer="faq.answer"
          />
        </div>
      </div>

      <div class="faq-footer">
        <p class="faq-footer-text">Still have questions? We're here to help!</p>
        <button class="btn btn-contact">Contact Support</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import FaqItem from './FaqItem.vue'

const faqs = [
  {
    question: "What age range is KIDO designed for?",
    answer: "KIDO is designed for children aged 3-10 years old. Our content is carefully curated to match different developmental stages and learning abilities within this age range."
  },
  {
    question: "How much does KIDO cost?",
    answer: "We offer flexible pricing plans starting from $9.99/month. We also provide a free trial so you can explore our platform before committing. Check our pricing page for detailed information."
  },
  {
    question: "Can I track my child's progress?",
    answer: "Yes! Our platform includes comprehensive progress tracking. Parents can monitor their child's learning journey, view completed activities, and see areas where they might need additional support."
  },
  {
    question: "Is KIDO safe for children?",
    answer: "Absolutely. We prioritize child safety with age-appropriate content, no external links, and strict privacy controls. All content is reviewed by educational experts before being made available."
  },
  {
    question: "Can multiple children use the same account?",
    answer: "Yes, you can create separate profiles for multiple children under one parent account. Each child will have their own personalized learning experience and progress tracking."
  },
  {
    question: "What devices are supported?",
    answer: "KIDO works on tablets, smartphones, and computers. We recommend using a tablet for the best experience, but our platform is fully responsive and works great on any device."
  }
]
</script>

<style scoped>
.faq-section {
  padding: 100px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.faq-header {
  text-align: center;
  margin-bottom: 4rem;
}

.faq-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e293b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.faq-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  margin: 0;
}

.faq-content {
  margin-bottom: 3rem;
}

.faq-list {
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  padding: 0 2rem;
}

.faq-footer {
  text-align: center;
}

.faq-footer-text {
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 1.5rem;
}

.btn-contact {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
}

.btn-contact:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

@media (max-width: 768px) {
  .faq-section {
    padding: 80px 0;
  }

  .faq-title {
    font-size: 2rem;
  }

  .faq-subtitle {
    font-size: 1.1rem;
  }

  .faq-container {
    padding: 0 1rem;
  }

  .faq-list {
    padding: 0 1rem;
  }

  .faq-footer-text {
    font-size: 1rem;
  }

  .btn-contact {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
