<template>
  <section class="learning-hub-section">
    <div class="learning-hub-container">
      <div class="learning-hub-header">
        <h2 class="learning-hub-title">Explore Fun & Educational Insights</h2>
        <p class="learning-hub-subtitle">Discover tips, activities, and educational content to support your child's learning journey</p>
      </div>

      <div class="blog-grid">
        <article v-for="(post, index) in blogPosts" :key="index" class="blog-card">
          <div class="blog-image">
            <div class="image-placeholder" :style="{ backgroundColor: post.imageColor }">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="12" fill="currentColor" opacity="0.1"/>
                <circle cx="40" cy="30" r="8" fill="currentColor"/>
                <path d="M20 50L30 40L40 50L50 40L60 50" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
          <div class="blog-content">
            <div class="blog-category">{{ post.category }}</div>
            <h3 class="blog-title">{{ post.title }}</h3>
            <p class="blog-excerpt">{{ post.excerpt }}</p>
            <div class="blog-meta">
              <span class="blog-date">{{ post.date }}</span>
              <span class="blog-read-time">{{ post.readTime }} min read</span>
            </div>
          </div>
        </article>
      </div>

      <div class="view-all-container">
        <button class="btn btn-view-all">View All Articles</button>
      </div>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    title: "10 Creative Art Activities for Preschoolers",
    excerpt: "Engage your little ones with these fun and educational art projects that develop fine motor skills and creativity.",
    category: "Activities",
    date: "Dec 15, 2024",
    readTime: 5,
    imageColor: "#FFE4E6"
  },
  {
    title: "Building Reading Skills Through Interactive Stories",
    excerpt: "Learn how interactive storytelling can enhance your child's reading comprehension and vocabulary development.",
    category: "Education",
    date: "Dec 12, 2024",
    readTime: 7,
    imageColor: "#E0F2FE"
  },
  {
    title: "Fun Math Games for Early Learners",
    excerpt: "Transform math learning into an exciting adventure with these engaging games and activities.",
    category: "Learning",
    date: "Dec 10, 2024",
    readTime: 6,
    imageColor: "#FEF3C7"
  },
  {
    title: "Developing Social Skills Through Play",
    excerpt: "Discover how structured play activities can help children develop essential social and emotional skills.",
    category: "Development",
    date: "Dec 8, 2024",
    readTime: 8,
    imageColor: "#D1FAE5"
  }
]
</script>

<style scoped>
.learning-hub-section {
  padding: 100px 0;
  background: #ffffff;
}

.learning-hub-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.learning-hub-header {
  text-align: center;
  margin-bottom: 4rem;
}

.learning-hub-title {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e293b, #475569);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.learning-hub-subtitle {
  font-size: 1.25rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.blog-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
}

.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.blog-image {
  height: 200px;
  overflow: hidden;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #374151;
}

.blog-content {
  padding: 1.5rem;
}

.blog-category {
  display: inline-block;
  background: #f1f5f9;
  color: #475569;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  margin-bottom: 1rem;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.blog-excerpt {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  color: #9ca3af;
}

.blog-date,
.blog-read-time {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.view-all-container {
  text-align: center;
}

.btn-view-all {
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

.btn-view-all:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
}

@media (max-width: 1200px) {
  .blog-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1024px) {
  .blog-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .learning-hub-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .learning-hub-section {
    padding: 80px 0;
  }

  .learning-hub-title {
    font-size: 2rem;
  }

  .learning-hub-subtitle {
    font-size: 1.1rem;
  }

  .learning-hub-container {
    padding: 0 1rem;
  }

  .blog-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .blog-card {
    max-width: 400px;
    margin: 0 auto;
  }

  .btn-view-all {
    padding: 0.875rem 1.5rem;
    font-size: 1rem;
  }
}
</style>
