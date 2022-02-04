<template>
  <form class="football-search-form">
    <input
      class="football-search-form__input"
      type="text"
      :value="text"
      placeholder="Поиск"
      @input="handleInput"
    >
  </form>
</template>

<script>
export default {
  name: 'SearchForm',

  props: {
    text: {
      type: String,
      default: '',
    },
  },

  methods: {
    handleInput (e) {
      const { value } = e.target

      this.$emit('on-input', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.football-search-form {
  height: 60px;
  padding: 10px;
  background: #e0e0e0;

  &__input {
    width: 100%;
    height: 100%;
    padding: 5px 10px;
    border: none;
    border-radius: 12px;
  }
}
</style>