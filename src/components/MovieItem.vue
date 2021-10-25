<template>
  <!-- Movie Item -->
  <RouterLink
    :to="`/movie/${movie.imdbID}`"
    :style="{ backgroundImage: `url(${movie.Poster})` }"
    class="movie-item">
    <Loader
      v-if="imageLoading"
      :size="1.5"
      absolute />
    <!-- Movie Item Info -->
    <div class="movie-item__info">
      <div class="movie-item__year">
        {{ movie.Year }}
      </div>
      <div class="movie-item__title">
        {{ movie.Title }}
      </div>
    </div>
    <!-- //Movie Item Info -->
  </RouterLink>
  <!-- //Movie Item -->
</template>

<script>
import Loader from '~/components/Loader';

export default {
  components: {
    Loader
  },
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      imageLoading: true
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const poster = this.movie.Poster;

      if (!poster|| poster === 'N/A') {
        this.imageLoading = false;
      } else {
        await this.$loadImage(poster);
        this.imageLoading = false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$width: 200px;

.movie-item {
  overflow: hidden;
  position: relative;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-size: cover;
  background-color: $gray-400;

  .movie-item__info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 14px;
    background-color: rgba($black, .3);
    backdrop-filter: blur(10px);
    font-size: 14px;
    text-align: center;
    
    .movie-item__year {
      color: $primary;
    }
    .movie-item__title {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: $white;
    }
  }

  &:hover::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 6px solid $primary;
  }
}
</style>