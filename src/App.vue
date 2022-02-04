<template>
  <div id="app">
    <!-- Навигация -->

    <!-- Отображение страниц -->
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

/**
 * TODO:
 * 
 * 0. API: https://www.football-data.org/
 * 
 * 1. Список лиг/соревнований. ТЗ: поиск айтема (обязательно);
 * 2. Список команд. ТЗ: поиск айтема (обязательно);
 * 3. Календарь лига (список матчей лиги/соревнования) ТЗ: фильтр по дате (обязательно? уточнить у заказчика);
 * 4. Календарь команды (список матчей команды) ТЗ: фильтр по дате (обязательно? уточнить у заказчика);
 * 
 * 5. При выполнении поиска сохранять query в роуте;
 * 6. Ключи в .env;
 */

export default {
  name: 'RootPage',

  methods: {
    ...mapActions(['loadPage']),
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
