<template>
  <header class="football-header">
    <nav class="football-header__navigation">
      <ul class="football-header__navigation-inner">
        <li class="football-header__navigation-item" :class="isActive('LeaguesView')">
          <router-link class="football-header__navigation-link" to="/">
            Лиги и соревнования
          </router-link>
        </li>

        <li class="football-header__navigation-item" :class="isActive('TeamsView')">
          <router-link class="football-header__navigation-link" to="/teams">						
            Команды
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavigationHeader',

  methods: {
    isActive (name) {
      const { name: routeName } = this.$route

      const activeClassName = 'football-header__navigation-item--active'
      const namesTheSame = routeName === name

      return namesTheSame ? activeClassName : ''
    },
  },
}
</script>

<style lang="scss" scoped>
.football-header {
  width: 100%;
  height: 50px;
  padding: 5px 10px;
  border: 3px solid #2c3e50;

  @media screen and (max-width: 768px) {
    height: auto;
  }

  &__navigation {
    display: flex;
    align-items: center;
    height: 100%;
  }

  &__navigation-inner {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  &__navigation-item {
    display: inline-block;

    &--active {
      text-decoration: underline;
    }

    &:not(:last-child) {
      margin-right: 30px;
    }

    @media screen and (max-width: 768px) {
      padding: 9px;
      
      &:not(:last-child) {
        margin-right: 0;
        margin-bottom: 9px;
      }
    }
  }

  &__navigation-link {
    color: #2c3e50;
    text-decoration: none;
  }
}
</style>