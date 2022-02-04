<template>
  <component
    :is="component"
    class="football-table-row-link"
    :to="{ name: 'MatchesView', params: routeParams }"
  >
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
  </component>
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
    component () {
      const { name } = this.$route

      return name === 'MatchesView' ? 'div' : 'router-link'
    },

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
      } else if (type === 'teams') {
        return [
          { url: item.crestUrl ?? null },
          item.name ?? '',
          item.area?.name ?? '',
          item.venue ?? '',
        ]
      } else {
        return [
          `${item.awayTeam?.name ?? ''} - ${item.homeTeam?.name ?? ''}`,
          item.season?.startDate ? new Date(item.season.startDate).toISOString().slice(0, 10) : '',
          item.season?.endDate ? new Date(item.season.endDate).toISOString().slice(0, 10) : '',
          item.status ?? '',
          item.winner ?? '',
        ]
      }
    },

    rowClass () {
      const { type } = this

      return `football-table-row--${type}`
    },

    routeParams () {
      const { type, item } = this

      return {
        type: type === 'leagues' ? 'league' : 'team',
        id: item.id,
      }
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

  &--matches {
    #{$this}__item {
      width: 500px;
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