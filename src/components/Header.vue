<template>
  <!-- Header -->
  <header>
    <Logo />
    <!-- Navigation -->
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          :class="{ active: isMatch(nav.path) }"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
    <!-- //Navigation -->
  </header>
  <!-- //Header -->
</template>

<script>
import Logo from '~/components/Logo';

export default {
  components:  {
    Logo
  },
  data() {
    return {
      navigations: [
        {
          name: 'Search',
          href: '/'
        }, 
        {
          name: 'Movie',
          href: '/movie/tt1285016',
          path: /^\/movie/
        }, 
        {
          name: 'About',
          href: '/about'
        }
      ]
    };
  },
  methods: {
    isMatch(path) {
      return !path ? false : path.test(this.$route.fullPath);
    }
  }
};
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  height: 70px;
  padding: 0 40px;

  .logo {
    margin-right: 40px;
  }
}
</style>