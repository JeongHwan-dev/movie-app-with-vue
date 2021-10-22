<template>
  <!-- Headline -->
  <div class="container headline">
    <h1 class="headline__title">
      <span>OMDb API</span><br />
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
@import "~/scss/main";

.headline {
  padding-top: 40px;
}

.headline__title {
  font-family: "Oswald", sans-serif;
  font-size: 80px;
  line-height: 1;

  span {
    color: $primary;
  }
}
.headline__desc {
  margin: 30px 0;
  color: $gray-600;
}
</style>