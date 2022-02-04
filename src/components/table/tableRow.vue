<template>
  <tr class="football-table-row" :class="rowClass">
    <td
      v-for="(rowDataItem, index) in rowData"
      :key="index"
      class="football-table-row__item"
    >
      {{ rowDataItem }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',

  props: {
    type: {
      type: String,
      default: 'leagues',
    },
    item: {
      type: Object,
      default: () => {},
    },
  },

  computed: {
    rowData () {
      const { item } = this

      return [
        item.name ?? '',
        item.area?.name ?? '',
        item.currentSeason?.startDate ?? '',
        item.currentSeason?.currentMatchday ?? '',
        item.currentSeason?.winner?.name ?? '',
      ]
    },

    rowClass () {
      const { type } = this

      return `football-table-row--${type}`
    },
  },
}
</script>

<style lang="scss" scoped>
.football-table-row {
  display: block;
  padding: 10px;
  border-bottom: 1px solid #2c3e50;

  $this: &;

  &__item {
    display: inline-block;

    &:not(:last-child) {
      margin-right: 5px;
    }
  }

  &--leagues {
    #{$this}__item {
      width: 350px;
    }
  }
}
</style>