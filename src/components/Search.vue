<template>
  <!-- Search -->
  <div class="container">
    <input
      v-model="title"
      type="text"
      placeholder="Search for Movies, Series & more"
      class="form-control" />
    <!-- Filters -->
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'" 
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item"
          :value="item">
          {{ item }}
        </option>
      </select>
    </div>
    <!-- //Filters -->
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
  }
};
</script>

<style lang="scss" scoped>
$spacing: 10px;

.container {
  display: flex;

  > * {
    margin-right: $spacing;
    font-size: 15px;

    &:last-child {
      margin-right: 0;
    }
  }

  .selects {
    display: flex;

    select {
      width: 120px;
      margin-right: $spacing;

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>