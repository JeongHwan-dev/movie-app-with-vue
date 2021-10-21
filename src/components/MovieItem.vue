<template>
  <div
    :style="{backgroundImage: `url(${movie.Poster})`}"
    class="movie">
    <div class="info">
      <div class="year">
        {{ movie.Year }}
      </div>
      <div class="title">
        {{ movie.Title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";
$width: 200px;

.movie {
  overflow: hidden;
  position: relative;
  width: $width;
  height: $width * 3 / 2;
  margin: 10px;
  border-radius: 4px;
  background-size: cover;
  background-color: $gray-400;

  .info {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 14px;
    background-color: rgba($black, .3);
    backdrop-filter: blur(10px);
    font-size: 14px;
    text-align: center;
    
    .year {
      color: $primary;
    }
    .title {
      white-space: nowrap;
      overflow: hidden;
      color: $white;
      text-overflow: ellipsis;
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