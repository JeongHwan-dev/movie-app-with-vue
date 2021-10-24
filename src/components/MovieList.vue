<template>
  <div class="container movie-list">
    <div
      :class="{ 'no-result': !movies.length }"
      class="movie-list__inner">
      <Loader v-if="loading" />
      <div
        v-if="message"
        class="movie-list__message">
        {{ message }}
      </div>
      <div
        v-else
        class="movie-list__movies">
        <MovieItem
          v-for="movie in movies"
          :key="movie.imdbID"
          :movie="movie" />
      </div>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem';
import Loader from '~/components/Loader';

export default {
  components: {
    MovieItem,
    Loader
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
    message() {
      return this.$store.state.movie.message;
    },
    loading() {
      return this.$store.state.movie.loading;
    }
  },
};
</script>

<style lang="scss" container>
.movie-list  {
  margin-top: 30px;
  
  .movie-list__inner {
    padding: 10px 0;
    border-radius: 4px;
    background-color: $gray-200;
    text-align: center;

    &.no-result {
      padding: 70px 0;
    }
  }

  .movie-list__message {
    font-size: 20px;
    color: $gray-400;
  }
  .movie-list__movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>