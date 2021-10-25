<template>
  <!-- Header -->
  <header id="header">
    <div class="header__inner">
      <!-- Logo -->
      <Logo />
      <!-- //Logo -->
      <!-- Navigation -->
      <nav class="nav nav-pills">
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
      </nav>
      <!-- //Navigation -->
      <!-- Navigation bar button -->
      <button
        class="nav-bar-btn"
        @click="onClickNavBarBtn">
        <Fa
          v-if="!navBarStatus"
          icon="bars" /> 
        <Fa
          v-else
          icon="times" />
      </button>
      <!-- //Navigation bar button -->
    </div>
    <!-- Navigation bar -->
    <div
      class="nav-bar"
      :class="{ 'nav-bar--expanded': navBarStatus }">
      <ul class="nav-bar__items">
        <li
          v-for="nav in navigations"
          :key="nav.name"
          class="nav-bar__item">
          <RouterLink
            :to="nav.href"
            class="nav-bar__item-link">
            {{ nav.name }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- //Navigation bar -->
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
      ],
      navBarStatus: false
    };
  },
  methods: {
    isMatch(path) {
      return !path ? false : path.test(this.$route.fullPath);
    },
    onClickNavBarBtn() {
      this.navBarStatus = !this.navBarStatus;
    }
  }
};
</script>

<style lang="scss" scoped>

#header {
  .header__inner {
    display: flex;
    align-items: center;
    height: 70px;
    padding: 0 40px;

    .logo {
      margin-right: 40px;
    }
    .nav-bar-btn {
      display: none;
      justify-content: center;
      align-items: center;
      border: none;
      background-color: transparent;
      font-size: 26px;
      color: $primary;
    }
  }

  .nav-bar {
    display: none;
    overflow-y: hidden;
    opacity: 0.9;
    max-height: 0;
    transition: .3s ease;

    .nav-bar__items {
      padding: 0;

      .nav-bar__item {
        width: 100%;
        background-color: $primary;
        transition: .15s;

        .nav-bar__item-link {
          display: block;
          opacity: 1;
          padding: 18px 20px;
          font-size: 18px;
          color: $white;
          text-decoration: none;
        }

        &:hover {
          opacity: 0.8;
        }
      }
    }

    &.nav-bar--expanded {
      max-height: 100vh;
    }
  }

  @include media-breakpoint-down(sm) {
    .header__inner {
      padding: 0 22px;
      justify-content: space-between;

      .nav {
        display: none;
      }
      .nav-bar-btn {
        display: flex;
      }
    }
    .nav-bar {
      display: block;
    }
  }
}
</style>