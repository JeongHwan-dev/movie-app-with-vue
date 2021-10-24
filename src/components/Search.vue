<template>
  <!-- Search -->
  <div class="container search">
    <input
      v-model="title"
      type="text"
      placeholder="Search for Movies, Series & more"
      class="form-control search__input"
      @keyup.enter="apply" />
    <!-- Filters -->
    <div class="search__selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select search__select">
        <option
          v-if="filter.name === 'year'" 
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <!-- //Filters -->
    <button
      class="btn btn-primary search__btn"
      @click="apply">
      Apply
    </button>
  </div>
  <!-- //Search -->
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['movie', 'series', 'episode']
        },
        {
          name: 'number',
          items: [10, 20, 30]
        },
        {
          name: 'year',
          items: (() => {
            const years = [];
            const thisYear = new Date().getFullYear();

            for (let year = thisYear; year >= 1985; year -= 1) {
              years.push(year);
            }

            return years;
          })()
        }
      ]
    };
  },
  methods: {
    async apply() {
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number: this.number,
        year: this.year
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/scss/main";

$spacing: 10px;
$search-width: 120px;

.search {
  display: flex;

  > * {
    margin-right: $spacing;
    font-size: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  .search__selects {
    display: flex;

    select {
      width: $search-width;
      margin-right: $spacing;

      &:last-child {
        margin-right: 0;
      }
    }
  }
  .search__btn {
    flex-shrink: 0;
    width: $search-width;
    height: 50px;
    font-weight: 700;
  }

  @include media-breakpoint-down(lg) {
    display: block;

    .search__input {
      height: 38px;
      margin-right: 0;
      margin-bottom: 10px;
    }
    .search__selects {
      height: 38px;
      margin-right: 0;
      margin-bottom: 10px;

      .search__select {
        width: 100%;
      }
    }
    .search__btn {
      width: 100%;
    }
  }
}
</style>