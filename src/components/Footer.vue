<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/JeongHwan-dev"
      target="_blank">(c) {{ new Date().getFullYear() }} Park Jeong-hwan.dev</a>
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
footer {
  opacity: .3;
  padding: 70px 0;
  text-align: center;

  a {
    text-decoration: none;
  }

  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>