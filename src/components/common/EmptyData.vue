<template>
  <div class="football-empty">
    <h1 class="football-empty__title">
      No data
    </h1>
    <div v-if="error" class="football-empty__error">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'EmptyData',

  computed: {
    ...mapState([
      'error',
    ]),
  },

  methods: {
    ...mapMutations([
      'setError',
    ]),
  },

  beforeDestroy () {
    const { error } = this

    if (error) {
      this.setError(null)
    }
  },
}
</script>

<style lang="scss" scoped>
.football-empty {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__title {
    padding: 10px;
  }

  &__error {
    padding: 10px;
    color: rgb(26, 14, 14);
  }
}
</style>
