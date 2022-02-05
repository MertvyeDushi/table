<template>
  <div id="app">
    <navigation-header />
    <router-view/>
    <div class="football-copyright">
      <mark-tooltip />
    </div>
  </div>
</template>

<script>
import NavigationHeader from '@/components/common/NavigationHeader'
import MarkTooltip from '@/components/common/MarkTooltip'
/**
 * ТЗ:
 * 
 * 0. API: https://www.football-data.org/
 * 
 * 1. Список лиг/соревнований. ТЗ: поиск айтема (обязательно);
 * 2. Список команд. ТЗ: поиск айтема (обязательно);
 * 3. Календарь лиги (список матчей лиги/соревнования) ТЗ: фильтр по дате (обязательно? уточнить у заказчика. ОТВЕТ: требование не обязательно!);
 * 4. Календарь команды (список матчей команды) ТЗ: фильтр по дате (обязательно? уточнить у заказчика. ОТВЕТ: требование не обязательно!);
 * 
 * 5. При выполнении поиска сохранять query в роуте;
 * 6. Ключи в .env;
 * 
 * TODO:
 * 
 * СТОР (Лиги)
 * 1. Экшны:
 * - loadLeagues - загрузка всех лиг;
 * - loadLeaguesByQuery - загрузка лиг по названию (если API нет, то использовать геттер с фильтром через .filter());
 * 
 * 2. Мутации:
 * - setLeagues - установка лиг;
 * 
 * 3. Стейт:
 * - leagues - лиги;
 * 
 * СТОР (Команды): аналогично.
 * 
 * СТОР (Календари):
 * 
 * 1. loadMatches - загрузка матчей;
 * 2. loadMatchesByDate - загрузка матчей по дате;
 * 3. setMatches - установка матчей;
 * 4. matches - матчи;
 * 
 * Структура:
 * 
 * common: навигация, поиск (поле ввода + кнопка, разделять не надо, в одном компоненте), календарь;
 * views: LeaguesView, TeamsView, LeagueCalendarView, TeamCalendarView. (Страницы держим раздельными!)
 */

export default {
  name: 'App',

  components: {
    NavigationHeader,
    MarkTooltip,
  },
}
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  padding-top: 92px;
  padding-bottom: 40px;
  background: #e0e0e0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1d1d1d;
}

body {
  box-sizing: border-box;
  position: relative;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

*:active, *:hover, *:focus {
  outline: 0;
  outline-offset: 0;
}

button {
  border: none;

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.football-copyright {
  position: fixed;
  bottom: 5px;
  right: 5px;
}
</style>
