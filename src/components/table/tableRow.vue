<template>
  <router-link class="football-table-row-link" :to="{ name: routeName, params: { id: item.id } }">
    <tr class="football-table-row" :class="rowClass">
      <td
        v-for="(rowDataItem, index) in rowData"
        :key="index"
        class="football-table-row__item"
      >
        <template v-if="rowDataItem.url">
          <img class="football-table-row__image" :src="rowDataItem.url" alt="Logo">
        </template>

        <template v-else>
          {{ rowDataItem }}
        </template>
      </td>
    </tr>
  </router-link>
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
      const { item, type } = this

      if (type === 'leagues') {
        return [
          item.name ?? '',
          item.area?.name ?? '',
          item.currentSeason?.startDate ?? '',
          item.currentSeason?.currentMatchday ?? '',
          item.currentSeason?.winner?.name ?? '',
        ]
      }

      return [
        { url: item.crestUrl ?? null },
        item.name ?? '',
        item.area?.name ?? '',
        item.venue ?? '',
      ]
    },

    rowClass () {
      const { type } = this

      return `football-table-row--${type}`
    },

    routeName () {
      const { type } = this

      return type === 'leagues' ? 'LeagueView' : 'TeamView'
    },
  },
}
</script>

<style lang="scss" scoped>
.football-table-row {
  $this: &;

  display: flex;
  align-items: center;
  padding: 10px;
  transition: background 0.1s ease-in;

  &:hover {
    background: #eaf0f55e;
  }


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

  &--teams {
    #{$this}__item {
      width: 450px;
    }
  }

  &__image {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
}

.football-table-row-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>