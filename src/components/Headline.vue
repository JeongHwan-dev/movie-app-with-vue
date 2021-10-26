<template>
  <!-- Headline -->
  <div class="container headline">
    <h1 class="headline__title">
      <span class="headline__title--highlight">OMDb API</span><br />
      THE OPEN<br />
      MOVIE DATABASE
    </h1>
    <p class="headline__desc">
      The OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.<br />
      If you find this service useful, please consider making a one-time donation or become a patron.
    </p>
  </div>
  <!-- //Headline -->
</template>

<style lang="scss" scoped>
.headline {
  height: 1500px;
  padding-top: 110px;

  .headline__title {
    font-family: "Oswald", sans-serif;
    font-size: 80px;
    line-height: 1;

    .headline__title--highlight {
      color: $primary;
    }
  }
  .headline__desc {
    margin: 30px 0;
    color: $gray-600;
  }
  
  @include media-breakpoint-down(sm) {
    padding-top: 105px;
  }
}
</style>