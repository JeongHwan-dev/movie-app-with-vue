<template>
  <!-- Not Found -->
  <div class="not-found">
    <h1 class="not-found__status">
      404
    </h1>
    <p class="not-found__message">
      Page Not Found!
    </p>
    <RouterLink
      to="/"
      class="btn btn-primary not-found__btn">
      Back to home
    </RouterLink>
  </div>
  <!-- //Not Found -->
</template>

<style lang="scss" scoped>
@import "~/scss/main";

  .not-found {
    padding: 100px 0;
    font-family: "Oswald", sans-serif;
    line-height: 1.2;
    text-align: center;

    .not-found__status {
      font-size: 180px;
      color: $primary;
    }
    .not-found__message {
      margin-bottom: 50px;
      font-size: 54px;
    }
    .not-found__btn {
      padding: 10px 30px;
      font-size: 22px;
      color: $white;
      text-decoration: none;
    }
  }
</style>