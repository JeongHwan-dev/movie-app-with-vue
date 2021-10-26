<template>
  <!-- Logo -->
  <RouterLink
    to="/"
    :class="{'logo--scrolled' : scrollPosition > 0}"
    class="logo">
    <span class="logo--highlight">OMDbAPI</span>.COM
  </RouterLink>
  <!-- //Logo -->
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: null
    };
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
};
</script>

<style lang="scss" scoped>
.logo {
  color: $black;
  font-family: "Oswald", sans-serif;
  font-size: 20px;
  text-decoration: none; 

  &:hover {
    color: $black;
  }

  .logo--highlight {
    color: $primary;
  }
}

#header {
  .logo {
    &.logo--scrolled {
      .logo--highlight {
        color: $white;
      }
    }
  }
}
</style>