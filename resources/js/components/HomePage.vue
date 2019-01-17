<template>
  <div class="home-container">
    <listing-summary-group
      v-for="(group, country) in listing_groups"
      :key="country"
      :listings="group"
      :country="country"
      class="listing-summary-group"
    />
  </div>
</template>
<script>
import ListingSummaryGroup from './ListingSummaryGroup.vue';
import { groupByCountry } from '../helper';

export default {
   components: {
      ListingSummaryGroup,
   },
   computed: {
      listing_groups() {
         return groupByCountry(this.$store.state.listing_summaries);
      },
   },
};
</script>
<style>
</style>
