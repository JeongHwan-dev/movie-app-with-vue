<template>
  <!-- About -->
  <div class="about">
    <div class="about__photo">
      <Loader
        v-if="imageLoading"
        absolute />
      <img
        :src="image"
        :alt="name" 
        class="about__photo__img" />
    </div>
    <div class="about__name">
      <span>{{ name }}</span>
    </div>
    <div class="about__email">
      <span>{{ email }}</span>
    </div>
    <div class="about__github">
      <a
        :href="github"
        target="_blank">{{ github }}</a>
    </div>
  </div>
  <!-- //About -->
</template>

<script>
import { mapState } from 'vuex';
import Loader from '~/components/Loader';

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    };
  },
  computed: {
    ...mapState('about', [
      'image', 
      'name',
      'email', 
      'github'
    ])
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      await this.$loadImage(this.image);
      this.imageLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  padding: 80px 0;
  text-align: center;
  
  .about__photo {
    position: relative;
    box-sizing: border-box;
    width: 250px;
    height: 250px;
    margin: 40px auto 20px;
    border: 10px solid $gray-300;
    border-radius: 50%;
    background-color: $gray-200;

    .about__photo__img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .about__name {
    margin-bottom: 20px;
    font-family: "Oswald", sans-serif;
    font-size: 40px;
  }
  .about__email {
    margin-bottom: 5px;
    color: $gray-700;
  }
}
</style>