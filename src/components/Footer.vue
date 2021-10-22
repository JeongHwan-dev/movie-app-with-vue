<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/JeongHwan-dev"
      target="_blank"
      class="footer__copyright">(c) {{ new Date().getFullYear() }} Park Jeong-hwan.dev</a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo';

export default {
  components: {
    Logo
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

footer {
  margin-top: 100px;
  padding: 60px 0;
  background-color: $gray-800;
  text-align: center;

  .logo {
    display: block;
    margin-bottom: 4px;
  }
  .footer__copyright {
    color: $gray-300;
    text-decoration: none;
  }
}
</style>