<template>
  <div class="carousel-container">
    <div class="carousel-slides-container">
      <div class="carousel-slides">
        <div v-for="(slide, index) in slidesToShow" :key="`slide-${currentPage}-${index}`" class="carousel-slide" :style="{ width: `${100 / props.slidesPerPage}%` }">
          <img :src="'_nuxt/assets/img/' + slide.image" :alt="slide.title || `Sninek ${index + 1}`" class="carousel-image"/>
          <div v-if="slide.title" class="carousel-caption">{{ slide.title }}</div>
          <div v-if="slide.message" class="carousel-message">{{ slide.message }}</div>
        </div>
      </div>
    </div>

    <div class="carousel-pagination">
      <button @click="prevPage" class="btn carousel-control" :disabled="currentPage <= 1" v-if="arrows">
        <ArrowLeft />
      </button>
      <div class="carousel-pages">
        <button v-for="page in totalPages" :key="`page-${page}`" @click="goToPage(page)" class="btn carousel-page-button" :class="{ 'active': page === currentPage }" />
      </div>
      <button @click="nextPage" class="btn carousel-control" :disabled="currentPage >= totalPages" v-if="arrows">
        <ArrowRight />
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  slides: {
    type: Array,
    required: true,
    default: []
  },
  slidesPerPage: {
    type: Number,
    default: 1
  },
  autoplay: {
    type: Number,
    default: 0
  },
  arrows: {
    type: Boolean,
    default: true
  }
});
const currentPage = ref(1);
let autoplayInterval = null;

const totalPages = computed(() => {
  return Math.max(1, Math.ceil(props.slides.length / props.slidesPerPage));
});
const slidesToShow = computed(() => {
  const startIndex = (currentPage.value - 1) * props.slidesPerPage;
  return props.slides.slice(startIndex, startIndex + props.slidesPerPage);
});

const clearAutoplayInterval = () => {
  if (autoplayInterval) {
    clearInterval(autoplayInterval);
    autoplayInterval = null;
  }
};

const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  } else {
    currentPage.value = 1;
  }
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

onMounted(() => {
  if (props.autoplay > 0) {
    autoplayInterval = setInterval(() => {
      nextPage();
    }, props.autoplay);
  }
});

onBeforeUnmount(() => {
  clearAutoplayInterval();
});
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  margin: 0 auto 1rem auto;
  position: relative;
}

.carousel-slides-container {
  overflow: hidden;
  margin-bottom: 1rem;
}

.carousel-slides {
  display: flex;
  width: 100%;
}

.carousel-slide {
  flex-shrink: 0;
  padding: 0 0.5rem;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: 288px;
  display: block;
  object-fit: cover;
  border-radius: 8px;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0.5rem;
  right: 0.5rem;
  padding: 0.5rem;
  text-align: center;
}

.carousel-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.carousel-pages {
  display: flex;
  gap: 0.5rem;
}

.carousel-page-button {
  width: 10px;
  height: 10px;
  border-radius: 5px;
  border: 2px solid #F9C45A;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}

.carousel-page-button.active {
  width: 24px;
  background: #794389;
  border-color: #794389;
}

.carousel-control:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>