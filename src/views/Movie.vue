<template>
  <!-- Movie -->
  <div class="container">
    <template v-if="loading">
      <!-- Skeletons UI -->
      <div class="skeletons">
        <div class="skeleton skeletons__poster"></div>
        <div class="skeletons__specs">
          <div class="skeleton skeletons__title"></div>
          <div class="skeleton skeletons__spec"></div>
          <div class="skeleton skeletons__plot"></div>
          <div class="skeleton skeletons__etc"></div>
          <div class="skeleton skeletons__etc"></div>
          <div class="skeleton skeletons__etc"></div>
        </div>  
      </div>
      <Loader
        :size="3"
        :z-index="10"
        fixed />
    <!-- //Skeletons UI -->
    </template>
    <!-- Movie Info -->
    <div
      v-else
      class="movie-info">
      <!-- Movie Info - Poster -->
      <div
        :style="{ backgroundImage: `url(${requestDiffSizeImage(movieData.Poster)})` }"
        class="movie-info__poster">
        <Loader
          v-if="imageLoading"
          absolute />
      </div>
      <!-- //Movie Info - Poster -->
      <!-- Movie Info - Specs -->
      <div class="movie-info__specs">
        <div class="movie-info__title">
          <h1>{{ movieData.Title }}</h1>
        </div>
        <div class="movie-info__labels">
          <span>{{ movieData.Released }}</span>
          <span>{{ movieData.Runtime }}</span>
          <span>{{ movieData.Country }}</span>
        </div>
        <div class="movie-info__plot">
          <p>{{ movieData.Plot }}</p>
        </div>
        <div class="movie-info__ratings">
          <h3>Ratings</h3>
          <div class="ratings__wrap">
            <div
              v-for="{ Source: name, Value: score } in movieData.Ratings"
              :key="name"
              :title="name"
              class="rating">
              <img
                :src="`/static/images/${name}.png`"
                :alt="name"
                class="rating__logo" />
              <span class="rating__score">{{ score }}</span>
            </div>
          </div>
        </div>
        <div class="movie-info__actors">
          <h3>Actors</h3>
          <span>{{ movieData.Actors }}</span>
        </div>
        <div class="movie-info__director">
          <h3>Director</h3>
          <span>{{ movieData.Director }}</span>
        </div>
        <div class="movie-info__production">
          <h3>Production</h3>
          <span>{{ movieData.Production }}</span>
        </div>
        <div class="movie-info__genre">
          <h3>Genre</h3>
          <span>{{ movieData.Genre }}</span>
        </div>
      </div>
      <!-- //Movie Info - Specs -->
    </div>
    <!-- //Movie Info -->
  </div>
  <!-- //Movie -->
</template>

<script>
import Loader from '~/components/Loader';

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    };
  },
  computed: {
    movieData() {
      return this.$store.state.movie.movieData;
    },
    loading() {
      return this.$store.state.movie.loading;
    }
  },
  created() {
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    });
  },
  methods: {
    requestDiffSizeImage(url, size = 700) {
      if (!url || url === 'N/A') {
        this.imageLoading = false;
        return '';
      }

      const src = url.replace('SX300', `SX${size}`);

      this.$loadImage(src)
        .then(() => {
          this.imageLoading = false;
        });

      return src;
    }
  }
};
</script>

<style lang="scss" scoped>
$poster-width: 500px;
$xl-poster-width: 400px;
$md-poster-width: 320px;
$poster-margin-right: 70px;
$xl-poster-margin-right: 40px;
$info-margin-top: 20px;
$border-radius: 10px;

.container {
  padding-top: 40px;
}

.skeletons {
  display: flex;

  .skeletons__poster {
    flex-shrink: 0;
    width: $poster-width;
    height: $poster-width * 3 / 2;
    margin-right: $poster-margin-right;
  }
  .skeletons__specs {
    flex-grow: 1;
  }

  .skeleton {
    border-radius: $border-radius;
    background-color: $gray-200;
    
    &.skeletons__title {
      width: 80%;
      height: 70px;
    }
    &.skeletons__spec {
      width: 60%;
      height: 30px;
      margin-top: $info-margin-top;
    }
    &.skeletons__plot {
      width: 100%;
      height: 250px;
      margin-top: $info-margin-top;
    }
    &.skeletons__etc {
      width: 50%;
      height: 50px;
      margin-top: $info-margin-top;
    }
  }

  @include media-breakpoint-down(xl) {
    .skeletons__poster {
      width: $xl-poster-width;
      height: $xl-poster-width * 3 / 2;
      margin: $xl-poster-margin-right;
    }
  }
  @include media-breakpoint-down(lg) {
    display: block;

    .skeletons__poster  {
      margin: 0 auto 40px;
    }
  }
  @include media-breakpoint-down(md) {
    .skeletons__poster {
      width: $md-poster-width;
      height: $md-poster-width * 3 / 2;
    }
    .skeletons__specs {
      .skeletons__spec {
        margin-top: $info-margin-top * 0.9;
      }
      .skeleton__plot {
        height: 250px * 0.8;
        margin-top: $info-margin-top * 0.9;
      }
      .skeleton__etc {
        margin-top: $info-margin-top * 0.9;
      }
    }
  }
}

.movie-info {
  display: flex;
  color: $gray-600;

  .movie-info__poster {
    flex-shrink: 0;
    position: relative;
    width: $poster-width;
    height: $poster-width * 3 / 2;
    margin-right: $poster-margin-right;
    border-radius: $border-radius;
    background-position: center;
    background-size: cover;
    background-color: $gray-200;
  }
  .movie-info__specs {
    flex-grow: 1;

    h3 {
      margin: 24px 0 6px;
      color: $black;
      font-family: "Oswald", sans-serif;
      font-size: 20px;
    }

    .movie-info__title {
      margin-bottom: 30px;

      h1 {
        font-family: "Oswald", sans-serif;
        font-size: 70px;
        line-height: 1;
        color: $black;
      }
    }
    .movie-info__labels {
      color: $primary;
      
      span {
        &::after {
          content: "\00b7";
          margin: 0 6px;
        }
        &:last-child::after {
          display: none;
        }
      }
    }
    .movie-info__plot {
      margin-top: $info-margin-top;
    }
    .movie-info__ratings {
      .ratings__wrap {
        display: flex;

        .rating {
          display: flex;
          align-items: center;
          margin-right: 32px;

          .rating__logo {
            flex-shrink: 0;
            height: 30px;
            margin-right: 6px;
          }
        }
      }
    }
  }

  @include media-breakpoint-down(xl) {
    .movie-info__poster  {
      width: $xl-poster-width;
      height: $xl-poster-width * 3 / 2;
      margin-right: $xl-poster-margin-right;
    }
  }
  @include media-breakpoint-down(lg) {
    display: block;

    .movie-info__poster {
      margin: 0 auto 40px;
    }
  }
  @include media-breakpoint-down(md) {
    .movie-info__poster {
      width: $md-poster-width;
      height: $md-poster-width * 3 / 2;
    }
    .movie-info__specs {
      .movie-info__title {
        h1 {
          font-size: 50px;
        }
      }
      .movie-info__ratings {
        .ratings__wrap {
          display: block;

          .rating {
            margin-bottom: 10px;

            &:last-child {
              margin-bottom: 0;
            }
          }
        }
      }
    }
  }
}
</style>