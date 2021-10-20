<template>
  <div class="container">
    <div
      :class="{ 'no-result': !movies.length }"
      class="inner">
      <div
        v-if="message"
        class="message">
        {{ message }}
      </div>
      <div
        v-else
        class="movies">
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

export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
    message() {
      return this.$store.state.movie.message;
    }
  },
};
</script>

<style lang="scss" container>
@import "~/scss/main";

.container  {
  margin-top: 30px;
  
  .inner {
    padding: 10px 0;
    border-radius: 4px;
    background-color: $gray-200;
    text-align: center;

    &.no-result {
      padding: 70px 0;
    }
  }

  .message {
    font-size: 20px;
    color: $gray-400;
  }

  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}
</style>