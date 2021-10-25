<template>
  <!-- Logo -->
  <RouterLink
    to="/"
    class="logo">
    <span class="logo--highlight">OMDbAPI</span>.COM
  </RouterLink>
  <!-- //Logo -->
</template>

<style lang="scss" scoped>
.logo {
  color: $black;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  text-decoration: none; 

  .logo--highlight {
    color: $primary;
  }

  &:hover {
    color: $black;
  }
}
</style>