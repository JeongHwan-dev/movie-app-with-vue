<template>
  <div class="container">
    <div class="skeletons">
      <div class="skeleton poster"></div>
      <div class="specs">
        <div class="skeleton title"></div>
        <div class="skeleton spec"></div>
        <div class="skeleton plot"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
        <div class="skeleton etc"></div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route);

    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    });
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

$poster-width: 500px;
$info-margin: 20px;

.container {
  padding-top: 40px;
}

.skeletons {
  display: flex;

  .poster {
    flex-shrink: 0;
    width: $poster-width;
    height: $poster-width * 3 / 2;
    margin-right: 70px;
  }
  .specs {
    flex-grow: 1;
  }

  .skeleton {
    border-radius: 10px;
    background-color: $gray-200;
    
    &.title {
      width: 80%;
      height: 70px;
    }
    &.spec {
      width: 60%;
      height: 30px;
      margin-top: $info-margin;
    }
    &.plot {
      width: 100%;
      height: 250px;
      margin-top: $info-margin;
    }
    &.etc {
      width: 50%;
      height: 50px;
      margin-top: $info-margin;
    }
  }
}
</style>