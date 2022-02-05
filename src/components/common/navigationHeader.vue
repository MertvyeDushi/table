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
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 75px;
  padding: 5px 20px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #e0e0e0;
  box-shadow: 31px 31px 63px #bebebe, -31px -31px 63px #ffffff;

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
      font-weight: bolder;
    }

    &:not(:last-child) {
      margin-right: 30px;
    }

    @media screen and (max-width: 768px) {
      padding: 9px;
      
      &:not(:last-child) {
        margin-right: 0;
      }
    }
  }

  &__navigation-link {
    color: #1d1d1d;
    text-decoration: none;
  }
}
</style>