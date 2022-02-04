<template>
  <table class="football-table">
    <table-header :items="headerItems" :type="type" />

    <tbody class="football-table__wrapper">
      <table-row
        v-for="item in items"
        :key="item.id"
        :item="item"
        :type="type"
      />
    </tbody>
  </table>
</template>

<script>
import TableHeader from '@/components/table/TableHeader'
import TableRow from '@/components/table/TableRow'

export default {
  name: 'TableBody',

  components: {
    TableHeader,
    TableRow,
  },

  props: {
    type: {
      type: String,
      default: 'leagues',
    },
    items: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    headerItems () {
      const { type } = this

      switch (type) {
        case 'leagues':
          return [
            'Название',
            'Страна',
            'Дата старта',
            'День соревнования',
            'Победитель'
          ]
        case 'teams':
          return [
            'Логотип',
            'Название',
            'Страна',
            'Стадион',
          ]
        case 'matches':
          return [
            'Команды',
            'Дата начала',
            'Дата окончания',
            'Статус',
            'Победитель',
          ]
        default:
          return []
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.football-table {
  display: block;

  &__wrapper {
    display: block;
  }
}
</style>