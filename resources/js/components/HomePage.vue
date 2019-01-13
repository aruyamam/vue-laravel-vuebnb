<template>
  <div class="home-container">
    <div v-for="(group, country) in listing_groups" class="listing-summary-group">
      <h1>Places in {{ country }}</h1>
      <div class="listing-summaries">
        <listing-summary v-for="listing in group" :key="listing.id" :listing="listing"></listing-summary>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { groupByCountry } from '../helper';
import ListingSummary from './ListingSummary.vue';

import routeMixin from '../route-mixin.js';

export default {
   components: {
      ListingSummary,
   },
   mixins: [routeMixin],
   data() {
      return { listing_groups: [] };
   },
   methods: {
      assignData({ listings }) {
         this.listing_groups = groupByCountry(listings);
      },
   },
};
</script>
<style>
.listing-summary-group {
  padding-bottom: 20px;
}

.listing-summaries {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
}

.listing-summaries > .listing-summary {
  margin-right: 15px;
}

.listing-summaries > .listing-summary:last-child {
  margin-right: 0;
}
</style>
