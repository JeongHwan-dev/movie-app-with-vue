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
          href: '/Moive'
        }, 
        {
          name: 'About',
          href: '/About'
        }
      ]
    };
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